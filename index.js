let numeroNuevo = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 0;
let maximoDeIntentos = 2;


window.addEventListener('ready', seleccionarNumeroMaximo());

function seleccionarNumeroMaximo() {
    let numero = prompt('Dame un numero entre el 1 y el 100');
    numeroMaximo = numero;
}

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function validarIntento() {

    let numeroUsuario = parseInt(document.getElementById('valor-usuario').value);

        if (numeroUsuario === numeroNuevo) {
            
            asignarTexto('p', `Acertaste, el número secreto es: ${numeroNuevo}. Lo hiciste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);

        } else if (intentos > maximoDeIntentos) {
            asignarTexto('p', `Llegaste al número máximo de ${maximoDeIntentos + 1} intentos. El número secreto es ${numeroNuevo}`);
            
        } else {
            if (numeroUsuario > numeroNuevo) {
                asignarTexto('p', 'El número secreto es menor');
            } else {
                asignarTexto('p', 'El número secreto es mayor');
            }
            
            intentos++;
            limpiarCaja();

        }
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }
    function limpiarCaja() {
    document.querySelector('#valor-usuario').value = '';

}

function generarNumeroSecreto() {
    let numeroNuevo = Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTexto('p', 'Ya se sortearon todos los números posibles')
    } else {
        if (listaNumerosSorteados.includes(numeroNuevo)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroNuevo);
            return numeroNuevo;
        }
    }
}

function condicionesIniciales() {
    asignarTexto('h1', 'Adivina el número!');
    asignarTexto('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroNuevo = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    seleccionarNumeroMaximo();
    condicionesIniciales();
    limpiarCaja();
    document.querySelector('#reiniciar');
}

condicionesIniciales();

