let numSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; //Array que va almacenar numeros que ya hayan sido sorteados
let numeroMaximo = 10;

console.log(numSecreto);

//2. Tambien de esta manera puedo reducir codigo y tambien asignar funciones
function asignarTextoElemento(elemento, texto){ //aqui le paso variables a la funcion
    let elementoHTML = document.querySelector(elemento); //querySelector interactuo con el DOM 
    elementoHTML.innerHTML = texto;
    return;
}

//declarando la funcion que use en el html
//input es la caja de texto
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numSecreto){
        asignarTextoElemento('p', `Acertaste el Numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}


function generarNumSecreto() { //variable de alcance local de bloque
    let numGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
    //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numGenerado)){
            return generarNumSecreto();
        }else {
            listaNumerosSorteados.push(numGenerado);
            return numGenerado;
        }
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento ('h1', 'Juego del numero Secreto');
    asignarTextoElemento ('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numSecreto = generarNumSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de interv de numeros
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reinicar').setAttribute('disabled','true');

}


condicionesIniciales();

