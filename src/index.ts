//primera prueba
let mensaje: string = 'hola mundo';

mensaje = 'chanchito feliz';

console.log(mensaje);

mensaje = 'chao mundo'

//tipos

/*
    * Tipos de JS:
    * Number
    * String
    * Null
    * Undefined
    * Boolean
    * Object
    * Function 

    * Tipos de TS:
    * Any // No usarlo
    * Unknow
    * Never
    * Arrays
    * Tuplas
    * Enums
    
    
*/

// * Tipos inferidos
let extincionDinos = 76_000_000 // se sabe que es number por que se inicializó con un dato number
let dinoFav: string = 'Velociraptor'
let extintos = true // se sabe que es boolean por que se inicializó con un boolean


// No usar Any porque funcionaría como dinámico y la finaldad de TS es que sea estático. Siempre asignar tipo de dato

let miVariable // no se sabe que tipo de dato es por que no está inicializado, lo cual lo hace una variable dinamica

miVariable = 'chanchito feliz'

miVariable = 42

let animales: string[] = ['perro', 'koala', 'oso'] // array de strings
let numeros: number[] = [1, 2, 3, 4, 5] // array de numeros
let checks: boolean[] = [true, false, true, true] // array de booleanos
let numeros2: Array<number> = [] // otra forma de hacer arrays

// animales.map(x=>x.) el autocompletado sugiere métodos del tipo de dato correspondiente
