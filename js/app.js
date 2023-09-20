//Funcion ignorar
function ignore(elemento) {
  //Eliminar elemento mas cercano
  elemento.closest(".card-list-item").remove();
  //Asignar a variable por id
  let elementoNumeroDeConexiones = document.querySelector("#requests");
  //Asignar a variable el numero de conexiones el numero de conexiones existentes
  let numeroDeConexiones = elementoNumeroDeConexiones.innerText;
  //A la variable numero de conexiones disminuirla en 1
  numeroDeConexiones -= 1;
  //Cambiar el valor de numero de conexiones
  elementoNumeroDeConexiones.textContent = numeroDeConexiones;
}
//Funcion Aceptar
function accept(elemento) {
  //Asignar variables del elemento
  let misConexiones = document.querySelector("#myConnections");
  let imagenDeAvatar = elemento
    .closest(".card-list-item")
    .querySelector(".avatar-s");
  let nombreDeConexion = elemento
    .closest(".card-list-item")
    .querySelector("span").innerText;
  console.log(misConexiones);
  console.log(imagenDeAvatar);
  console.log(nombreDeConexion);
  misConexiones.innerHTML += `<li class="card-list-item start"><img src="${imagenDeAvatar.src}" alt="${imagenDeAvatar.alt}" class="avatar-s">${nombreDeConexion}</li>`;
  let elementoTotalDeConexiones = document.querySelector("#connections");
  let numeroDeConexiones = elementoTotalDeConexiones.innerText;
  numeroDeConexiones++;
  elementoTotalDeConexiones.innerText = numeroDeConexiones;
  ignore(elemento);
}

//Funcion Cambiar nombre

var modal = document.getElementById("modal");
var edit = document.getElementById("edit_profile");
var close = document.getElementsByClassName("close")[0];

edit.onclick = function () {
  modal.style.display = "block";
};

close.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
var inptName = document.getElementById("inpt-name");

function editar_name() {
  document.getElementById("username").innerText = inptName.value;
  inptName.value = "";
  modal.style.display = "none";
}
