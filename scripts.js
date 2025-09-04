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
    $('loginForm').style.display = 'none';
    $('navLinks').style.display = 'block';
});
$('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    $('registerForm').style.display = 'none';
    $('navLinks').style.display = 'block';
});