/*Nodos de Formulario de Registro*/
let formulario = document.querySelector('#formulario');
formulario.innerHTML = "<h2>Sé un nuevo LoVe Ghibli</h2>";
const fragment = document.createDocumentFragment();

//Creando el div contenedor con id="contenedor" class="contenedor"
const div = document.createElement('div');
div.classList.add("contenedor");
div.id = "contenedor";

//Creando p"
const p2 = document.createElement("p");
p2.textContent = "¿Quieres ver LoveGhibli ya? Ingresa tus datos para crear una cuenta, disfrutaras detodo el contenido Ghibli";
const p3 = document.createElement("p");
p3.textContent = "¡Unos pasos más y listo!";

//Creando los div nombre con class="input-contenedor"
const divNombre = document.createElement("div");
divNombre.classList.add("input-contenedor");
divNombre.id = "input-nombre";
//Creando <i class="fas fa-user icon"></i>
const iNombre = document.createElement("i");
iNombre.classList.add("fas");
iNombre.classList.add("fa-user");
iNombre.classList.add("icon");

//Creando los div correo con class="input-contenedor"
const divCorreo = document.createElement("div");
divCorreo.classList.add("input-contenedor");
divCorreo.id = "input-correo";
//Creando <i class="fas fa-envelope icon"></i>
const iCorreo = document.createElement("i");
iCorreo.classList.add("fas");
iCorreo.classList.add("fa-envelope");
iCorreo.classList.add("icon");

//Creando los div contrasena con class="input-contenedor"
const divContrasena = document.createElement("div");
divContrasena.classList.add("input-contenedor");
divContrasena.id = "input-contrasena";
//Creando <i class="fas fa-key icon"></i>
const iContrasena = document.createElement("i");
iContrasena.classList.add("fas");
iContrasena.classList.add("fa-key");
iContrasena.classList.add("icon");

//Creando inputNombre"
const inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.classList.add("formulario__input");
inputNombre.id = "nombre";
inputNombre.name = "nombre";
inputNombre.placeholder = "Nombre Completo";
//Creando inputCorreo
const inputCorreo = document.createElement("input");
inputCorreo.type = "text";
inputCorreo.classList.add("formulario__input");
inputCorreo.id = "correo";
inputCorreo.name = "correo";
inputCorreo.placeholder = "Correo Electronico";
//Creando inputContrasena"
const inputContrasena = document.createElement("input");
inputContrasena.type = "password";
inputContrasena.classList.add("formulario__input");
inputContrasena.id = "contrasena";
inputContrasena.name = "contrasena";
inputContrasena.placeholder = "Contraseña";
//Creando inputBoton"
const inputBoton = document.createElement("input");
inputBoton.type = "submit";
inputBoton.value = "Registrate";
inputBoton.classList.add("button");

//Creando p"
const p = document.createElement("p");
p.textContent = "¿Ya tienes una cuenta?";

//Agregamos nodo i a div
divNombre.appendChild(iNombre);
divCorreo.appendChild(iCorreo);
divContrasena.appendChild(iContrasena);

//Agregamos nodo input a div
divNombre.appendChild(inputNombre);
divCorreo.appendChild(inputCorreo);
divContrasena.appendChild(inputContrasena);

//Agregamos nodo hijos a div
div.appendChild(p2);
div.appendChild(p3);
div.appendChild(divNombre);
div.appendChild(divCorreo);
div.appendChild(divContrasena);
div.appendChild(inputBoton);

//Agregamos li al fragmente
fragment.appendChild(div);



formulario.appendChild(fragment);

