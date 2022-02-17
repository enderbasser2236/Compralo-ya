const capturarFormulario = (e) => {
  e.preventDefault();
  let formBanco = document.getElementById('banco').value;
  let formCuotas = Number(document.getElementById('cuotas').value);
  let formMonto = Number(document.getElementById('monto').value);

  financiacion(formBanco, formCuotas, formMonto);
};

const miFormulario = document.getElementById('formulario');
miFormulario.addEventListener('submit', capturarFormulario);

const erase = () => {
  document.getElementById('simuladorOutput').innerHTML = '';
};

/* algoritmo de calculo de financiacion************************** */

const financiacion = (banco, cuotas, monto) => {
  let montoCuota = 0;
  if (monto >= 500) {
    if (banco && cuotas && monto !== '') {
      switch (banco) {
        case 'santander':
          switch (cuotas) {
            case 6:
              montoCuota = (monto * 1.2) / cuotas;
              break;

            case 9:
              montoCuota = (monto * 1.25) / cuotas;
              break;

            case 12:
              montoCuota = (monto * 1.3) / cuotas;
              break;
          }

          break;

        case 'scotiabank':
          switch (cuotas) {
            case 6:
              montoCuota = (monto * 1.25) / cuotas;
              break;

            case 9:
              montoCuota = (monto * 1.3) / cuotas;
              break;

            case 12:
              montoCuota = (monto * 1.35) / cuotas;
              break;
          }

          break;

        case 'itau':
          switch (cuotas) {
            case 6:
              montoCuota = (monto * 1.15) / cuotas;
              break;

            case 9:
              montoCuota = (monto * 1.2) / cuotas;
              break;

            case 12:
              montoCuota = (monto * 1.25) / cuotas;
              break;
          }

          break;
      }

      print(monto, montoCuota, cuotas);
    } else {
      print();
    }
  } else {
    alert('El monto minimo a financiar es de 500 dolares!');
  }
};

/* ALERTS!!!!!! ***********************************************************************/

const print = (monto, montoCuota, cuotas) => {
  let texto1 = 'El monto solicitado es de ' + monto + ' U$S dolares';
  let texto2 =
    'El valor de su cuota mensual por el prestamo solicitado seria de ' +
    montoCuota +
    ' u$S dolares.';
  let texto3 =
    'El total a cancelar por el prestamo solicitado seria de ' +
    montoCuota * cuotas +
    ' U$S dolares.';

  let textoReject =
    'los campos deben estar llenos obligatoriamente, por favor intente nuevamente';

  if (monto && montoCuota && cuotas !== '') {
    document.getElementById('simuladorOutput').innerHTML =
      texto1 + '</br></br>' + texto2 + '</br></br>' + texto3;
  } else {
    document.getElementById('simuladorOutput').innerHTML = textoReject;
  }
};
