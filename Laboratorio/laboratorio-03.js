//Variables
console.log("\t--Variables--")
console.log(`var`)
var num=20
console.log(`la variable de tipo Var puede ser accedida fuera del bloque donde se declara y es: ${num}`)
console.log(`\nlet`)
let names=`Brittany Nohemi`
console.log(`Nombre: ${names}`)
let lastName=`Espinel`
console.log(`Nombres y apellido: ${names} ${lastName}`)
console.log(`\nConst`)
const ci=1728562341
console.log(`El valor asiganado a una variable de tipo const, no cambia. La ci es: ${ci}`)

//Strings y sus métodos
console.log(`\n\t--Strings y sus métodos--\n`)
let movie=" Misión Imposible 5 "
console.log(`Número de letras (tam de la cadena): ${movie.length}`)
console.log(`Encontrar alguna palabra: ${movie.includes("5")}`)
console.log(`Convertir a mayúsculas: ${movie.toLocaleUpperCase()}`)
console.log(`Convertir a minusculas: ${movie.toLocaleLowerCase()}`)
console.log(`Quitar espacios adelante y atrás: ${movie.trim()}`)
console.log(`Reemplazar una palabra: ${movie.replace('5','Nación Secreta')}`)
console.log(`Cortar un texto: ${movie.slice(1,3)}`)
console.log(`Cortar un texto: ${movie.substring(0,3)}`)
console.log(`Cortar un texto: ${movie.charAt(1)}`)
console.log(`Repetir un texto: ${movie.repeat(2)}`)
console.log(`Dividir un texto: ${movie.split(" ")}`)

// Numeros
console.log("\n\t---Numeros--\n")

console.log("Orden de Presencia")
let resultado = (5 + 4) * 7 / 2 - 2
console.log(resultado);

console.log("\nConversion")
var numero1 = 20
var numero2 = "30"
console.log(`La resta es: ${numero1 - +numero2}`)//al anteponer el signo + a la variable se realiza una conversión

// Booleanos
console.log("\n\t--Booleanos--")

console.log("Operador Ternario")
let dineroAhorrado = 200
let dineroRetirado= 150
let mensaje = (dineroRetirado >= dineroAhorrado) ? "No puede retirar esta cantidad de dinero" : "Retiro exitoso"
console.log(mensaje);

// Condicionales
console.log("\n\t--Condicionales--")
if(dineroRetirado>=dineroAhorrado){
    console.log(`No puede retirar esta cantidad de dinero`)
}
else{
    console.log("Retiro exitoso")
}

//Switch
let result=5+2
switch(resultado){
    case 0:
        console.log(`el resultado es 0`)
        break
    case 10:
        console.log(`el resultado es 10`)
        break
    case 7:
        console.log(`el resultado es 7`)
        break
    default:/*para casos que no tengamos contemplado y se ejecute por defecto si ninguna de los casos se cumple*/
        console.log()
}

//Bucles
//for clásico
console.log("\n\t--Bucles--")
console.log("For clásico")
const porcentajeCarga=100
for (let i=0; i<=porcentajeCarga; i++){
    i==porcentajeCarga? console.log(`Teléfono cargado`):console.log(`Cargando...${i}`)
}
//for each
console.log("\nFor each")
const sabores=['vainilla', 'chocolate','fresa','taxo', 'menta']
sabores.forEach((s,i)=>console.log(`${++i}. ${s}`))

//for of
console.log("\nFor of")
for (const s of sabores){
    console.log(s)
}

//for in
console.log("\nFor in")
const estudiante={
    nombre:"Juan",
    apellido:"Romero",
    numeroUnico:2025638,
    carrera:"desarrollo de software"
}

for (const clave in estudiante){
    console.log(`${estudiante[clave]}`)
}

//Map
console.log('\nMap')
const nuevosSabores=sabores.map((s)=>s)
console.log(nuevosSabores)

//Funciones
console.log('\n\t--Funciones--')
console.log('Función sin parámetros')
function comprar(){
    console.log("Gracias por su compra")
}
comprar()

console.log('\nFunción con parámetros')
function despertar(user){
    console.log(`Hola, ${user} son las 6:30 am`)
}

despertar("Juan")
console.log('\nFunción Anónima')//se usa cuando se quiere pasar una función como argumento a otra función

const temperatura=function(fahrenheit){
    return (fahrenheit-32) *(5/9)
}

console.log(`La temperatura en grados celcius es:${temperatura(76)}`)

console.log('\nFunción con parametros por Default')
function presentarPeli(nameMovie='La la land', director='Damien Chazelle'){
    return `${nameMovie} fue dirigida por ${director}`
}

console.log(presentarPeli())

console.log('\nParámetros Rest')
function agregarAct(...tareas){
    const lista=[]
    lista.push(tareas)
    console.log(lista)
}

agregarAct('dormir','hacer lab04', 'comprar para la despensa')

console.log(`\nFunción flecha`)
let contarDecenar=(numero)=> {
    let nDecenas=numero/12
    console.log(`Existen ${nDecenas} decenas adquiridas`)}

contarDecenar(24)

console.log(`\nFunción con this`)
const perfil={
    nom:'Nohemi',
    apellidos:'Espinel Pallasco',
    edad:20,
    presentarDatos:function(){
        console.log(`Nombre de usuario: ${this.nom}\nEdad: ${this.edad} años`)
    }
}

perfil.presentarDatos()



