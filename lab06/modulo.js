console.log("-----  Modulos  -----")

console.log("\n***  CommonJS  ***")

// Export por Default
let a=20,b=56;
const sumar=(a,b)=>a+b
sumar(a,b)

// module.exports=sumar


//Export por Nombrado
// module.exports={
//     sumar,
//     a,
//     b
// }

console.log("\n***  ES Module  ***")

//Default
//export default sumar

export{
    sumar,
    a,
    b
}
