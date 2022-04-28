//Portugalreise Skript

let zoom= 13;

let coords= [ETAPPEN[12].lat, ETAPPEN[12].lng]; // NR prüfen!
//console.log(coords)
//console.log(coords[0]);
//console.log(coords[1]);
//console.log(coords.length);

//console.log("text");
//console.log('text');
//console.log('id="map"');
//console.log(`latitude = ${lat} `);

//console.log(ETAPPEN);
//console.log(ETAPPEN[0]);
//console.log(ETAPPEN[0].nr);
//console.log(ETAPPEN[0].github);
//console.log(ETAPPEN[0].wikipedia);
//console.log(ETAPPEN[0].titel);
//console.log(ETAPPEN[0].lat);
//console.log(ETAPPEN[0].lng);

//Etappe in der Konsole ansprechen


// consoles sind arrays

// coords sind die Koordinaten



// popup Liste erstellt 

let map = L.map('map').setView(coords, zoom);

// let sind die Variablen

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
.bindPopup(popup)
.openPopup();


for (let etappe of ETAPPEN) {

let popup = `
<h3> ${etappe.titel} (Etappe ${etappe.nr}) </h3>
<ul>
<li>geogr. Länge: ${etappe.lng}</li>
<li>geogr. Breite: ${etappe.lat}</li>
<li><a href="${etappe.wikipedia}">Link zur Wikipediaseite</a></li>
<li><a href="https://${etappe.github}.github.io/nz/">Link zur Etappenseite</a></li>
</ul>
`;


//Etappennavigation erweitern
let link =` <a href="https://${etappe.github}.github.io/nz/" class="etappenLink" title="${etappe.titel}">${etappe.nr}</a>`;

document.querySelector("#navigation").innerHTML += link;

}

// Doc Hütten anzeigen


for (let hut of HUTS) {
let popup = `
<h3>${hut.name}</h3>
<h4>${hut.region}</h4>
<hr>
<p>${hut.info}</p>
<img src="${hut.image}" alt="Vorschaubild">
<hr>
<a href="${hut.link}" target= "Neuseeland">Link zur Hütte</a>
`;
L.circleMarker([hut.lat, hut.lng]).addTo(map).bindPopup(popup);
}