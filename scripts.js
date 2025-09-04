function $(id) {
    return document.getElementById(id);
}

$('showRegister').onclick = function() {
    $('loginForm').style.display = 'none';
    $('registerForm').style.display = 'block';
};
$('cancelRegister').onclick = function() {
    $('registerForm').style.display = 'none';
    $('loginForm').style.display = 'block';
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