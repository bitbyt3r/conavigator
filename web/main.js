var markers = {};
var marker_state = {};
var goals = {
    "111": {
      "color": "Black",
      "note": "Is the great filter technology? Necessary for civilization, but ends up always destroying it.",
      "text": "Is the great filter technology? Necessary for late states, but ultimatly ends it.",
      "x": 377.6502990722656,
      "y": 221.47035217285156
    },
    "112": {
      "color": "Black",
      "note": "",
      "text": "galactic habitable zone",
      "x": -79,
      "y": -487
    },
    "113": {
      "color": "Black",
      "note": "main elements for life are very abundant except for phosphorus",
      "text": "5 most abundant elements except for phosphorus is weird though",
      "x": -283.98773193359375,
      "y": -104.10572814941406
    },
    "114": {
      "color": "Black",
      "note": "If great filter is L is how bad is it?",
      "text": "If great filter is L how bad is it?",
      "x": -14.701836585998535,
      "y": -636.1333618164062
    },
    "121": {
      "color": "Black",
      "note": "",
      "text": "ET's biolum- implies use of biological compounds that use biolum-",
      "x": 153.38571166992188,
      "y": -179.6067657470703
    },
    "122": {
      "color": "Black",
      "note": "",
      "text": "The relationship between life + the planet",
      "x": -347.9798889160156,
      "y": -373.1423034667969
    },
    "123": {
      "color": "Black",
      "note": "",
      "text": "What if other life is far enough away that humans will never recieve its communication?",
      "x": 0,
      "y": 0
    },
    "124": {
      "color": "Black",
      "note": "",
      "text": "Carbon+ water",
      "x": 168.8729705810547,
      "y": 779.6526489257812
    },
    "125": {
      "color": "Black",
      "note": "",
      "text": "habitability+ habitable zones",
      "x": -85,
      "y": -420
    },
    "126": {
      "color": "Black",
      "note": "",
      "text": "our definition of life is already being contested on our planet",
      "x": 255,
      "y": -177
    },
    "127": {
      "color": "Black",
      "note": "",
      "text": "Unknown Tile",
      "x": 258.84234619140625,
      "y": -292.0993957519531
    },
    "128": {
      "color": "Black",
      "note": "",
      "text": "The Great Filter + the probability of life",
      "x": -64.35432434082031,
      "y": 47.6887092590332
    },
    "129": {
      "color": "Black",
      "note": "",
      "text": "Intelligent life has a tendency to destroy itself",
      "x": 142.54750061035156,
      "y": 1.811058521270752
    },
    "130": {
      "color": "Orange",
      "note": "",
      "text": "-Astrobiology -climate change -aliens -Mars -only Earth has life?",
      "x": 0,
      "y": 0
    },
    "131": {
      "color": "Orange",
      "note": "",
      "text": "The Drake equation  Fermi Paradox  Midterm essay",
      "x": 36.210853576660156,
      "y": -51.400474548339844
    },
    "132": {
      "color": "Orange",
      "note": "",
      "text": "Water, Carbon Silicon?",
      "x": -78.69660949707031,
      "y": 300.551513671875
    },
    "133": {
      "color": "Orange",
      "note": "",
      "text": "Multiple universes? +Life?",
      "x": 269.2399597167969,
      "y": 612.6442260742188
    },
    "134": {
      "color": "Orange",
      "note": "",
      "text": "-Gaian regulation  -movies about aliens",
      "x": -310,
      "y": -254
    },
    "135": {
      "color": "Orange",
      "note": "",
      "text": "-The Great Filter. -Scary",
      "x": 40.881752014160156,
      "y": 46.58992385864258
    },
    "136": {
      "color": "Orange",
      "note": "",
      "text": "-Habitable zone  -Big Bang  -end of the universe",
      "x": -5.597379684448242,
      "y": -173.44342041015625
    },
    "137": {
      "color": "Orange",
      "note": "",
      "text": "Black Holes+ time+ gravity",
      "x": -83,
      "y": -616
    },
    "138": {
      "color": "Black",
      "note": "",
      "text": "Are Humans doing this wrong??!!",
      "x": 246.11204528808594,
      "y": -2.6675865650177
    },
    "139": {
      "color": "Black",
      "note": "",
      "text": "Was ET carbon-based? Bio-illum... on his finger?",
      "x": 145.032470703125,
      "y": -280.2820129394531
    },
    "140": {
      "color": "Orange",
      "note": "",
      "text": "Tendincy? applies a pattern but as we know for it's just us",
      "x": 298.875244140625,
      "y": 193.4908905029297
    },
    "141": {
      "color": "Orange",
      "note": "",
      "text": "I don't know- Obvious? Like how? What? Abundance?",
      "x": -320.9849548339844,
      "y": -17.43709945678711
    },
    "142": {
      "color": "Orange",
      "note": "",
      "text": "LAWKI (molecular)",
      "x": -185.06117248535156,
      "y": 189.68438720703125
    },
    "144": {
      "color": "Blue",
      "note": "",
      "text": "exotic biology",
      "x": 24.359420776367188,
      "y": 267.09942626953125
    },
    "145": {
      "color": "Blue",
      "note": "",
      "text": "phosphorus not as abundant",
      "x": 0,
      "y": 0
    },
    "146": {
      "color": "Blue",
      "note": "",
      "text": "abiogenesis bottleneck",
      "x": -223,
      "y": -254
    },
    "147": {
      "color": "Blue",
      "note": "",
      "text": "Why use same bases? ATCGU",
      "x": 16,
      "y": 552
    },
    "148": {
      "color": "Blue",
      "note": "",
      "text": "membrane function universal?",
      "x": 0,
      "y": 0
    },
    "149": {
      "color": "Blue",
      "note": "alternate methods of genetic code:  Polysaccarides, amino acids, lipids",
      "text": "alternate methods of code polysaccarides AA lipids",
      "x": -68.0854263305664,
      "y": 376.7640686035156
    },
    "150": {
      "color": "Black",
      "note": "",
      "text": "Why use same chirality",
      "x": 0,
      "y": 0
    },
    "151": {
      "color": "Black",
      "note": "Are humans actually handling civilization better than aliens or are they the first civilization?",
      "text": "Are humans doing this right or first",
      "x": 328.5151062011719,
      "y": -12.11351490020752
    },
    "152": {
      "color": "Blue",
      "note": "",
      "text": "Great filter L?",
      "x": -67.87905883789062,
      "y": -54.84665298461914
    },
    "153": {
      "color": "Blue",
      "note": "",
      "text": "Early origins of life",
      "x": -211.9998016357422,
      "y": -351.3555603027344
    },
    "154": {
      "color": "Blue",
      "note": "",
      "text": "Gaian bottleneck",
      "x": -148,
      "y": -90
    },
    "155": {
      "color": "Black",
      "note": "",
      "text": "Chemical evolution (abiotic-->biotic)",
      "x": 0,
      "y": 0
    },
    "156": {
      "color": "Blue",
      "note": "",
      "text": "Carbon/water are building blocks because they have special properties",
      "x": -293,
      "y": 88
    },
    "157": {
      "color": "Blue",
      "note": "",
      "text": "Intelligence--> the ability to do things that are not beneficial to your/yours species's survival",
      "x": 183,
      "y": 149
    },
    "158": {
      "color": "Blue",
      "note": "",
      "text": "obvious materials for life",
      "x": 144.97787475585938,
      "y": 533.46923828125
    },
    "159": {
      "color": "Blue",
      "note": "",
      "text": "Planetary evolution Gaian or not?",
      "x": 0,
      "y": 0
    }
  };
delete_state = 0;
delete_marker = 0;

function startCamera(camera) {
    var acamera = document.getElementById('camera').object3D.children[0];
    //acamera.aspect = 0.5;
    acamera.updateProjectionMatrix();
    const socket = new ReconnectingWebSocket("ws://" + camera.server + ":" + camera.port, null, {automaticOpen: false});
    socket.addEventListener('open', function(event) {
        console.log("Opened "+camera.name+" Camera Socket");
    });
    socket.addEventListener('message', function(response) {
        var observed_markers = JSON.parse(response.data);
        for (var marker_id in observed_markers) {
            var marker = observed_markers[marker_id];
            if (marker_id == 104) {
                if (delete_state == 0) {
                    for (var delete_id in marker_state) {
                        var distance = Math.pow(marker_state[delete_id].pos.x - marker.translation[1]*-1, 2) + Math.pow(marker_state[delete_id].pos.y - marker.translation[0]*-1, 2); 
                        if (distance < 2000) {
                            console.log("Starting to delete", delete_id);
                            delete_marker = delete_id;
                            delete_state = 1;
                            var el = document.getElementById("marker-"+delete_id);
                            el.setAttribute('material', 'color', 'red');
                            setTimeout(() => {
                                if (delete_state == 1) {
                                    console.log("finished delete");
                                    marker_state[delete_marker].deleted = true;
                                    var el = document.getElementById("marker-"+delete_marker);
                                    el.parentNode.removeChild(el);
                                    delete_state = 0;
                                } else {
                                    console.log("delete cancelled");
                                }
                            }, 1000);
                        }
                    }
                } else if (delete_state = 1) {
                      var distance = Math.pow(marker_state[delete_marker].pos.x - marker.translation[1]*-1, 2) + Math.pow(marker_state[delete_marker].pos.y - marker.translation[0]*-1, 2); 
                      if (distance > 2500) {
                          console.log("Aborting delete");
                          delete_state = 0;
                          var el = document.getElementById("marker-"+delete_marker);
                          el.setAttribute('material', 'color', 'white');
                      }
                }
                continue;
            }
            if (!markers.hasOwnProperty(marker_id)) {
                var el = document.createElement('a-entity');
                var coverEl = document.createElement('a-entity');
                coverEl.setAttribute('geometry', 'primitive: plane; height: 30; width: 30;');
                coverEl.setAttribute('material', 'color: white; shader: flat; side: double;');
                el.id = "marker-"+marker_id;
                el.setAttribute('geometry', 'primitive: plane; height: 100; width: 100;');
                //el.setAttribute('material', 'color: white; shader: flat; side: double; src: images/'+marker_id+'.jpg');
                el.setAttribute('material', 'color: white; shader: flat; side: double;');
                var text = document.createElement('a-entity');
                if (goals.hasOwnProperty(marker_id)) {
                    text.setAttribute('text', 'value', goals[marker_id].text);
                    text.setAttribute('text', 'color', goals[marker_id].color.toLowerCase());
                    text.setAttribute('scale', '75 75 75');
                    text.setAttribute('text', 'wrapCount', 13);
                    text.setAttribute('position', '10 0 2');
                }
                var lineEl = document.createElement('a-entity');
                lineEl.id = "line-"+marker_id;
                lineEl.setAttribute('line', 'start', '0 0 0');
                lineEl.setAttribute('line', 'end', '0 0 0');
                lineEl.setAttribute('line', 'color', 'black');
                scene.appendChild(el);
                el.appendChild(coverEl);
                el.appendChild(text);
                el.appendChild(lineEl);
                coverEl.object3D.position.set(-37.5,-37.5,1);
            }
            markers[marker_id] = marker;

            var d = new Date();
            if (marker_state.hasOwnProperty(marker_id)) {
                marker_state[marker_id].last_seen = d.getTime();
                var el = document.getElementById("marker-"+marker_id);
                var lineEl = document.getElementById("line-"+marker_id);

                if (marker_state[marker_id].deleted) {
                    if (el) {
                        el.parentNode.removeChild(el);
                    }
                } else {
                    el.object3D.rotation.set(0, 0, 3.14159/2);
                    var pos = el.object3D.position;
                    el.object3D.position.set((marker.translation[1]*-1)*0.1+0.9*pos.x, (marker.translation[0]*-1)*0.1+0.9*pos.y, 100);
                    if (goals.hasOwnProperty(marker_id)) {
                        if (goals[marker_id].y != 0) {
                            //lineEl.setAttribute('line', 'end', (goals[marker_id].y-el.object3D.position.y) + " " + (-1*goals[marker_id].x+el.object3D.position.x) + " 0");
                        }
                        marker_state[marker_id].pos = {
                            x: el.object3D.position.x,
                            y: el.object3D.position.y
                        };
                    }
                }
            } else {
                var el = document.getElementById("marker-"+marker_id);
                el.object3D.rotation.set(0, 0, 3.14159/2);
                var pos = el.object3D.position;
                el.object3D.position.set((marker.translation[1]*-1)*0.1+0.9*pos.x, (marker.translation[0]*-1)*0.1+0.9*pos.y, 100);
                marker_state[marker_id] = {
                    last_seen: d.getTime(),
                    deleted: false,
                    pos: {
                        x: el.object3D.position.x,
                        y: el.object3D.position.y
                    }
                };
            }
        }
    });
    socket.open();
}

function getConfig() {
    fetch("config.json").then(function(response) {
        response.json().then(function(config) {
            for (var camera in config.cameras) {
                startCamera(config.cameras[camera]);
            }     
        });
    });
}

window.onload = function() {
    scene = document.getElementById("scene");
    getConfig();
}