// _____Object entries:
const data = {
  frontend: 'Oscar',
  backend: 'Isabel',
  design: 'Ana'
}

const entries = Object.entries(data)
console.log(entries);
console.log(entries.length); // Antes era más dificil saber cuantos elementos tenía un objeto



// _____Object values:

const data = {
  frontend: 'Oscar',
  backend: 'Isabel',
  design: 'Ana'
}

const values = Object.values(data)
console.log(values); // Con esto ya podemos hacer por ejemplo un .map
console.log(values.length); // Y por supuesto tambíen tenemos el .lenght



// _____Padding:
const string = 'hello' // Acá ya tenemos 5 caracteres
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(8, ' hi'));
// Esto es muy amigable por ejemplo cuando del lado del front tenemos listas o elementos similares



// _____Trailing-comas:
const obj = {
  name: 'Tomas', // <--- Esta coma ya no nos da un error
}
// Es una sintaxis más amigable para no cometer errores.




// _____Async await:
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true) // Condicional ternario
      ? setTimeout(() => resolve('Hello World'), 2000)
      : reject(new Error('Test errooooooooor'))
  }) 
}

const helloAsync = async () => {
  const hello = await helloWorld()
  console.log(hello);
}

helloAsync() // Acá no podríamos capturar el error

const anotherFuncition = async () => {
  try {
    const hello = await helloWorld()
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
}
anotherFuncition() // Acá podemos capturar el error 