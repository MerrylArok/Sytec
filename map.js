// Initialize and add the map
function initMap() {
    // The location of Uluru
    const sytec = { lat: 53.584650741527945, lng: -113.46097094106376 };
    const mapOffset = {lat:53.58, lng:-113.5};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13.6,
        center: mapOffset,
        mapId:'d334291c60aa81ef',
        disableDefaultUI:true,
    });



    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: sytec,
        map: map,
        title: "7815 127 Ave, Edmonton",
        
    });

    map.addListener("center_changed", () => {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(() => {
          map.panTo(mapOffset);
          map.setZoom(13.6);
        }, 30000);
      });    
      
    marker.addListener("click",()=>{
        window.open("https://www.google.com/maps/dir/Current+Location/53.584650741527945,-113.46097094106376");
    })
  
}

window.initMap = initMap;

