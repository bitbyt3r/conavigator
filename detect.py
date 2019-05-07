#!/bin/env python
import os
import sys
import cv2
import time
import json
import numpy as np
import aruco
import asyncio
import websockets
import concurrent.futures

if __name__ == '__main__':
    if len(sys.argv) != 2:
        sys.exit("Usage: detect.py <camera index>")

    with open("web/config.json", "r") as CONFIG:
        config = json.load(CONFIG)
    camera = config['cameras'][int(sys.argv[1])]

    camparam = aruco.CameraParameters()
    camparam.readFromXMLFile(os.path.join("calibration", camera['paramFile']))

    detector = aruco.MarkerDetector()
    cap = cv2.VideoCapture(int(sys.argv[1]))
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, camera['width'])
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, camera['height'])
    cap.set(cv2.CAP_PROP_FPS, camera['fps'])

    trackers = {}

    def detectMarkers():
        ret, frame = cap.read()
        if not ret:
            print("Failed to capture image: {}".format(ret))
            return []

        markers = detector.detect(frame)
        data = {}
        for marker in markers:
            if not marker.id in trackers:
                trackers[marker.id] = aruco.MarkerPoseTracker()
            #marker.calculateExtrinsics(config['markerSize'], camparam)
            if trackers[marker.id].estimatePose(marker, camparam, config['markerSize'], config['minErrorRatio']):
                data[marker.id] = {
                    "corners": [x.tolist() for x in marker],
                    "rotation": marker.Rvec.transpose().tolist()[0],
                    "translation": marker.Tvec.transpose().tolist()[0]
                }
        return json.dumps(data)

    loop = asyncio.get_event_loop()

    clients = set()
    async def connection(websocket, path):
        print("Client connected")
        clients.add(websocket)
        while True:
            await websocket.recv()

    async def broadcast(message):
        if clients:
            await asyncio.wait([client.send(message) for client in clients])

    async def start():
        await websockets.serve(connection, camera['server'], camera['port'])
        last_time = time.time()
        while True:
            if False:
                now = time.time()
                print("Running at {} FPS".format(1/(now-last_time)))
                last_time = now
            markers = await loop.run_in_executor(None, detectMarkers)
            await broadcast(markers)

    loop.run_until_complete(start())
    