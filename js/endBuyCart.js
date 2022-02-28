/* variables CARRITO y RESTORE DELOCALSTORAGE ********************************************************************* */

const itemCarrito = document.getElementById('selectorCarrito');

let itemsRestored = recuperarItems();

const cart = [];
itemsRestored.map((item) => {
  cart.push(item);
  mostrarCompra();
  totalItems();
});

calcularTotal(cart);

/* mostrar elementos en el cart*********************************************************** */

function mostrarCompra() {
  itemCarrito.innerHTML = '';

  cart.forEach((prod) => {
    const li = document.createElement('li');
    li.id = `${prod.id}`;
    li.className = 'list-group-item d-flex justify-content-between lh-sm';
    li.innerHTML = `
          <div class="cartDiv">
          <h6 class="my-0">${prod.tipo} ${prod.marca}</h6>
          <small class="text-muted">${prod.nombre}</small>
          <img class="cartImg" style="width:100px; height:100px;" src=/${prod.img}>
          </div>
          <div>
          </div>
          <span class="priceAlignment text-muted"><strong>Precio: U$S ${prod.precio}</span>
          <button id="deleteButton" class="btn btn-danger" onclick="deleteItem(${prod.id})">Borrar</button>
          
          `;

    itemCarrito.appendChild(li);
  });

  respaldarCarrito(cart);
  calcularTotal(cart);
}

/* FUNCION DE VACIAR EL CARRITO********************************************************* */

function vaciarCarrito() {
  cart.length = 0;
  mostrarCompra();
  let items1 = document.getElementById('totalItemsCarrito');
  items1.innerHTML = cart.length;
  emptyCart();
}

/* funcion que elimina los items del cart 1 por 1 **************************************************************/

function deleteItem(stockProductos) {
  cart.splice(cart.indexOf(stockProductos));
  itemCarrito.removeChild(document.getElementById(stockProductos));
  let items1 = document.getElementById('totalItemsCarrito');
  items1.innerHTML = cart.length;
  respaldarCarrito(cart);
  calcularTotal(cart);
  deleteFromCart();
}

/* funcion para respaldar los items del cart en LOCALSTORAGE *************************************************** */

function respaldarCarrito(cart) {
  let storageCarrito = JSON.stringify(cart);
  localStorage.setItem('itemsCarrito', storageCarrito);
}

/* Funcion que recupera los items del cart del LOCALSTORAGE **************************************************** */

function recuperarItems() {
  let recuperarCarrito = localStorage.getItem('itemsCarrito');
  let storageParseado = JSON.parse(recuperarCarrito);

  return storageParseado;
}

/* funcion que muestra el total del monto de los items en el cart ***********************************************/

function calcularTotal(prod) {
  let totalVenta = 0;
  for (let producto of prod) {
    totalVenta += producto.precio;
  }
  let total = document.getElementById('montoTotal');
  total.innerHTML = 'U$S ' + totalVenta;
}

/* Icono que muestra el total de items en el cart************************************************************* */

function totalItems() {
  let items1 = document.getElementById('totalItemsCarrito');
  items1.innerHTML = cart.length;
}
