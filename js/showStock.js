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
