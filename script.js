var ck_name = /^[A-Za-z0-9 ]{3,20}$/;
var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i 
var ck_username = /^[A-Za-z0-9_]{1,20}$/;
var ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;


function validate(form){
var name = form.fname.value;
 var email = form.femail.value;
 var username = form.fusername.value;
 var password = form.fpassword.value;
 var gender = form.fgender.value;
  
  
 var errors = [];
 
 if (!ck_name.test(name)) {
  errors[errors.length] = "Escribe tu nombre válido.";
 }
  
 if (!ck_email.test(email)) {
  errors[errors.length] = "Debes ingresar una dirección de correo electrónico válida.";
 }
 if (!ck_username.test(username)) {
  errors[errors.length] = "Tu nombre de usuario deve ser válido sin carácter especial.";
 }

 if (!ck_password.test(password)) {
  errors[errors.length] = "Debe ingresar una contraseña válida de 6 caracteres como mínimo.";
 }
 if (gender==0) {
  errors[errors.length] = "Seleccione género";
 }
 
 
 if (errors.length > 0) {
  reportErrors(errors);
  return false;
 }
 
 return true;
}

function reportErrors(errors){
 var msg = "Porfavor ingrese datos válidos...\n";
 for (var i = 0; i<errors.length; i++) {
  var numError = i + 1;
  msg += "\n" + numError + ". " + errors[i];
 }
 alert(msg);
}
/* Comentario */
// En el código JavaScript se definen las expresiones regulares que validan los campos del formulario mediante el control por IF que llama a una función que reporta los errores mediante un alert.
