var markers = {};

function startCamera(camera) {
    const socket = new ReconnectingWebSocket("ws://" + camera.server + ":" + camera.port, null, {automaticOpen: false});
    socket.addEventListener('open', function(event) {
        console.log("Opened "+camera.name+" Camera Socket");
    });
    socket.addEventListener('message', function(response) {
        var observed_markers = JSON.parse(response.data);
        for (var marker_id in observed_markers) {
            var marker = observed_markers[marker_id];
            if (!markers.hasOwnProperty(marker_id)) {
                var el = document.createElement('a-entity');
                el.id = "marker-"+marker_id;
                el.setAttribute('geometry', 'primitive: plane; height: 0.2; width: 0.2;');
                el.setAttribute('material', 'color: white; shader: flat; side: double; src: images/'+marker_id+'.jpg');
                scene.appendChild(el);
            }
            markers[marker_id] = marker;
            var el = document.getElementById("marker-"+marker_id);
            el.object3D.rotation.set(marker.rotation[0], marker.rotation[1], marker.rotation[2]);
            el.object3D.position.set(marker.translation[0], marker.translation[1], marker.translation[2]);
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
    console.log("Found scene", scene);
    getConfig();
}