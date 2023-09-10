//querySelector
const heading = document.querySelector('.heading__texto')// 0 o 1 elementos
heading.textContent = 'Nuevo Heading'
console.log(heading);
//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a')
enlaces[0].textContent = 'NuevoTextoParaEnlace';
//generar un nuevo enlace

const nuevoEnlace = document.createElement('A')

//agregar href
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar el texto

nuevoEnlace.textContent = 'Un nuevo enlace';
//agregar la calse

nuevoEnlace.classList.add('navegacion__clase');

//agragar al documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);