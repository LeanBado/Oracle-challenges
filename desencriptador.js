//metodo .replace + RegEx
var botonDesencriptador = document.querySelector("#btn-desencriptar");

botonDesencriptador.addEventListener("click", function(evento){
    evento.preventDefault();

    var encriptado = document.querySelector("#input-texto").value;
    var textoDesencriptado = encriptado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u")
    document.querySelector("#msg").value = textoDesencriptado;
    let vacio = ""
    document.querySelector("#input-texto").value = vacio;
})



/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
