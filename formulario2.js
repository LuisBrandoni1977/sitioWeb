function ver(e){
    console.log(e);
}

function enviar(e){
    if(validar());
    return false;
}

function validar(){
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let correo = document.getElementById("correo");
let campotexto = document.frm.campotexto;
let errores = [];


let inputs = document.querySelectorAll("input,textarea,div");
 
    for (var i =0; i < inputs.length; i++) {
       inputs[i].style.border = "revert";
    }

if(nombre.value.trim() == ''){
    errores.push(" El campo Nombre debe estar Completo ");
    nombre.style.border = "2px solid red";
}else if(nombre.value.length>20){
    errores.push(" El nombre no debe superar los 20 caracteres ");
     nombre.style.border = "2px solid red";
}

if(!isNaN(nombre.value)){
    errores.push(" El Nombre no puede ser un Numero ");
     nombre.style.border = "2px solid red";
}



if(campotexto.value.length > 200){
    errores.push(" Se puede escribir hasta 200 caracteres ");
    campotexto.style.border = "2px solid red";
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
