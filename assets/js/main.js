// Capturar o evento de submmit do fomulario
const form = document.querySelector('#formulario');

form.addEventListener("submit", function(event){event.preventDefault();
console.log ('Evento Previnido.');
setResultado ('Olá Mundo');
});

function setResultado(msg){
const resultado =document.querySelector('#resultado');
resultado.innerHTML = '';
const p = document.createElement('p');
p.innerHTML= 'qualquer coisa'
resultado.appendChild(p);
}