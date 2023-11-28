# Fundamentos_JS
## Api
### Obtner datos de pokeAPI
|PokeApi|
|-|
|![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/b6d091b5-0993-4f20-a166-683122c2128b)|
|![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/b3c98ae0-0f58-4755-990e-1093f149f448)|
|![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/8f29b24d-ff25-4950-8970-383c9f680c35)|
### LocalStorage
#### Obtener un Objeto en el LocalStorage
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/b15c7b23-8fcf-4c78-93fb-72ab9c79a600)
#### Eliminar un Objeto en el LocalStorage
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/64822acd-4565-46e1-8c58-b046dd28687a)

## Modulos
### CommonJS
#### Default
```
module.exports=sumar //module.js
const sumar=require('./modulo') //index.js
```
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/83a665da-b5d9-4041-99eb-26166da7fd07)

#### Nombrado
```
module.exports={ //modulo.js
    sumar,
    a,
    b
}
const{sumar,a,b}=require('./modulo')//index.js
```
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/5bcaccbd-24af-4a9a-8a4e-1ef2762ad9b1)

### ES Module
#### Default
```
export default sumar //modulo.js
import sumar from './modulo.js'    //index.js
```
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/ffa296f5-c4ce-4b33-ba6b-ab1b1e59c51d)

#### Nombrado
```
export{         //modulo.js
    sumar,
    a,
    b
}
import{sumar,a,b} from './modulo.js'  //index.js
```
![image](https://github.com/brittanypallasco2003/Fundamentos_JS/assets/117743650/ad7c755d-c0ff-4dbe-81e2-8c2572c0040f)




