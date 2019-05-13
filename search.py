#!/bin/env python
import os
import sys
import cv2
import json
import numpy as np
import aruco

data = {}

goals = {
    111: {"x": 0, "y": 0, "color": "Black", "text": "Is the great filter technology? Necessary for late states, but ultimatly ends it.", "note": "Is the great filter technology? Necessary for civilization, but ends up always destroying it."},
    112: {"x": 0, "y": 0, "color": "Black", "text": "galactic habitable zone", "note": ""},
    113: {"x": 0, "y": 0, "color": "Black", "text": "5 most abundant elements except for phosphorus is weird though", "note": "main elements for life are very abundant except for phosphorus"},
    114: {"x": 0, "y": 0, "color": "Black", "text": "If great filter is L how bad is it?", "note": "If great filter is L is how bad is it?"},
    121: {"x": 0, "y": 0, "color": "Black", "text": "ET's biolum- implies use of biological compounds that use biolum-", "note": ""},
    122: {"x": 0, "y": 0, "color": "Black", "text": "The relationship between life + the planet", "note": ""},
    123: {"x": 0, "y": 0, "color": "Black", "text": "What if other life is far enough away that humans will never recieve its communication?", "note": ""},
    124: {"x": 0, "y": 0, "color": "Black", "text": "Carbon+ water", "note": ""},
    125: {"x": 0, "y": 0, "color": "Black", "text": "habitability+ habitable zones", "note": ""},
    126: {"x": 0, "y": 0, "color": "Black", "text": "our definition of life is already being contested on our planet", "note": ""},
    127: {"x": 0, "y": 0, "color": "Black", "text": "Unknown Tile", "note": ""},
    128: {"x": 0, "y": 0, "color": "Black", "text": "The Great Filter + the probability of life", "note": ""},
    129: {"x": 0, "y": 0, "color": "Black", "text": "Intelligent life has a tendency to destroy itself", "note": ""},
    130: {"x": 0, "y": 0, "color": "Orange", "text": "-Astrobiology -climate change -aliens -Mars -only Earth has life?", "note": ""},
    131: {"x": 0, "y": 0, "color": "Orange", "text": "The Drake equation  Fermi Paradox  Midterm essay", "note": ""},
    132: {"x": 0, "y": 0, "color": "Orange", "text": "Water, Carbon Silicon?", "note": ""},
    133: {"x": 0, "y": 0, "color": "Orange", "text": "Multiple universes? +Life?", "note": ""},
    134: {"x": 0, "y": 0, "color": "Orange", "text": "-Gaian regulation  -movies about aliens", "note": ""},
    135: {"x": 0, "y": 0, "color": "Orange", "text": "-The Great Filter. -Scary", "note": ""},
    136: {"x": 0, "y": 0, "color": "Orange", "text": "-Habitable zone  -Big Bang  -end of the universe", "note": ""},
    137: {"x": 0, "y": 0, "color": "Orange", "text": "Black Holes+ time+ gravity", "note": ""},
    138: {"x": 0, "y": 0, "color": "Black", "text": "Are Humans doing this wrong??!!", "note": ""},
    139: {"x": 0, "y": 0, "color": "Black", "text": "Was ET carbon-based? Bio-illum... on his finger?", "note": ""},
    140: {"x": 0, "y": 0, "color": "Orange", "text": "Tendincy? applies a pattern but as we know for it's just us", "note": ""},
    141: {"x": 0, "y": 0, "color": "Orange", "text": "I don't know- Obvious? Like how? What? Abundance?", "note": ""},
    142: {"x": 0, "y": 0, "color": "Orange", "text": "LAWKI (molecular)", "note": ""},
    144: {"x": 0, "y": 0, "color": "Blue", "text": "exotic biology", "note": ""},
    145: {"x": 0, "y": 0, "color": "Blue", "text": "phosphorus not as abundant", "note": ""},
    146: {"x": 0, "y": 0, "color": "Blue", "text": "abiogenesis bottleneck", "note": ""},
    147: {"x": 0, "y": 0, "color": "Blue", "text": "Why use same bases? ATCGU", "note": ""},
    148: {"x": 0, "y": 0, "color": "Blue", "text": "membrane function universal?", "note": ""},
    149: {"x": 0, "y": 0, "color": "Blue", "text": "alternate methods of code polysaccarides AA lipids", "note": "alternate methods of genetic code:  Polysaccarides, amino acids, lipids"},
    150: {"x": 0, "y": 0, "color": "Black", "text": "Why use same chirality", "note": ""},
    151: {"x": 0, "y": 0, "color": "Black", "text": "Are humans doing this right or first", "note": "Are humans actually handling civilization better than aliens or are they the first civilization?"},
    152: {"x": 0, "y": 0, "color": "Blue", "text": "Great filter L?", "note": ""},
    153: {"x": 0, "y": 0, "color": "Blue", "text": "Early origins of life", "note": ""},
    154: {"x": 0, "y": 0, "color": "Blue", "text": "Gaian bottleneck", "note": ""},
    155: {"x": 0, "y": 0, "color": "Black", "text": "Chemical evolution (abiotic-->biotic)", "note": ""},
    156: {"x": 0, "y": 0, "color": "Blue", "text": "Carbon/water are building blocks because they have special properties", "note": ""},
    157: {"x": 0, "y": 0, "color": "Blue", "text": "Intelligence--> the ability to do things that are not beneficial to your/yours species's survival", "note": ""},
    158: {"x": 0, "y": 0, "color": "Blue", "text": "obvious materials for life", "note": ""},
    159: {"x": 0, "y": 0, "color": "Blue", "text": "Planetary evolution Gaian or not?", "note": ""},
}

if __name__ == '__main__':
    if len(sys.argv) != 2:
        sys.exit("Usage: detect.py <image directory>")

    with open("web/config.json", "r") as CONFIG:
        config = json.load(CONFIG)
    camera = config['cameras'][0]

    camparam = aruco.CameraParameters()
    camparam.readFromXMLFile(os.path.join("calibration", camera['paramFile']))

    def detectMarkers(path):
        detector = aruco.MarkerDetector()
        frame = cv2.imread(path)
        markers = detector.detect(frame)
        for marker in markers:
            marker.calculateExtrinsics(config['markerSize'], camparam)
            data[marker.id] = {
                "translation": marker.Tvec.transpose().tolist()[0]
            }

    for image in os.listdir(sys.argv[1]):
        src_path = os.path.join(sys.argv[1], image)
        markers = detectMarkers(src_path)
    for i in data:
        goals[i]['x'] = data[i]['translation'][1]*-1
        goals[i]['y'] = data[i]['translation'][0]*-1
    print(json.dumps(goals, indent=2, sort_keys=True))