//Portugalreise Skript
let lat = 38.716667;
let lng= -9.166667;
let zoom= 13;

let coords= [38.716667, -9.166667];
console.log(coords);
console.log(coords[0]);
console.log(coords[1]);
console.log(coords.length);

console.log("text");
console.log('text');
console.log( 'id= "map"');
console.log(`latitude= ${lat}`);

let popup = `<h3> Lissabon </h3>
<ul>
<li>geogr. Länge: ${lng } <li>
<li>geogr. Breite: ${lat } <li>

<ul>
 `;

let map = L.map('map').setView(coords, zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker(coords).addTo(map)
    .bindPopup(popup)
    .openPopup(); 

