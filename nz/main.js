//Portugalreise Skript
let lat = 38.716667
let lng= -9.166667
let zoom= 13
let map = L.map('map').setView([lat, lng], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup("<h3> Lissabon </h3>")
    .openPopup(); 

