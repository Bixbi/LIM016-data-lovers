/*Nodos de Formulario de Registro*/
let formulario = document.querySelector('#formulario');
formulario.innerHTML = "<h2>Inicia Sesión</h2>";
const fragment = document.createDocumentFragment();

//Creando el div contenedor con id="contenedor" class="contenedor"
const div = document.createElement('div');
div.classList.add("contenedor");
div.id = "contenedor";

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

//Creando Check
const inputCheck = document.createElement("input");
inputCheck.type = "checkbox";
inputCheck.id = "cbox1";
inputCheck.value = "recuerdame";
//Creando label
const labelR= document.createElement("label");
labelR.for = "cbox1";
labelR.textContent = "Recuérdame";

//Creando p"
const p = document.createElement("p");
p.textContent = "¿Primera vez en LoveGhibli?";

//Creando a
const a = document.createElement("a");
a.classList.add("link");
a.href = "registro.html";
a.textContent = "    Suscribete ya."
p.appendChild(a);

//Agregamos nodo i a div
divCorreo.appendChild(iCorreo);
divContrasena.appendChild(iContrasena);

//Agregamos nodo input a div
divCorreo.appendChild(inputCorreo);
divContrasena.appendChild(inputContrasena);

//Agregamos nodo hijos a div
div.appendChild(divCorreo);
div.appendChild(divContrasena);
div.appendChild(inputBoton);
div.appendChild(inputCheck);
div.appendChild(labelR);
div.appendChild(p);

//Agregamos li al fragmente
fragment.appendChild(div);

formulario.appendChild(fragment);


/*<img src="./img/login.jpeg" width="100%">*/
