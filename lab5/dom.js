console.log("-----  DOOM Manipulation  -----")

console.log("\n***  Acceder a los elementos HTML  ***")

document.head
document.links[0]
document.images

console.log("\n***  Obtener clases del elemento  ***")
//obtener las clases del elemento
document.images[2].className
document.images[3].classList

console.log("\n***  Seleccionar elementos por clase  ***")
var elementosClaseepn=document.getElementsByClassName("custom-logo-epn") 

console.log("\n***  Seleccionar elementos por id  ***")
document.forms[0].id 
var idForm=document.getElementById("search-178") 

console.log("\n***  Seleccionar elementos con querySelector  ***")

var ankor=document.querySelector("a") 

console.log("\n***  Seleccionar elementos con querySelectorAll  ***")

var todosLosLinks = document.querySelectorAll("a")

console.log("\n***  Modificar el contenido   ***")

document.querySelector(".tm-margin-large-top").textContent="Esfot-Epn" 

console.log("\n***  Modificar el estilo  ***")
const divConferencias=document.querySelector(".uk-thumbnail-caption") 
divConferencias.style.backgroundColor="red" 

console.log("\n***  Agregar elementos  ***")

const divConferencias=document.querySelector(".uk-thumbnail-caption") 
const button = document.createElement("button")
button.innerText="Clic aquí"
divConferencias.appendChild(button);

console.log("\n***  Eliminar elementos  ***")

const divConferencias=document.querySelector(".uk-thumbnail-caption") 
divConferencias.remove()

console.log("\n***  Eventos  ***")

const divConferencias=document.querySelector(".uk-thumbnail-caption") 
const button = document.createElement("button")
button.innerText="Clic aquí"
divConferencias.appendChild(button);

button.addEventListener('click',function () {
    alert("Mostrar Conferencias")
})