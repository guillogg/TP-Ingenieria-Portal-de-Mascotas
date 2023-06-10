var map = L.map("map").setView([-34.5067, -58.7064], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 140,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var dameVidaIcon = L.icon({
  iconUrl: 'img/organizacion1.png',
 

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var peludosIcon = L.icon({
  iconUrl: 'img/organizacion2.jpg',
 

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var protectoresIcon = L.icon({
  iconUrl: 'img/organizacion3.jpg',
 

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var ayudaIcon = L.icon({
  iconUrl: 'img/organizacion4.png',
 

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var eukanubaIcon = L.icon({
  iconUrl: 'img/organizacion5.jpg',
 

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var sentirIcon = L.icon({
  iconUrl: 'img/organizacion6.jpg',
 

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marker= L.marker([-34.498118878125,-58.731104790625],{icon: dameVidaIcon}).addTo(map).bindPopup("Cura Brochero 857, Malvinas Argentinas");
var marker2= L.marker([-34.5095215624204,-58.6910869593848],{icon: peludosIcon}).addTo(map).bindPopup("Universidad de Buenos Aires 2493, Malvinas Argentinas.")
var marker3= L.marker([-34.5337706717172,-58.7211212030303],{icon: protectoresIcon}).addTo(map).bindPopup("Las Malvinas 1042, San Miguel.")
var marker4= L.marker([-34.5361616357143,-58.7038525704082],{icon: ayudaIcon}).addTo(map).bindPopup("Vicente López 1507, San Miguel.")
var marker5= L.marker([-34.5365415428571,-58.7103550857143],{icon: eukanubaIcon}).addTo(map).bindPopup("Urquiza 1772, San Miguel.")
var marker6= L.marker([-34.4982464,-58.639014],{icon: sentirIcon}).addTo(map).bindPopup("María 1501, Tigre.")
