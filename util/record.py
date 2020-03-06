import time
import cv2

num_cameras = 4
cameras = []
captures = []
for i in range(num_cameras):
    print("Opening camera {}".format(i))
    captures.append(cv2.VideoWriter('{}.avi'.format(i), cv2.VideoWriter_fourcc('M','J','P','G'), 30, (1920, 1080)))
    camera = cv2.VideoCapture(i+1+cv2.CAP_DSHOW)
    camera.set(3,1920)
    camera.set(4,1080)
    cameras.append(camera)
    print(camera.isOpened())
    assert camera.isOpened()

print("Recording...")

try:
    frameNum = 0
    while True:
        print("Read frame {}".format(frameNum))
        for i in range(num_cameras):
            ret, frame = cameras[i].read()
            try:
                assert ret
            except:
                print("Failed to read frame {} from camera {}".format(frameNum, i))
            captures[i].write(frame)
        frameNum += 1
except:
    for i in range(num_cameras):
        cameras[i].release()
        captures[i].release()
