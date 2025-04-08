//Carrusell fotos
let posicion = 1;
mostrarPartes(posicion);

//Cambiar la foto a la siguiente o anterior
function siguienteParte(n) {
  mostrarPartes(posicion += n);
}

//Ir a una foto seleccionada
function parteActual(n) {
  mostrarPartes(posicion = n);
}

//Función que controla el carrousel
function mostrarPartes(n) {
  let i;
  const partes = document.getElementsByClassName("carousel_imagen");
  const imganesInferior = document.getElementsByClassName("imagen");
  const texto = document.getElementById("descripcion");
  // Para hacer el bucle de si pulsas la última vuelva a la primera
  if (n > partes.length) {
    posicion = 1
  }
  if (n < 1) {
    posicion = partes.length
  }

  //Limpia todas las imagenes
  for (i = 0; i < partes.length; i++) {
    partes[i].style.display = "none";
  }

  //Limpia todos los imganesInferior que esten activos
  for (i = 0; i < imganesInferior.length; i++) {
    imganesInferior[i].className = imganesInferior[i].className.replace(" active", "");
  }

  //Se le resta menos 1 porque la colección empieza por cero
  partes[posicion - 1].style.display = "block";
  imganesInferior[posicion - 1].className += " active";
  texto.innerHTML = imganesInferior[posicion - 1].alt;
}



// Obtener el botón para subir
const btnSubir = document.getElementById('subir');
const carritoCompraInferior = document.getElementById('carrito');

// Detectar el desplazamiento de la página
window.onscroll = function () {
  // Cuando el usuario haya bajado 100px desde el top, mostrar el botón
  if (document.documentElement.scrollTop > 100) {
    btnSubir.style.display = "block"; // Mostrar el ícono
  } else {
    btnSubir.style.display = "none"; // Ocultar el ícono
  }
};

// Función para hacer scroll suave hacia arriba
btnSubir.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Desplazamiento suave
  });
});















