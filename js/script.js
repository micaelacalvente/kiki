let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

//fa-times es el icono X y active activa el menu de nav modo mobile

/* VALIDACION DEL FORMULARIO DE CONTACTO */

var nameError = document.getElementById('name-error');
var telError = document.getElementById('tel-error');
var emailError = document.getElementById('email-error');
var guestError = document.getElementById('guest-error');
var submitError = document.getElementById('submit-error');
var submitSuccess = document.getElementById('submit-success');

/* solo valida un nombre completo */
function validateName(){
  var name = document.getElementById('contact-name').value;
  if(name.length == 0){
    nameError.innerHTML = 'Por favor ingrese un nombre';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Por favor ingrese un nombre completo';
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></id>';
  return true;
}
/* solo valida un numero de 10 digitos */
function validateTel(){
  var tel = document.getElementById('contact-tel').value;
  if(tel.length == 0){
    telError.innerHTML = 'Por favor ingrese su n° de telefono';
    return false;
  }
  if(!tel.match(/^[0-9]{10}$/)){
    telError.innerHTML = 'Por favor ingrese un n° de telefono valido';
    return false;
  }
  telError.innerHTML = '<i class="fas fa-check-circle"></id>';
  return true;
}

/* solo valida un email escrito propiamente ej: user@gmail.com */
function validateEmail(){
  var email = document.getElementById('contact-email').value;
  if(email.length == 0){
    emailError.innerHTML = 'Por favor ingrese su email';
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Por favor ingrese un email valido';
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></id>';
  return true;
}

/* solo valida invitados escritos con numeros */
function validateGuest(){
  var guest = document.getElementById('contact-guest').value;
  if(guest.length == 0){
    guestError.innerHTML = 'Por favor ingrese su n° de invitados';
    return false;
  }
  /* if(!guest.match(/^[0-9]{20}$/)){
    guestError.innerHTML = 'Por favor ingrese su n° de invitados';
    return false;
  } */ /*permiter hasta 20 invitados */
  guestError.innerHTML = '<i class="fas fa-check-circle"></id>';
  return true;
}
 /* validacion en el boton reservar */
function validateForm(){
  if(!validateName() || !validateTel() || !validateEmail() || !validateGuest()){
    submitError.style.display = 'block';
    submitError.innerHTML = "Por favor ingrese correctamente sus datos"
    setTimeout(function(){submitError.style.display = 'none';}, 3000);
    return false;
  }
  submitSuccess.innerHTML = "Su reserva se guardo con exito!";
  submitSuccess.style.display = 'block';
  return true;
}
/* la funcion timeout lo que hace es que una vez que pasaron 3 seg, el msj de error en submit desaparezca */