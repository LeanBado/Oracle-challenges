//metodo loop
var botonEncriptador = document.querySelector("#btn-encriptar");
botonEncriptador.addEventListener("click", function(evento){
    evento.preventDefault();

    let texto = document.querySelector("#input-texto").value;
    let textoArray = texto.split("");
    var letras = [];

for(var i = 0; i < textoArray.length; i++){

    if(textoArray[i] == "e"){
        letras.push("enter");
    } else if (textoArray[i] == "i"){
        letras.push("imes");
    } else if (textoArray[i] == "a"){
        letras.push("ai");
    } else if (textoArray[i] == "o"){
        letras.push("ober");
    } else if (textoArray[i] == "u"){
        letras.push("ufat");
    } else {
        letras.push(textoArray[i])
    }
    var encriptado = letras.join("");
}
    let vacio = ""
document.querySelector("#msg").value = encriptado;
document.querySelector("#input-texto").value = vacio;
})


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/


