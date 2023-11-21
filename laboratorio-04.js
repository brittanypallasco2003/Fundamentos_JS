//ARREGLOS
console.log("\t--Arreglos--")

const edades = [20,30,12,15,17]

console.log('Primer elemento:', edades[0]); 
console.log('Segundo elemento:', edades[1]);

console.log("\nRecorrer un Arreglo")
console.log('Elementos del arreglo:');
for (let j = 0; j < edades.length; j++) {
  console.log(edades[j]);
}

console.log("\nMetodos")
const sabores = ['menta', 'mora', 'coco', 'taxo'];
sabores.push('chocolate') //Agrega chocolate al final del arreglo
console.log(sabores)

sabores.unshift('naranjilla')//Agrega naranjilla al inicio del arreglo
console.log(sabores)

sabores.pop()//Elimina el último elemento del arreglo. (chocolate)
console.log(sabores)

sabores.shift()//Elimina el primer elemento del arreglo. (naranjilla)
console.log(sabores)

const copiaSabores = sabores.slice(1, 4)//realiza una copia desde el elemento del índice n hasta el n-1
console.log(`Los sabores en la posición de la 1-3 son: ${copiaSabores}`)

const longitud = sabores.length
console.log(`La longitud del arreglo sabores es: ${longitud}`)

console.log("\nDestructuracion de un Arreglo")
const animales = ['panda', 'conejo', 'tiburón', 'capibara']
const [animal1, animal2, animal3, animal4] = animales
console.log(`Animal 1: ${animal1}`)
console.log(`Animal 2: ${animal2}`)
console.log(`Animal 3: ${animal3}`)
console.log(`Animal 4: ${animal4}`)

console.log("\nRest vs Spread")

console.log("\n*Rest")
const nuevasTareas = ['realizar resumen', 'estudiar para pruebas', 'colgar ropa']
// const nuevasFrutas = [...frutas, 'naranja']
// console.log(nuevasFrutas)

console.log("\n***  Spread  ***")
const tareasPendientes = ['Arreglar cuarto', 'lavar ropa', 'limpiar cocina']
const tareasRealizadas = [...nuevasTareas,...tareasPendientes]
console.log(tareasRealizadas);

/////////////////////////////////////////////////////////

//Objetos

console.log("-----  Objetos  -----")
const persona = {
    nombre: 'Nohemi',
    edad: 20,
    ciudad: 'Quito',
    carrera: 'Desarrollador de Software'
};

console.log('Nombre:', persona.nombre)
console.log('Edad:', persona.edad)

console.log("\nDestructuracion de Objetos")
const { nombre, edad, ciudad, carrera } = persona;

console.log(`Nombre: ${nombre}`)
console.log(`Edad: ${edad}`)
console.log(`Ciudad: ${ciudad}`)
console.log(`Carrera: ${carrera}`)

console.log("\nCopia de Objetos")
const personaCopia = { ...persona }
personaCopia.carrera = 'Agua y Saneamiento Ambiental'

console.log('Original:', persona)
console.log('Copia:', personaCopia)

console.log("\n***  Metodos  ***")
const materia = {
    nombreM: 'POO',
    docente: 'Ing.Juan Pablo Zalumbide ',
    nHorasSemana:6
  }

console.log('Claves: ',Object.keys(materia))
console.log('Valores: ',Object.values(materia))
console.log('Entradas: ',Object.entries(materia))

console.log("\nNombres Abreviados")
const codigoUnico =202056569
const semestre = 1

const estudiante = {
    codigoUnico,
    semestre
}

console.log(estudiante);