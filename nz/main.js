//Portugalreise Skript

var map = L.map('map').setView([38.716667, -9.166667], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([38.716667, -9.166667]).addTo(map)
    .bindPopup("<h3> Lissabon </h3>")
    .openPopup(); 