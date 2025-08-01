let amigos = [];
//Funcion para generar un numero aleatorio entero
function generarNumeroAleatorio() {
	return Math.floor(Math.random()*10);
}

function asignarTextoElemento(elemento, texto) {
	let elementoHTML = document.getElementById(elemento);
	elementoHTML.innerHTML = texto;
	return;
}
//Funcion para limpiar el input
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

//Funcion para autoenfoque automatico en el input
function autoEnfoque(){
    document.getElementById('amigo').focus();
}

function agregarAmigo() {
    let entrada = document.getElementById('amigo').value;
    if (entrada === '') {
        alert("¡El campo no puede estar vacío!");
    } else if (amigos.includes(entrada)) {
        alert("¡Ese amigo ya fue agregado!");
    } else {
        amigos.push(entrada);
        actualizarListaAmigos(); 
    }
    limpiarCaja();
    autoEnfoque();
}

function actualizarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; 
    amigos.forEach(function(amigo) {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigo;
        listaHTML.appendChild(nuevoElemento);
    });
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("¡Agregá al menos un amigo antes de hacer el sorteo!");
        return;
    }
    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroAleatorio];
    asignarTextoElemento('resultado', `El amigo sorteado es: ${amigoSorteado}`);
}

autoEnfoque();