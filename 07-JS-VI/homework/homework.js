// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
}
/* console.log(mayuscula('jorge')); */


function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}
/* const saluda = () => { console.log(`Qué pez`)}
invocarCallback(saluda); */


function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2);
}
/* const suma = (n1, n2) => { console.log(n1 + n2) }
operacionMatematica(5, 10, suma); */


function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  cb( numeros.reduce( (acc, value) => { return acc + value}, 0 ) );
}
/* const numeros = [ 5, 10, 15, 20, 30, 35, 45 ];
const print = (suma) => { console.log(suma) }
sumarArray(numeros, print); */


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach( element => { cb(element) });
}
/* let nombres = [ 'Nom1', 'Nom2', 'Nom3', 'Nom4', 'Nom5'];
const allCapital = (string) => { console.log(string.toUpperCase()) };
forEach(nombres, allCapital);
 */


function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  return array.map( element => cb(element) );
}
/* let nombres = [ 'Nom1', 'Nom2', 'Nom3', 'Nom4', 'Nom5'];
const allLow = (string) => { return string.toLowerCase() };
console.log(map(nombres, allLow)); */

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  return array.filter( element => element[0] === 'a' );
}
/* let nombres = [ 'Nom1', 'aNom2', 'Nom3', 'aNom4', 'Nom5'];
console.log(filter(nombres)); */

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
