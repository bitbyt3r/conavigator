#!/bin/env python
import os
import sys
import cv2
import json
import numpy as np
import aruco

if __name__ == '__main__':
    if len(sys.argv) != 2:
        sys.exit("Usage: detect.py <image directory>")

    def detectMarkers(path):
        detector = aruco.MarkerDetector()
        frame = cv2.imread(path)
        markers = detector.detect(frame)
        return [x.id for x in markers]

    for image in os.listdir(sys.argv[1]):
        src_path = os.path.join(sys.argv[1], image)
        markers = detectMarkers(src_path)
        if (len(markers) == 1):
            os.rename(src_path, os.path.join(sys.argv[1], str(markers[0])+"."+image.split(".")[-1]))
        else:
            print("Failed to label {}".format(image))