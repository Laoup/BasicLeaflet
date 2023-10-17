// initialize Leaflet map
const map = L.map('map').setView([51.505, -0.09], 13);

// Load OpenStreetMap for TileMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a pin to the map
let marker = L.marker([51.5, -0.09]).addTo(map);

// Initialize a popup
var popup = L.popup();

// fct to open popup with info where we have click
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

// Listen map event and use onMapClick fct when this event is triggered
map.on('click', onMapClick);