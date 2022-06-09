

function ver(){
    console.log();
}

/*function enviar(){
    if(validar());
    return false;
}*/
var enviar = document.getElementById("enviar");
enviar.onsubmit = () => onSubmit()

function onSubmit() {

    

    
    if (validar()) {
        errores.push(datos)
        console.log(errores)
        formulario.reset()
    }
    return false;
}

function validar(){

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let correo = document.getElementById("correo");
let campotexto = document.getElementById("campotexto");
let er = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
let errores = [];

let nombre1 = nombre.value;
let apellido1 = apellido.value;
let telefono1 = +telefono.value;
let correo1 = correo.value;


let inputs = document.querySelectorAll("input,textarea");
 
    for (var i =0; i < inputs.length; i++) {
       inputs[i].style.border = "revert";
    }

if(nombre1.value != ""){
    errores.push(" El campo Nombre debe estar Completo ");
    nombre.style.border = "2px solid red";
}else if(nombre.value.length>20){
    errores.push(" El nombre no debe superar los 20 caracteres ");
     nombre.style.border = "2px solid red";
}

if(!isNaN(nombre1.value)){
    errores.push(" El Nombre no puede ser un Numero ");
     nombre.style.border = "2px solid red";
}

if(isNaN(telefono1.value)){
  errores.push(" El Telefono tiene que ser un Numero ");
     nombre.style.border = "2px solid red";  
}

if(campotexto.value.length > 200){
    errores.push(" Se puede escribir hasta 200 caracteres ");
    campotexto.style.border = "2px solid red";
}

if(!er.test(email1.value)) {
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
