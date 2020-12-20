// Interfaces

enum Color {
  Rojo = "rojo", 
  Verde = "verde",
}

interface Rectangulo {
  ancho: number
  alto: number
  //3 o lo hacemos opcional
  color?: Color
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  //1 Para que no salga undefined
  //2 directamente declaramos el color
  color: Color.Rojo
  
}

function area(r: Rectangulo): number {
  return r.alto * r.ancho
}

const areaRect = area(rect) 
console.log(areaRect)

// No causa error
// console.log(rect.toString())

rect.toString = function() {
  //lógica para que no salga undefined
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo sin color`
}

console.log(rect.toString())