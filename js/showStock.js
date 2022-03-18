/* mostrar el STOCK de  productos disponibles ************************************************************************* */

let stock = stockProductos;
let contenedor = document.getElementById('contenedor');
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
  const inputValue = e.target.value.toLowerCase();
  filteredItems = stock.filter((item) => {
    return (
      item.nombre.toLowerCase().includes(inputValue) ||
      item.marca.toLowerCase().includes(inputValue) ||
      item.tipo.toLowerCase().includes(inputValue)
    );
  });

  showItems(filteredItems);
});

const showItems = (items) => {
  console.log(items);
  emptyContainer();
  items.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'card cardStyle';
    div.style = 'width: 18rem';
    div.innerHTML = `
                <img src=.${item.img} class="card-img-top imgStyle" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.tipo}</h5>
                    <p class="card-text"><strong>${item.marca}</strong></p>
                    <p class="card-text">${item.nombre}</p>
                    <p class="card-text">Precio: U$S ${item.precio}</p>
                    <button onclick="agregarAlCarrito(${item.id})" id="addToCart" class="btn btn-success"> Agregar al carrito.</button>
                </div>
        `;

    contenedor.appendChild(div);
  });
};

const emptyContainer = () => {
  document.getElementById('contenedor').innerHTML = '';
};

showItems(stock);
