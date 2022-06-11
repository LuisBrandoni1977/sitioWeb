

function ver(){
    console.log();
}

var enviar = document.getElementById("enviar");
enviar.onsubmit = () => onSubmit()

function onSubmit() {

if(validar()){
let p = document.createElement("p");
    p.innerHTML=`Todos los Campos Correctos el Formulario Se Envio. `;
    document.getElementById("enviado").appendChild(p)
    enviar.reset();
}
    return false;
}

function validar(){

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let campotexto = document.getElementById("campotexto");
let er = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
let errores = [];

let inputs = document.querySelectorAll("input,textarea");
 
    for (var i =0; i < inputs.length; i++) {
       inputs[i].style.border = "revert";
    }

if(nombre.value.trim() == ''){
    errores.push(" El campo Nombre debe estar Completo ");
    nombre.style.border = "2px solid red";
}else if(nombre.value.length>20){
    errores.push(" El Nombre no debe superar los 20 caracteres ");
     nombre.style.border = "2px solid red";
}
if(apellido.value.trim() == ''){
    errores.push(" El campo Apellido debe estar Completo ");
    apellido.style.border = "2px solid red";
}else if(apellido.value.length>20){
    errores.push(" El Apellido no debe superar los 20 caracteres ");
     apellido.style.border = "2px solid red";
}

if(telefono.value.trim() == ''){
    errores.push(" El campo Telefono debe estar Completo ");
    telefono.style.border = "2px solid red";
}else if(!isNaN(telefono.value)){
  errores.push(" El Telefono tiene que ser un Numero ");
     telefono.style.border = "2px solid red";  
}

if(campotexto.value.length > 200){
    errores.push(" Se puede escribir hasta 200 caracteres ");
    campotexto.style.border = "2px solid red";
}

if(email.value.trim() == ''){
    errores.push(" El campo Email debe estar Completo ");
    email.style.border = "2px solid red";
}else if(!er.test(email.value)) {
   errores.push(" Debe ser un email valido ");
   email.style.border = "2px solid red";
}

let lista_errores_m = document.querySelector("#lista_errores");
lista_errores_m.innerHTML = "";
errores.forEach(e => {
    let li = document.createElement("li");
    li.innerHTML = e;
    lista_errores_m.appendChild(li); 
    console.log(e);  
});
return errores.length == 0;

}
