// Create the map object with center and zoom level.
// map = L.map('mapid').setView([30, 30], 2);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/RoopaRaghav/Mapping_Earthquakes/main/majorAirports.json";



let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
accessToken: API_KEY
});


// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps = {
  Street : streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})


//streets.addTo(map);

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties.city && feature.properties.country) {
      layer.bindPopup("<h2>" + "Airport Code: "+ feature.properties.id + "</h2> <hr> <h3> "+ "Airport name: "+feature.properties.name + "," + feature.properties.country + "</h3>");
  }
}


// // Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data,{
  onEachFeature: onEachFeature
}).addTo(map);
});


