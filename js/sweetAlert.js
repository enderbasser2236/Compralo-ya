const addedToCart = () => {
  swal.fire({
    text: 'Agregado al carrito',
    icon: 'success',
    width: '20%',
    background: '#e0e0e',
    timer: 1500,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
  });
};

const deleteFromCart = () => {
  swal.fire({
    text: 'Eliminado',
    icon: 'error',
    width: '20%',
    background: '#e0e0e',
    timer: 1500,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
  });
};

const emptyCart = () => {
  swal.fire({
    text: 'Vaciaste el Carrito',
    icon: 'error',
    width: '20%',
    background: '#e0e0e',
    backdrop: true,
    timer: 2000,
    showConfirmButton: false,
  });
};

const endBuy = () => {
  swal.fire({
    html: 'Gracias por su compra, <br/> Siga comprando con nosotros, <br/> su pedido se a realizado con exito',
    icon: 'success',
    width: '50%',
    background: '#e0e0e',
    backdrop: true,
    timer: 3000,
    showConfirmButton: false,
  });
  vaciarCarrito();
};
