console.log("-----  Api  -----")

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

fetch(url)
    .then(res=>res.json())
    .then(response=>console.log(response))


    
console.log("\n***  Local Storage  ***")

const user = {
    nombre: 'Camila',
    edad: 28,
    ciudad: 'EjemploCity'
}

//Poner el objeto en el LocalStorage-->convirtiendolo a String
localStorage.setItem('user', JSON.stringify(user)) 

console.log("\n***  Obtener un Objeto en el LocalStorage y convertirlo a un JSON valido  ***")

let objetoCamila=localStorage.getItem('user')//retorna como string
console.log('objeto converitdo a string: ',objetoCamila)
objetoCamila = JSON.parse(objetoCamila);

if (objetoCamila) { 
    console.log('Objeto obtenido del localStorage:', objetoCamila);
} else {
    console.log('No se encontró ningún objeto en el localStorage.');
}

console.log("\n***  Eliminar un Objeto en el LocalStorage  ***")

localStorage.removeItem('user');