// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  let cat = {};
  cat.nombre = nombre;
  cat.edad = edad;
  cat.meow = () => {
    return 'Meow!'
  };
  return cat;
}
// console.log(crearGato('Kass', 5));


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null
  return objeto;
}
/* console.log(agregarPropiedad(
  {
    nombre: 'Kass',
    edad: 5,
    meow: () => {
      return 'Meow!'
    }
  },
  'favouriteFood'
)); */


function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  return objeto[metodo]();
}
/* console.log(
  invocarMetodo(
    {
      nombre: 'Kass',
      edad: 5,
      meow: () => {
        return 'Meow!'
      }
    },
    'meow'
  )
); */


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5;
}
// console.log(multiplicarNumeroDesconocidoPorCinco({numeroMisterioso: 3}));


function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];
  return objeto;
}
/* console.log(eliminarPropiedad(
  {
    nombre: 'Kass',
    edad: 5,
    food: 'meat',
    meow: () => {
      return 'Meow!'
    }
  },
  'food'
)); */

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  let obj = {};
  obj.nombre = nombre;
  obj.email = email;
  obj.password = password
  return obj;
}
// console.log('YoMerengues', 'io@io.io', 'ijolessss69');


function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  // return keys = Object.keys(usuario).includes('email');
  return usuario.email ? true : false;
}
/* console.log(tieneEmail(
  {
    name: 'YoMerengues',
    age: 46,
    favouriteFood: 'Mole de olla',
    hobbie: 'bachatear',
    passion: 'coding',
    email: 'iomero@chiquititos.com'
  }
)); */


function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  return Object.keys(objeto).includes(propiedad);
}
/* console.log(tienePropiedad(
  {
    name: 'YoMerengues',
    age: 46,
    favouriteFood: 'Mole de olla',
    hobbie: 'bachatear',
    passion: 'coding',
    email: 'iomero@chiquititos.com'
  },
  'hobbie'
)); */


function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log(`${usuario.password} === ${password}`);
  return usuario.password === password;
}
/* console.log(verificarPassword(
  {
    name: 'YoMerengues',
    password: 'laqueSeArmaSiMeLoCopias69',
    age: 46,
    favouriteFood: 'Mole de olla',
    hobbie: 'bachatear',
    passion: 'coding',
    email: 'iomero@chiquititos.com'
  },
  'laqueSeArmaSiMeLoCopias69'
)); */


function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;
  return usuario
}
/* console.log(actualizarPassword(
  {
    name: 'YoMerengues',
    password: 'laqueSeArmaSiMeLoCopias69',
    age: 46,
    favouriteFood: 'Mole de olla',
    hobbie: 'bachatear',
    passion: 'coding',
    email: 'iomero@chiquititos.com'
  },
  'EsteEsElGüeno69'
)); */



function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}
/* console.log(agregarAmigo(
  {
    name: 'YoMerengues',
    password: 'laqueSeArmaSiMeLoCopias69',
    age: 46,
    favouriteFood: 'Mole de olla',
    hobbie: 'bachatear',
    passion: 'coding',
    email: 'iomero@chiquititos.com',
    amigos: ['Amigui1', 'Amigui2', 'Amigui3']
  },
  'Cuatazaaaasssoooo'
)); */



function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  usuarios.map(usuario => usuario.esPremium = true);
  return usuarios;
}
/* console.log(pasarUsuarioAPremium(
  [
    { usuario: 'user1', pwd: 'pw1', esPremium: false },
    { usuario: 'user2', pwd: 'pw2', esPremium: true },
    { usuario: 'user3', pwd: 'pw3', esPremium: false },
    { usuario: 'user4', pwd: 'pw4', esPremium: true },
    { usuario: 'user5', pwd: 'pw5', esPremium: false },
]
)); */



function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  let totalLikes = 0;
  usuario.posts.forEach(post => totalLikes += post.likes);
  return totalLikes;
}
/* console.log(sumarLikesDeUsuario(
  {
    name: 'YoMerengues',
    password: 'laqueSeArmaSiMeLoCopias69',
    age: 46,
    favouriteFood: 'Mole de olla',
    hobbie: 'bachatear',
    passion: 'coding',
    email: 'iomero@chiquititos.com',
    amigos: ['Amigui1', 'Amigui2', 'Amigui3'],
    posts: [
      {title: 'title1', likes: 100 },
      {title: 'title2', likes: 150 },
      {title: 'title3', likes: 50 },
      {title: 'title4', likes: 50 },
      {title: 'title5', likes: 100 }
    ]
  }
)); */


function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento = function() {
    this.descuento = this.precio * this.porcentajeDeDescuento;
    this.precio -= this.descuento;
    return this.precio;
  }
  return producto;
}
/* console.log(agregarMetodoCalculoDescuento({
  precio: 20,
  porcentajeDeDescuento: 0.2,
  descuento: 0
})); */


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
