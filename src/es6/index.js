// _____Default params:

function newFunction (name, age, country) {
  var name = name || 'oscar'
  var age = age || 32
  var country = country || 'MX'
  console.log(name, age, country);
}

function newFunction2 (name = 'oscar', age = 32, country = 'MX') {
  console.log(name, age, country);
}

newFunction2()
newFunction2('Tomas', 16, 'ARG')



// _____Template literals:

var hello = 'Hello'
var world = 'World'
var epicPhrase = hello + ' ' + world
console.log(epicPhrase);

var epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);



// ______Multiline (salto de línea):

var lorem = 'Hola amigos bienvenidos a este nuevo video, \n'
+ 'Yo soy Antrax y en el día de hoy...'
console.log(lorem);

var lorem2 = `Hola amigos bienvenidos a este nuevo video,
yo soy Antrax y en el día de hoy...`
console.log(lorem2);



// _____Desestructuración:
var person = {
  name: 'Oscar',
  age: 32,
  country: 'MX'
}
console.log(person.name, person.age, person.country);

var { name, age, country } = person 
console.log(name, age, country);



// _____Spread operator (operador de propagación):
var team1 = ['Oscar', 'Julian', 'Ricardo']
var team2 = ['Valeria', 'Yesica', 'Camila']
var education = ['David', 'Oscar', 'Julian', 'Ricardo', 'Valeria', 'Yesica', 'Camila']

var education2 = ['David', ...team1, ...team2] // Sintáxis mas corta
console.log(education2);



// _____Let y Const:
{
  var globalVar = 'Global var'
}

{
  let globalLet = 'Global let'
}
console.log(globalVar); // Se puede acceder
console.log(globalLet); // No se puede acceder

const a = 'b'
a = 'a' // Esto no se puede hacer y nos lanza un error



// _____Parámetros en objetos:
let name = 'Oscar'
let age = 32
let obj = { name: name,  age: age}
console.log(obj);

let obj2 = { name, age } // Syntáxis mas corta
console.log(obj2);



// _____Arrow functions:

const names = [
  { name: 'Tomas', age: 16 },
  { name: 'Sofía', age: 8 }
]
let listOfNames = names.map(function(item) {
  console.log(item.name);
})
// es6
let listOfNames2 = names.map(item => console.log(item.name))
const listOfNames3 = (names, age, country) => {
  ...
}
const square = num => num * num



// _____Promesas:
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Hey, todo bien!')
    } else {
      reject('Ups!')
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('Hola'))
  .catch(error => console.log(error))



// _____Clases:
class calculator {
  constructor() {
    this.valueA = 0
    this.valueB = 0
  }
  sum(valA, valB) {
    this.valueA = valA
    this.valueB = valB
    return this.valueA + this.valueB
  }
}

const calc = new calculator()
console.log(calc.sum(2, 3));



_____Modules:
import hello from './module'
hello() // Hello Tomas!



// _____Generators:
function* helloWorld() {
  if(true) {
    yield 'Hello, ' // Es como un return
  }
  if(true) {
    yield 'World'
  }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value); // Hello,
console.log(generatorHello.next().value); // World
console.log(generatorHello.next().value); // undifined
// El next es como un step o paso.

