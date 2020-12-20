import Singleton from './Singleton'

//getInstance() es el método público y 
//el constructor es privado
const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log('A es igual a B?', a === b)
