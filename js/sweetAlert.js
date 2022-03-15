const addedToCart = () => {
  swal.fire({
    text: 'Agregado al carrito',
    icon: 'success',
    background: 'ligthgray',
    timer: 1500,
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
  });
};

const deleteFromCart = () => {
  swal.fire({
    text: 'Eliminado',
    icon: 'error',
    background: 'ligthgray',
    timer: 1500,
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
  });
};

const emptyCart = () => {
  swal.fire({
    text: 'Vaciaste el Carrito',
    icon: 'error',
    background: 'ligthgray',
    backdrop: true,
    timer: 2000,
    showConfirmButton: false,
  });
};

const endBuy = () => {
  swal.fire({
    html: 'Gracias por su compra, <br/> Siga comprando con nosotros, <br/> su pedido se a realizado con exito',
    icon: 'success',
    background: 'ligthgray',
    backdrop: true,
    timer: 3000,
    showConfirmButton: false,
  });
  endBuyEmptyCart();
};
