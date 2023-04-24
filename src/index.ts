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


// Arrays
let animales: string[] = ['perro', 'koala', 'oso'] // array de strings
let numeros: number[] = [1, 2, 3, 4, 5] // array de numeros
let checks: boolean[] = [true, false, true, true] // array de booleanos
let numeros2: Array<number> = [] // otra forma de hacer arrays

// animales.map(x=>x.) el autocompletado sugiere métodos del tipo de dato correspondiente


// Tuplas
let tupla: [number, string] = [1, 'hola mundo'] // un array con longitud y tipo de datos definida


// tipos personalizados

type Direccion = {
    nomenclatura: string,
    numero: number,
    adicional: string
}

type Persona = {
    id: number,
    nombre: string,
    edad?: number, // aunque sea necesario en como los otros con colocarle '?' se hace opcional agregarlo al objeto
    readonly identificacion: number, // con el 'readonly' ya no se podrá modificar la propiedad del objeto
    direccion: Direccion
}

// Objetos
const objeto: Persona = {
    id: 2,
    nombre: 'chanchito',
    identificacion: 1078455732,
    direccion: {
        nomenclatura: 'calle',
        numero: 18,
        adicional: 'por los pollos'
    }
}

// objeto.identificacion = 21 //no podré hacer esto porque la propiedad está con 'readonly'



// array de objetos definidos, el array solo podrá tener objetos del tipo ya definido antes
const personasArray: Persona[] = [
    {
        id: 18,
        nombre: 'cuco',
        identificacion: 213421312,
        direccion: {
            nomenclatura: 'calle',
            numero: 18,
            adicional: 'por los pepes'
        }
    }
]