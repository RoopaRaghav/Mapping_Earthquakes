// Create the map object with center and zoom level.
// map = L.map('mapid').setView([30, 30], 2);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/RoopaRaghav/Mapping_Earthquakes/main/torontoNeighborhoods.json";



let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
accessToken: API_KEY
});


// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    
   accessToken: API_KEY
});

let baseMaps = {
  Streets : streets,
  SatelliteStreets: satelliteStreets
};

// Create a style for the lines.

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center:[43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets] //default layer
})


//streets.addTo(map);

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  console.log(feature);
  
  if (feature.properties.AREA_S_CD && feature.properties.AREA_NAME) {
      layer.bindPopup("<h4> "+ "Neighbourhood Name: "+feature.properties.AREA_NAME + "</h4>");
  }
}

let myStyle = {
  color: "blue",
  weight: 1,
  fillOpacity: 0.7,
  fillColor: "lightyellow",
}

// // Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data,{
  onEachFeature: onEachFeature,
  // color:"lightyellow",
  // weight: 2
  style: myStyle

}).addTo(map);
});


