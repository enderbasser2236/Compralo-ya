/* mostrar el STOCK de  productos disponibles ************************************************************************* */

const contenedor = document.getElementById('contenedor');

stockProductos.forEach((prod) => {
  const div = document.createElement('div');
  div.className = 'card cardStyle';
  div.style = 'width: 18rem';

  div.innerHTML = `
            <img src=${prod.img} class="card-img-top imgStyle" alt="...">
            <div class="card-body">
                <h5 class="card-title">${prod.tipo}</h5>
                <p class="card-text"><strong>${prod.marca}</strong></p>
                <p class="card-text">${prod.nombre}</p>
                <p class="card-text">Precio: U$S ${prod.precio}</p>
                <button onclick="agregarAlCarrito(${prod.id})" id="addToCart" class="btn btn-success"> Agregar al carrito.</button>
            </div>
    `;

  contenedor.appendChild(div);
});

/* variables CARRITO y RESTORE DELOCALSTORAGE ********************************************************************* */

const itemCarrito = document.getElementById('selectorCarrito');

let itemsRestored = recuperarItems();

const carrito = [];
itemsRestored.map((item) => {
  carrito.push(item);
  mostrarCompra();
  totalItems();
});

calcularTotal(carrito);

/* FUNCION DE AGREGAR AL CARRITO**************************************************** */

function agregarAlCarrito(prodId) {
  let producto = stockProductos.find((el) => el.id === prodId);
  carrito.push(producto);

  mostrarCompra();
  totalItems();
  addedToCart();
}

/* FUNCION DE VACIAR EL CARRITO********************************************************* */

function vaciarCarrito() {
  carrito.length = 0;
  mostrarCompra();
  let items1 = document.getElementById('totalItemsCarrito');
  items1.innerHTML = carrito.length;
}

/* funcion que elimina los items del carrito 1 por 1 **************************************************************/

function deleteItem(stockProductos) {
  carrito.splice(carrito.indexOf(stockProductos));
  itemCarrito.removeChild(document.getElementById(stockProductos));
  let items1 = document.getElementById('totalItemsCarrito');
  items1.innerHTML = carrito.length;
  respaldarCarrito(carrito);
  calcularTotal(carrito);
  deleteFromCart();
}

/* mostrar elementos en el carrito*********************************************************** */

function mostrarCompra() {
  itemCarrito.innerHTML = '';

  carrito.forEach((prod) => {
    const li = document.createElement('li');
    li.id = `${prod.id}`;
    li.className = 'list-group-item d-flex justify-content-between lh-sm';
    li.innerHTML = `
        <div>
        <h6 class="my-0">${prod.tipo} ${prod.marca}</h6>
        <small class="text-muted">${prod.nombre}</small>
        </div>
        <span class="priceAlignment text-muted"><strong>Precio: U$S ${prod.precio}</span>
        <button id="deleteButton" class="btn btn-danger" onclick="deleteItem(${prod.id})">Borrar</button>
        
        `;

    itemCarrito.appendChild(li);
  });

  respaldarCarrito(carrito);
  calcularTotal(carrito);
}

/* Icono que muestra el total de items en el carrito************************************************************* */

function totalItems() {
  let items1 = document.getElementById('totalItemsCarrito');
  items1.innerHTML = carrito.length;
}

/* funcion que muestra el total del monto de los items en el carrito ***********************************************/

function calcularTotal(prod) {
  let totalVenta = 0;
  for (let producto of prod) {
    totalVenta += producto.precio;
  }
  let total = document.getElementById('montoTotal');
  total.innerHTML = 'U$S ' + totalVenta;
}

/* funcion para respaldar los items del carrito en LOCALSTORAGE *************************************************** */

function respaldarCarrito(carrito) {
  let storageCarrito = JSON.stringify(carrito);
  localStorage.setItem('itemsCarrito', storageCarrito);
}

/* Funcion que recupera los items del carrito del LOCALSTORAGE **************************************************** */

function recuperarItems() {
  let recuperarCarrito = localStorage.getItem('itemsCarrito');
  let storageParseado = JSON.parse(recuperarCarrito);

  return storageParseado;
}
