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
    alert(fraseEncriptada);
}

function desencriptar() {
    var textareaValor = document.getElementById("idArea");
    var frase = textareaValor.value;
    var fraseDesencriptada = '';
    fraseDesencriptada = frase.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    alert(fraseDesencriptada);
}



