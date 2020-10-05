// _____Array.flat: (es como aplanar)
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
console.log(array.flat()); // por defecto va a aplanar un solo subnivel
console.log(array.flat(2));



// _____Array.flatMap:
let array = [1, 2, 3, 4, 5]
console.log(array.map(value => [value, value * 2]));
console.log(array.flatMap(value => [value, value * 2]));



// _____Trim start: (eliminar los espacios en blanco del inicio de un string)
let hello = '      Hello World'
console.log(hello);
console.log(hello.trimStart());

// _____Trim end: (eliminar los espacios en blanco del final de un string)
let hello = 'Hello World          '
console.log(hello);
console.log(hello.trimEnd());



// _____Ya no hace falta utilizar catch(error) dentro de async await:
  // Before
try {

} catch (error) {
  console.log(error);
}

  // es10
try {

} catch {
  console.log(error);
}



// _____Object fromEntries: (lo contrario a Object entries)
let entries = [
  ["name", "Oscar"], 
  ["age", 32],
  ["country", "MX"],
]

console.log(entries);
console.log(Object.fromEntries(entries));
// Ya podemos transformar un arreglo a un objeto y un objeto a arreglo



// _____Symbol description:
let mySymbl = `My epic Symbol`
let symbol = Symbol(mySymbl)
console.log(symbol.description);