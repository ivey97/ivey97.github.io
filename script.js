// Obtener una referencia a los elementos de la página que se necesitan para interactuar con ellos
const btnComprar = document.querySelector('#btn-comprar');
const btnCancelar = document.querySelector('#btn-cancelar');
const form = document.querySelector('#formulario');
const cantidadInput = document.querySelector('#cantidad');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const cantidad = Number(cantidadInput.value);

  if (!cantidad || cantidad < 1) {
    alert('Por favor, ingrese una cantidad válida de patines.');
    return;
  }

  const precioUnitario = 99.99;
  const precioTotal = cantidad * precioUnitario;
  alert(`Has comprado ${cantidad} patines por un precio total de $${precioTotal}. Gracias por tu compra!`);
});

const imagenes = document.querySelectorAll('.producto img');

imagenes.forEach((imagen) => {
  const descripcion = imagen.alt;

  imagen.addEventListener('mouseover', () => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = descripcion;
    imagen.parentElement.appendChild(tooltip);
  });

  imagen.addEventListener('mouseout', () => {
    const tooltip = imagen.parentElement.querySelector('.tooltip');
    tooltip.parentElement.removeChild(tooltip);
  });
});

const productos = document.querySelectorAll('.producto');
const productosPorPagina = 6;
let paginaActual = 1;

function mostrarPagina(pagina) {
  const indiceInicial = (pagina - 1) * productosPorPagina;
  const indiceFinal = indiceInicial + productosPorPagina;

  productos.forEach((producto, indice) => {
    if (indice >= indiceInicial && indice < indiceFinal) {
      producto.style.display = 'block';
    } else {
      producto.style.display = 'none';
    }
  });
}

mostrarPagina(paginaActual);

const paginacion = document.querySelector('.paginacion');

for (let i = 1; i <= Math.ceil(productos.length / productosPorPagina); i++) {
  const botonPagina = document.createElement('button');
  botonPagina.textContent = i;
  botonPagina.addEventListener('click', () => {
    paginaActual = i;
    mostrarPagina(paginaActual);
  });
  paginacion.appendChild(botonPagina);
}