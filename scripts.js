function $(id) { return document.getElementById(id); }

$('showRegister').onclick = function() {
  $('loginFormBox').style.display = 'none';
  $('registerFormBox').style.display = 'flex';
};
$('cancelRegister').onclick = function() {
  $('registerFormBox').style.display = 'none';
  $('loginFormBox').style.display = 'flex';
};
$('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Redirige a menuSesion.html después de iniciar sesión
    window.location.href = "menuSesion.html";
});
$('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Redirige a menuSesion.html después de registrar usuario
    window.location.href = "menuSesion.html";
});