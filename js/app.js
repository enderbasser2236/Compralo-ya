/* variables CARRITO y RESTORE DELOCALSTORAGE ********************************************************************* */
let cart = [];

const itemCarrito = document.getElementById('selectorCarrito');

let itemsRestored = recuperarItems();

itemsRestored.map((item) => {
  cart.push(item);

  totalItems();
});

/* FUNCION DE AGREGAR AL CARRITO**************************************************** */

function agregarAlCarrito(prodId) {
  let producto = stockProductos.find((el) => el.id === prodId);
  cart.push(producto);
  respaldarCarrito(cart);
  totalItems();
  addedToCart();
}

/* Icono que muestra el total de items en el cart************************************************************* */

function totalItems() {
  let items1 = document.getElementById('totalItemsCarrito');
  items1.innerHTML = cart.length;
}

/* funcion para respaldar los items del cart en LOCALSTORAGE *************************************************** */

function respaldarCarrito(cart) {
  let storageCarrito = JSON.stringify(cart);
  localStorage.setItem('itemsCarrito', storageCarrito);
  console.log(cart);
}

/* Funcion que recupera los items del cart del LOCALSTORAGE **************************************************** */

function recuperarItems() {
  let recuperarCarrito = localStorage.getItem('itemsCarrito');
  let storageParseado = JSON.parse(recuperarCarrito);

  return storageParseado;
}
