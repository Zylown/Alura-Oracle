function encriptar() {

    var textareaValor = document.getElementById("idArea");
    var frase = textareaValor.value;
    var fraseEncriptada = '';
    for (var i = 0; i < frase.length; i++) {
        var letra = frase.charAt(i);

        if (letra === 'e') {
            fraseEncriptada += 'enter';
        } else if (letra === 'i') {
            fraseEncriptada += 'imes';
        } else if (letra === 'a') {
            fraseEncriptada += 'ai';
        } else if (letra === 'o') {
            fraseEncriptada += 'ober';
        } else if (letra === 'u') {
            fraseEncriptada += 'ufat';
        } else {
            fraseEncriptada += letra;
        }
    }
    //alert(fraseEncriptada);
    //borrartxt();
    document.getElementById("mostrarRespuesta").innerHTML = fraseEncriptada;
    mostrarBotonCopiar();
}

function mostrarBotonCopiar() {

    //var botonCopiar = document.getElementById("idCopiar");
    var botonCopiar = document.getElementById("idCopiar").removeAttribute("hidden");
    //var x = botonCopiar.getElementById("idCopiar");
    console.log(botonCopiar);
    //console.log(x);
    //botonCopiar.removeAttribute("hidden");
    //document.getElementById("div1").removeAttribute("align");
}


function desencriptar() {
    var textareaValor = document.getElementById("idArea");
    var frase = textareaValor.value;
    var fraseDesencriptada = '';
    fraseDesencriptada = frase.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    //alert(fraseDesencriptada);
    document.getElementById("txtDerecho").innerHTML = fraseDesencriptada;
}

var contenidoPredeterminado = document.getElementById("txtDerecho").innerHTML;//contenido original

function verificarTextArea() {
    var textareaValor = document.getElementById("idArea").value;// textarea
    var txtDerecho = document.getElementById("txtDerecho");// DIV
    if (textareaValor === "" || textareaValor === " ") {//si en el textarea esta vacio o un espacio
        txtDerecho.innerHTML = contenidoPredeterminado;//vuelve al contenido original
    }
}

/*function borrartxt() {//limpiar campo
    document.querySelector(".input-texto").value = '';
}*/


