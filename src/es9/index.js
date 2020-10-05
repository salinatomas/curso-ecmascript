// _____Operador de reposo:
const obj = {
  name: 'Oscar',
  age: 32,
  country: 'MX',
}

let { country, ...all } = obj
console.log(all); // Como solo nos traemos a all, country: 'MX' queda afuera porque no lo necesitamos



// _____Utilizar el operador de propagación para unir objetos unos con otros.
const obj1 = {
  name: 'Oscar',
  age: 32,
}

const obj2 = {
  ...obj1,
  country: 'MX'
}

console.log(obj2);



// _____Promise finaly:
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 2000)
      : reject(new Error('Test error'))
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('La promesa ha finalizado'))



// _____Regex: (Expresiones regulares)
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('20189-04-20') // exec = ejecutar
const year = match[1] // Grupo 1
const month = match[2]
const day = match[3]

console.log(year, month, day);
console.log(match); // Vemos que el array match es muy raro y para acceder a algunas propiedades hay que hacer una combinacion entre array y objeto