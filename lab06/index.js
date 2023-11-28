console.log("\n***  CommonJS  ***")

// //Default

// const sumar=require('./modulo')
// console.log('la suma es: ',sumar(14,12))

// //Nombrado

// const{sumar,a,b}=require('./modulo')
// console.log('la suma de a+b es: ',sumar(a,b))


console.log("\n***  ES Module  ***")
//Default
//import sumar from './modulo.js'
//console.log('respuesta: ',sumar(4,5))

//Nombrado
import{sumar,a,b} from './modulo.js'
console.log('la suma de a+b es: ',sumar(a,b))