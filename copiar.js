var botonCopiador = document.querySelector("#copiar");

botonCopiador.addEventListener("click", function(evento){
    evento.preventDefault();
  let contenido = document.querySelector("#texto2").value;
console.log(contenido)
  let input = document.createElement("input");
  input.value = contenido;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  input.remove();
  alert("texto copiado al portapapeles")
})

