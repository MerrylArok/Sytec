// Initialize and add the map
function initMap() {
    // The location of Uluru
    const sytec = { lat: 53.584650741527945, lng: -113.46097094106376 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: sytec,
        mapId:'d334291c60aa81ef',
        disableDefaultUI:true,
    });



    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: sytec,
        map: map,
    });

    
  
}

window.initMap = initMap;

