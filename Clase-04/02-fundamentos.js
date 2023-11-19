//Diferencias entre un objeto y un json

const user1 = {
    name:"Brittany",
    lastName:"Espinel",
    age:34,
    address:{
        city:"Quito",
        telephone:"0960572599",
        street:"S42D"
    },
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: function (){
        return `send notification to ${this.Friends[3]}`
    }
}
console.log(user1.state);
console.log(user1.sendMail());
console.log(user1.sendNotification());

// Agregar un par de clave y valor al objeto
user1.image ="t.ly/Rhgs"

// Eliminar un par de clave y valor del objeto
delete user1.state

console.log(user1);

/* 
'use strict';
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        streets:
        {
            principal: "Quitumbe Ñan",
            secondary:"Huayanay Ñan"
        }
    }
}

*/

//Destructuración de objetos
// const {name,lastName,age,address} = user
// console.log(name,lastName,age,address);

// const {name,lastName,age,myAddress=user.address} = user
// console.log(name,lastName,age,myAddress);

// const {name,lastName,age,address:{streets}} = user
// console.log(name,lastName,age,streets);

// const {name,lastName,...res} = user
// console.log(name,lastName,res);

//Copiar dos objetos

'use strict';
const user = {
    name:"Nohemi",
    lastName:"Espinel",
    age:20
}

const extraInformation = {
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Andres Peréz"
    },
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: function (){
        return `send notification to ${this.Friends[3]}`
    }
}

//Spread operator: junta dos objetos, sus copias
const allInformation = {...user,...extraInformation}
console.log(allInformation)

//Nombres abreviados de propiedades
const nombre ="laptop"
const price = 3000

const newProduct = {
    nombre,
    price
}

console.log(newProduct);

//Push: agrega un elemento al final

const profileUser=[`Bri`, `Espinel`, `20`]

const skills = ["Front", "Back"]
// profileUser.push(skills) 

//Unshift agrega el elemento al inicio

// profileUser.unshift(skills) 

//Pop elimina el ultimo dato
// profileUser.pop()

// Shift elimina el primer elemento
// profileUser.shift()

console.log(profileUser)

/* const findOne = profileUser.find((e) => e == "Juan") // Busca el elemento indicado dentro del array

const findTwo = profileUser.find((e) => e == "Bri")

console.log(findOne)
console.log(findTwo) */

// const newData = profileUser.filter(e => e != "Peter") // Filtra todos los datos y devuelve el array a excepcion del elemento indicado

const newDato = profileUser.map(i => `${i}`) 

const[nom, lastname, edad] = profileUser  // Desustructuracion de arreglos

console.log(nom, lastname, edad) 
