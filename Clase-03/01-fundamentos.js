
//Ejercicios Realizados en clase:
// Strings

let nombreJuego = "Mario Kart"
let puntosVida = "45 p"

console.log(nombreJuego + " " + puntosVida)

// Mezclar variables y texto
console.log(`${nombreJuego} -- ${puntosVida}`)

// Number
const numeroVidas = 20
const numeroPuntos = "20"

console.log(`Total = ${+numeroPuntos + numeroVidas}`)

console.log(3 + 4 * 5)

console.log(4 * 3 ** 2)

// Boleans
let saldo1 = 500
let saldo2 = 1000

//Condicionales
if(saldo1 > saldo2){
    console.log("Pagar")
}
else{
    console.log("Seguir consumiento")
}

// Operador Terniario
const Respuesta = saldo1 > saldo2 ? "Pagar" : "Seguir consumiendo"
console.log(Respuesta)

// Bucles
//for
const contador = 10

for (let i = contador; i >= 0; i--) {
    
    i <=0 ? console.log("Comida lista"):console.log(i);
}

//For each
const tareas = ["trabajar", "Comer", "Dormir"]

const usuario = {
    nombre: "Joe",
    skills: true
}

tareas.forEach((t,i) => console.log(t,i)) // Funcion callback

//for of usado para arreglos
for (const t of tareas){
    console.log(t)
}

//for in usado para objetos
for(const clave in usuario){  
    console.log(`${usuario[clave]}`)
}

//uso del map. Retorna un nuevo arreglo
const nuevasTareas = tareas.map(t => t.toUpperCase())
console.log(nuevasTareas)

// Funciones

function declarada(){
    console.log("Funcion declarada")
}
declarada()

const expresada = function(){
    console.log("Funcion expresada")
}
expresada()

// Funcion anonima y autoejecutada

console.log(  
    function(){
        return "hola"
    }()
)

//Argumentos y paramétros
function hello(dato1, dato2){ // Parametros
    console.log(dato1 + " " + dato2)
}

hello("Js", "React") // Argumentos


//Parámetros rest
const precioFinal = function(a, b, ...args){
    console.log(args)
}

precioFinal(10, 20, 30, 50, 60)

// Retorno de una función
function hello(){
    
    return "hola Js"//retorna una cadena
    // return 123  -->un número
    // return true  -->un booleano
    // return ['Peter','Mike','Camila','Joe'] -->un array
    // return {
    //     name:"Byron",
    //     lastname:"Loarte",
    //     age:34
    // }  -->un objeto
    // return function(){
    //     return "Hello Js"
    // } -->una función
}
console.log(hello())


//Funciones flecha
function login(user, password){
    console.log("Usuario y password")
}

const validar = (user, password) =>{
    console.log("Usuario y password")
}

const registrarAvatar =(photo)=>console.log("El avatar ha sido registrado")


login()
validar()
registrarAvatar()

/////////////////////////////////////////////////////////////////////////////////////////////////////////
