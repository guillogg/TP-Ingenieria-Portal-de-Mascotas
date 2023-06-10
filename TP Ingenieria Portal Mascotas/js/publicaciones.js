let publicaciones = {
    data:[
        {   
            nombreAnimal:"carliños",
            image:"img/capibara.jpg",
            raza:"Roedor",
            edad: "5 años",
            descripcion: "animal pequeño , con pelo amarillo y marron",
            fechaDePublicacion: "25/02/2023",
            estado:"abierto",
            tipo:"Perdido",
            direccion:"Av sucre 542 malvinas argentinas",
            fechaDeSuceso:"24/02/2023",
            telefono:"47411563",


        },
        {   
            nombreAnimal:"michifus",
            image:"img/gatito.jpg",
            raza:"Siames",
            edad: "2 años",
            descripcion: "animal pequeño , ojos celestes y pelo mayormente blanco",
            fechaDePublicacion: "28/03/2023",
            estado:"Abierto",
            tipo:"Encontrado",
            direccion:"Av cordoba 654,CABA",
            fechaDeSuceso:"25/02/2023",
            telefono:"45632156",


        },
        {   
            nombreAnimal:"ayudante de santa",
            image:"img/perro1.jpg",
            raza:"ovejero",
            edad: "5 meses",
            descripcion: "perro amigable, muy tanquilo de pelo negro",
            fechaDePublicacion: "11/02/2023",
            estado:"abierto",
            tipo:"Perdido",
            direccion:"mar del plata 456,Buenos aires",
            fechaDeSuceso:"10/02/2023",
            telefono:"85563215",


        },
        {   
            nombreAnimal:"princesa",
            image:"img/dogo.jpg",
            raza:"dogo",
            edad: "8 años",
            descripcion: "animal grande , muy amoroso",
            fechaDePublicacion: "31/04/2023",
            estado:"abierto",
            tipo:"Adopcion",
            telefono:"47656363",
            cuidados:"todas las vacunas, no necesita nada",


        },
        {   
            nombreAnimal:"serpi",
            image:"img/cascabel.jpg",
            raza:"cascabel",
            edad: "10 años",
            descripcion: "serpiente muy amistosa",
            fechaDePublicacion: "30/05/2023",
            estado:"abierto",
            tipo:"Encontrado",
            direccion:"Salta 453,los polvorines",
            fechaDeSuceso:"27/05/2023",
            telefono:"1123568945",


        },
        {   
            nombreAnimal:"oscar",
            image:"img/cabra1.jpg",
            raza:"cabra del monte",
            edad: "8 años",
            descripcion: "cabra solitaria, no interactua mucho",
            fechaDePublicacion: "15/06/2023",
            estado:"abierto",
            tipo:"Perdido",
            direccion:"La pampa 332, Jujuy",
            fechaDeSuceso:"14/06/2023",
            telefono:"45632154",


        },
    
    
    
    
    
    
    
    
    
    
    
    ]
        
};

for (let i of publicaciones.data){
    if (i.tipo === "Perdido"){
    let card = document.createElement("div");
    card.classList.add("card",i.tipo);
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    
    
    let container = document.createElement("div");
    container.classList.add("container");
    //nombre
    let name = document.createElement("h2");
    name.classList.add("organizacion-name");
    name.innerText = i.nombreAnimal.toUpperCase();
    container.appendChild(name);

     //tipo
     let tipo = document.createElement("h4");
     tipo.innerText ="Situacion:"+ i.tipo;
     container.appendChild(tipo);

      //raza
      let raza = document.createElement("h4");
      raza.innerText ="Raza:"+ i.raza;
      container.appendChild(raza);
    
      //edad
      let edad = document.createElement("h4");
      edad.innerText ="Edad:"+ i.edad;
      container.appendChild(edad);

      //descripcion
      let descripcion = document.createElement("h4");
      descripcion.innerText ="Descripcion:"+ i.descripcion;
      container.appendChild(descripcion);

      //fecha suceso
      let fechaSuceso = document.createElement("h4");
      fechaSuceso.innerText ="Se perdio el:"+ i.fechaDeSuceso;
      container.appendChild(fechaSuceso);

     

    //Direccion
    let direccion = document.createElement("h4");
    direccion.innerText= "Se perdio en: "+i.direccion
    container.appendChild(direccion);

    //contacto
    let contacto = document.createElement("h4");
    contacto.innerText= "Contactar al:" +i.telefono
    container.appendChild(contacto);

    //fecha de publicacion
    let publicacion = document.createElement("h4");
    publicacion.innerText= "Fecha de publicacion:"+i.fechaDePublicacion
    container.appendChild(publicacion);
    
     //Estado
     let estado = document.createElement("h4");
     estado.innerText ="Estado:"+ i.estado;
     container.appendChild(estado);
   
    
    card.appendChild(container);
    
    document.getElementById("organizaciones").appendChild(card);
}
else if(i.tipo === "Encontrado"){
    let card = document.createElement("div");
    card.classList.add("card",i.tipo);
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    
    
    let container = document.createElement("div");
    container.classList.add("container");
    //nombre
    let name = document.createElement("h2");
    name.classList.add("organizacion-name");
    name.innerText = i.nombreAnimal.toUpperCase();
    container.appendChild(name);

     //tipo
     let tipo = document.createElement("h4");
     tipo.innerText ="Situacion:"+ i.tipo;
     container.appendChild(tipo);

      //raza
      let raza = document.createElement("h4");
      raza.innerText ="Raza:"+ i.raza;
      container.appendChild(raza);
    
      //edad
      let edad = document.createElement("h4");
      edad.innerText ="Edad:"+ i.edad;
      container.appendChild(edad);

      //descripcion
      let descripcion = document.createElement("h4");
      descripcion.innerText ="Descripcion:"+ i.descripcion;
      container.appendChild(descripcion);

      //fecha suceso
      let fechaSuceso = document.createElement("h4");
      fechaSuceso.innerText ="Se encontro el:"+ i.fechaDeSuceso;
      container.appendChild(fechaSuceso);

     

    //Direccion
    let direccion = document.createElement("h4");
    direccion.innerText= "Se encontro en: "+i.direccion
    container.appendChild(direccion);

//contacto
let contacto = document.createElement("h4");
contacto.innerText= "Contactar al:" +i.telefono
container.appendChild(contacto);

    //fecha de publicacion
    let publicacion = document.createElement("h4");
    publicacion.innerText= "Fecha de publicacion:"+i.fechaDePublicacion
    container.appendChild(publicacion);
    
     //Estado
     let estado = document.createElement("h4");
     estado.innerText ="Estado:"+ i.estado;
     container.appendChild(estado);
   
    
    card.appendChild(container);
    
    document.getElementById("organizaciones").appendChild(card);


}
else {
    let card = document.createElement("div");
    card.classList.add("card",i.tipo);
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    
    
    let container = document.createElement("div");
    container.classList.add("container");
    //nombre
    let name = document.createElement("h2");
    name.classList.add("organizacion-name");
    name.innerText = i.nombreAnimal.toUpperCase();
    container.appendChild(name);

     //tipo
     let tipo = document.createElement("h4");
     tipo.innerText ="Situacion:"+ i.tipo;
     container.appendChild(tipo);

      //raza
      let raza = document.createElement("h4");
      raza.innerText ="Raza:"+ i.raza;
      container.appendChild(raza);
    
      //edad
      let edad = document.createElement("h4");
      edad.innerText ="Edad:"+ i.edad;
      container.appendChild(edad);

      //descripcion
      let descripcion = document.createElement("h4");
      descripcion.innerText ="Descripcion:"+ i.descripcion;
      container.appendChild(descripcion);

       //cuidados
       let cuidados = document.createElement("h4");
       cuidados.innerText ="Cuidados:"+ i.cuidados;
       container.appendChild(cuidados);


//contacto
let contacto = document.createElement("h4");
contacto.innerText= "Contactar al:" +i.telefono
container.appendChild(contacto);

    //fecha de publicacion
    let publicacion = document.createElement("h4");
    publicacion.innerText= "Fecha de publicacion:"+i.fechaDePublicacion
    container.appendChild(publicacion);
    
     //Estado
     let estado = document.createElement("h4");
     estado.innerText ="Estado:"+ i.estado;
     container.appendChild(estado);
   
    
    card.appendChild(container);
    
    document.getElementById("organizaciones").appendChild(card);


}


}


// function filterOrganizacion(value){
//     let buttons = document.querySelectorAll(".button-value");
//     buttons.forEach((button) => {
//         if(value.toUpperCase() == button.innerText.toUpperCase()){
//         button.classList.add("active");
//         }
//         else{
//             button.classList.remove("active");
//             }
//     });
//     let elements=document.querySelectorAll(".card");
//     elements.forEach(element =>{
//         if(value == "all"){
//         element.classList.remove("hide");
//         }
//         else{
//              if(element.classList.contains(value)){
//                 element.classList.remove("hide")
//              }
//              else{
//                 element.classList.add("hide");
//              }
            
//         }
//     });

// }
document.getElementById("search").addEventListener
("click",() => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".organizacion-name");
    let cards = document.querySelectorAll(".card");
    
    elements.forEach((element,index)=> {
        if (element.innerText.includes(searchInput.toUpperCase()))
        {
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    })
})
// var map = L.map("map").setView([-34.5067, -58.7064], 14);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 140,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// var dameVidaIcon = L.icon({
//   iconUrl: 'img/organizacion1.png',
 

//   iconSize:     [38, 95], // size of the icon
//   shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// var peludosIcon = L.icon({
//   iconUrl: 'img/organizacion2.jpg',
 

//   iconSize:     [38, 95], // size of the icon
//   shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
// var protectoresIcon = L.icon({
//   iconUrl: 'img/organizacion3.jpg',
 

//   iconSize:     [38, 95], // size of the icon
//   shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// var ayudaIcon = L.icon({
//   iconUrl: 'img/organizacion4.png',
 

//   iconSize:     [38, 95], // size of the icon
//   shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
// var eukanubaIcon = L.icon({
//   iconUrl: 'img/organizacion5.jpg',
 

//   iconSize:     [38, 95], // size of the icon
//   shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
// var sentirIcon = L.icon({
//   iconUrl: 'img/organizacion6.jpg',
 

//   iconSize:     [38, 95], // size of the icon
//   shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// var marker= L.marker([-34.498118878125,-58.731104790625],{icon: dameVidaIcon}).addTo(map).bindPopup("Cura Brochero 857, Malvinas Argentinas");
// var marker2= L.marker([-34.5095215624204,-58.6910869593848],{icon: peludosIcon}).addTo(map).bindPopup("Universidad de Buenos Aires 2493, Malvinas Argentinas.")
// var marker3= L.marker([-34.5337706717172,-58.7211212030303],{icon: protectoresIcon}).addTo(map).bindPopup("Las Malvinas 1042, San Miguel.")
// var marker4= L.marker([-34.5361616357143,-58.7038525704082],{icon: ayudaIcon}).addTo(map).bindPopup("Vicente López 1507, San Miguel.")
// var marker5= L.marker([-34.5365415428571,-58.7103550857143],{icon: eukanubaIcon}).addTo(map).bindPopup("Urquiza 1772, San Miguel.")
// var marker6= L.marker([-34.4982464,-58.639014],{icon: sentirIcon}).addTo(map).bindPopup("María 1501, Tigre.")



// window.onload =() => {
//     filterOrganizacion("all");
// }