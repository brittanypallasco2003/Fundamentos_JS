# Fundamentos_JS
## Manipulación del DOM
### Acceder a los elementos HTML
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/7274da08-206a-4aae-95d6-1cf20676f736)

### Obtener las clases de elementos
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/ad11670d-87a3-4218-8971-ee29c4fb76da)

### Seleccionar elementos por clase
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/b10ae56f-097c-47df-bc10-9babcbb37d52)

### Seleccionar elementos por id
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/cfcbaa2d-8e1f-48cf-ac30-eb1fa12d7c00)

### Seleccionar con querySelector
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/f40edeaa-9cde-47af-819a-27e8b03d7504)

### Seleccionar con querySelectorAll
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/21fb5525-eb41-40a4-9899-5b2dd332316c)

### Modificar el contenido
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/8243334b-e584-4685-8579-c08a5065b363)

### Modificar el estilo
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/fb895312-53de-4483-8188-f62d5198ebb4)

### Agregar Elementos
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/f32ccdd5-419f-4fa1-9b84-2cddff0be1ce)

### Eliminar Eventos
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/c4e395cc-69e2-4489-91fc-68a1c6b640b8)

### Eventos
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/7a43b17e-884b-4d6a-b9a8-ec55df231283)
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/eb9b093c-aa14-4f6a-8eb4-205190ea0170)

## Asincronismo
### Ejemplo de Asincronismo
|Poner una peli mientras se hacen palomitas|
|-|
|![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/3c39c6ac-aee3-4b8c-b786-9b9702632b4c)|
|![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/59c691f3-6959-4ace-b355-35629058718d)|

### Código Síncrono vs Asíncrono
#### Ejemplo Código Síncrono
```
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
```

#### Ejemplo código Asíncrono
```
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
```
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/63675874-2b21-49f3-a48a-0bf6be1087eb)

### Promesas
```
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
```
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/4c94bd24-b2bb-4873-b50d-dc7dcb776d2c)

### Asyn-Await
```
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
```
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/0059eb2d-70be-481b-a1fa-3f1f0f82ab8d)














