//metodo .replace + RegEx

var encriptado = "lenteraindrober jufatentergai ai lai penterlobertai cobern aimimesgobers "
var textoDesencriptado = encriptado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u")
console.log(textoDesencriptado);
/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

