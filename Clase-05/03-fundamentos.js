// 3 formas para ejecutar código asíncrono

//callbacks

//promesas
/*
const conexionBDD = (datosConexion) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion? resolve('conexion ok'):reject('Conexion Error')
        })
    })
}
*/
// conexionBDD(false)
//     .then((respuesta)=>{console.log(respuesta)})//.then permite capturar las respuestas, Es decir toma las ordenasd la igual que la cajera.
//     .catch((error)=>{console.log(error)})//si el resultado da error. 

//llamar a una api
const obtenerDatos=fetch('https://jsonplaceholder.typicode.com/users')//el resultado de la funcion fetch se almacena en una variable que guarda en una promesa
obtenerDatos
    .then(peticion =>peticion.json())
    .then(respuesta =>console.log(respuesta))

    .catch(error=>console.log(error))

//asyn-await
const conectarAPI = async() => {
    try{
        const respuesta= await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await respuesta.json()
        console.log(data)

    }catch(error){
        console.log(error)
    }
}

conectarAPI()

//Promesas vs Asyn
/*
fetch('https://jsonplaceholder.typicode.com/users')
    then(peticion =>peticion.json())
    .then(respuesta =>console.log(respuesta))
    .catch(error=>console.log(error))



const conectarAPI = async() => {
    try{
        const respuesta=fetch('https://jsonplaceholder.typicode.com/users')
        const data=await respuesta.json()
        console.log(data)

    }catch(error){
        console.log(error)
    }
}
*/


const conexionBDD = async() => {

    try{
        const r=await conexionBDD(true)
        console.log(respuesta)
    }
    catch(error){
        console.log(error)
    }
}

conexionBDD()