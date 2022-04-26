var botonCopiador = document.querySelector("#btn-copy");

botonCopiador.addEventListener("click", function(evento){
    evento.preventDefault();
  let contenido = document.querySelector("#msg").value;

  let input = document.createElement("input");
  input.value = contenido;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  input.remove();
  alert("copiado")
})

