// Boolean
let muted: boolean = true
muted = false

// Números
let numerador: number = 42
let denominador: number = 6
let resultado = numerador/denominador

//String
let nombre: string = 'Raul'
let saludo = `Me llamo ${nombre}`

// Arreglos
let people: string[] = []
people = ['Isabel', 'Nicole', 'Raul']
// people.push(9238) marca error

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Ricado')
peopleAndNumbers.push('8934')

// Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
}
let colorFavorito: Color = Color.Rojo
console.log(`Mi color favorito es ${colorFavorito }`)

//Any
//string
let comodin: any = 'Joker' 
//objeto
comodin = { type: 'Wildcard' }

//object
let someObject: object = { type: 'Wildcard' }

// Funciones
function add(a: number, b: number): number {
  // aquí no es necesario ser explicitos en el return
  // porque ts ya sabe que onda pero lo ponemos
  // por razones ilustrativas
  return a + b
}

const sum = add(4, 6)

//funciones que regresan funciones
function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a
  }
}

const addFour = createAdder(4) 
const fourPlusSix = addFour(6)

//funciones con parámetros opcionales
function fullName(firstName: string, lastName: string = 'Smith'): string {
  return `${firstName} ${lastName}`
}

const raul = fullName('Raul', 'Hernandez')
const fer = fullName('Fer')

console.log(raul)
console.log(fer)