
// ************* Between two places ****************************
// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// // Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790]
// ];


// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "red"
// }).addTo(map);

// // We create the tile layer with dark backgroundthat will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
// maxZoom: 18,
// accessToken: API_KEY
// });
// streets.addTo(map2);


// //******************Between Multiple Points**********************
// // Coordinates for each point to be used in the polyline.
// let line2 = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];


// // Create the map object with center at the San Francisco airport.
// let map2 = L.map('mapid').setView([37.6213, -122.3790], 5);

// // Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line2, {
//   color: "yellow"
// }).addTo(map2);

// // We create the tile layer with dark backgroundthat will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
// maxZoom: 18,
// accessToken: API_KEY
// });
// streets.addTo(map2);


//******************Between Multiple Points SKILL DRILL**********************
// Coordinates for each point to be used in the polyline.
let line2 = [
  [37.6213, -122.3790], //SFO
  [40.641766, -73.780968], //JFK
  [30.1900, -97.6687], //AUSTIN
  [43.6777, -79.6248], //TORANTO
  [33.9403, -118.4245] //LAX
];


// Create the map object with center at the San Francisco airport.
let map2 = L.map('mapid').setView([33.9403, -118.4245], 3);

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line2, {
  color: 'blue', weight: '3', dashArray: '10, 10',opacity:0.6
}).addTo(map2);

// We create the tile layer with dark backgroundthat will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
accessToken: API_KEY
});
streets.addTo(map2);




