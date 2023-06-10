//import {organizaciones} from "./organizaciones.js";
for (let i of organizaciones.data){
    let card = document.createElement("div");
    card.classList.add("card",i.categoria,"hide");
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
    name.innerText = i.organizacionName.toUpperCase();
    container.appendChild(name);
    
    //Direccion
    let direccion = document.createElement("h4");
    direccion.innerText= "DIRECCION: "+i.direccion.direccion
    container.appendChild(direccion);
    
    //horario
    let horario = document.createElement("h4");
    horario.innerText = "Horarios: "+ i.horario;
    container.appendChild(horario)
    //telefono
    let telefono = document.createElement("h4");
    telefono.innerText="Telefono:"+i.telefono;
    container.appendChild(telefono);
    //actividades o servicios
    let categoria = document.createElement("h4");
    categoria.innerText="Servicios o Actividades: "+i.categoria;
    container.appendChild(categoria);
    //descripcion
    let descripcion= document.createElement("h4");
    descripcion.innerText=""+i.descripcion;
    container.appendChild(descripcion);
    card.appendChild(container);
    
    document.getElementById("organizaciones").appendChild(card);

}


function filterOrganizacion(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
          button.classList.add("active");
        }
        else{
            button.classList.remove("active");
            }
    });
    let elements=document.querySelectorAll(".card");
    elements.forEach(element =>{
        if(value == "all"){
        element.classList.remove("hide");
        }
        else{
             if(element.classList.contains(value)){
                element.classList.remove("hide")
             }
             else{
                element.classList.add("hide");
             }
            
        }
    });

}
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



window.onload =() => {
    filterOrganizacion("all");
}