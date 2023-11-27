// console.log("-- Asincronismo --")
// console.log("abrir funda de chifles")
// console.log("poner palomitas en el micro")
// setTimeout(function tiemout(){
//     console.log('Palomitas preparadas')
// },120000)
// setTimeout(()=>console.log('poner peli'),10000)

console.log("\n***  Codigo Sincrono vs Codigo Asincrono  ***")

console.log("\n***  Codigo Sincrono  ***")

function modify(array, callback){
    console.log(`tenemos que comprar ${array.length} cosas`)
    console.log('olvide anotar detergente')
    array.push('detergente')
  callback()
  }
  
  const listaComprar=['cepillo','avena','jabón']
  
  modify(listaComprar, function(){
    console.log(`Ahora tenemos que comprar ${listaComprar.length} cosas`)
})

console.log('\n*** Código Asíncrono ***')
//función callback
function modificarLista(array, callback){
    console.log("recuerdo si olvido algo que comprar...")
    array.push('esponjas')
    setTimeout(function(){
      callback(array)
    },5000)
  
  }
  
  modificarLista(listaComprar, function(arrayParametro){
    console.log("se ha modificado el la lista")
    console.log(`Ahora hay que comprar: ${arrayParametro.length} cosas`)
  })


  console.log("\n***  Promesas  ***")
const operation=(n1,n2)=>{
    const resultado=n1+n2
    return new Promise((resolve)=>{//el consultor de la promesa recibe como parámetro el resolve o reject 
        setTimeout(()=>{
            resolve(resultado)//resolve es una función que recibe como parámetro el resultado de la op
        },3000)
    })
}

operation(10,5)
    .then(result=>(console.log(`la suma es: ${result}`)))

console.log("\n***  Async - Await  ***")


function operation2(value){
    if(typeof value!="number"){
        return Promise.reject("No es un número")
    }
    return new Promise((resolve, reject)=>{ 
        setTimeout(()=>{
            resolve({value,
            result:value*value})
        },1000)

    })
}
async function op() {
    try {
        const resultado = await operation2(5);
        console.log("Éxito:", resultado);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Fin del programa");
    }
}

op()