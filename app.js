const d = document;


let numeroSecreto = 0;
let intentos = 0;
let intentosMaximos = 5;
let listaNumeros = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) { //La función 'asignarTextoElemento' tiene dos parámetros que son elementos del HTML que pueden ser editados.//

    let elementoHTML = d.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    
}

function verificarIntento() { //La función 'vedrificarIntento' obtiene el valor del input llamado 'valorUsuario' y lo compara con el numero secreto.//

    let numeroUsuario = parseInt(d.getElementById('valorUsuario').value); 
    

    console.log(`El usuario ingresó el número: ${numeroUsuario}`);
    console.log(numeroUsuario === numeroSecreto);
    console.log(`Número de intento = ${intentos}`);

    if(numeroUsuario === numeroSecreto) {

        asignarTextoElemento('p', `Has acertado el número secreto, lo logrtaste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'} `);

        d.getElementById('reiniciar').removeAttribute('disabled'); //Al acertar el número secreto se habilita el botón de 'reiniciar juego'.

    } else {

        if(numeroUsuario > numeroSecreto) {

            asignarTextoElemento('p', 'El número secreto es menor');

        } else {

            asignarTextoElemento('p', 'El número secreto es mayor');
        }
    }

    intentos ++;
    limpiarCaja(); //Por cada intento se invoca a la función 'limpiarCaja()'//

    if(intentos > intentosMaximos) {

       
        asignarTextoElemento('p', `Llegaste al límite de ${intentosMaximos} intentos posibles, el número secreto era: ${numeroSecreto}`);

        d.getElementById('reiniciar').removeAttribute('disabled');

    }

    return;
    
    

}

function limpiarCaja () { //La función 'limpiarCaja()' deja en blanco el input por cada intento realizado.//

    d.querySelector('#valorUsuario').value = '';
  
}

function generarNumeroSecreto() { //Esta función genera el número seccreto mediante un Math.random//

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(`El número generado es: ${numeroGenerado}`);
    console.log(listaNumeros);

    //Si ya se sortearon todos los número del rango de 1 a 10.

    if(listaNumeros.length == numeroMaximo) {

        asignarTextoElemento('p', 'Ya se asignó la cantidad máxima de números posibles');

    } else {

     //Si el número generado está incluido en la lista se hace una operación.

     if(listaNumeros.includes(numeroGenerado)) {

        return generarNumeroSecreto(); //Si el número generado ya existe se vuelve a invocar un nuevo numero secreto.

    } else { //Si el número generado no está incluido en la lista se agrega por el método ´push'.

        listaNumeros.push(numeroGenerado);
        return numeroGenerado;
        
    }

    }


}

function condicionesIniciales() {

    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    
    //Limpiar caja
    limpiarCaja();

    //Indicar mensajes iniciales
    //generar el número aleatorio

    //reiniciar el número de intentos
    condicionesIniciales();

    //Deshabilitar botón para reiniciar el juego
    d.querySelector('#reiniciar').setAttribute('disabled', 'true');
    

}

condicionesIniciales();


