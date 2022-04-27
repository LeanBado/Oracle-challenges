//metodo .replace + RegEx
var botonDesencriptador = document.querySelector("#btn-desencriptar");

botonDesencriptador.addEventListener("click", function(evento){
    evento.preventDefault();

    var encriptado = document.querySelector(".text-input").value.toLowerCase();
    var textoDesencriptado = encriptado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u")
    document.querySelector("#texto2").value = textoDesencriptado;
    let vacio = ""
    document.querySelector(".text-input").value = vacio;
    document.querySelector("#imgDer").style.display = "none";
    document.querySelector("#texto").style.display = "none";
    document.querySelector("#copiar").style.display = "show";
    document.querySelector("#copiar").style.display = "inherit";
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
