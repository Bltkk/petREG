document.getElementById('showRegister').onclick = function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
};
document.getElementById('cancelRegister').onclick = function() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
};
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('navLinks').style.display = 'block';
});
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('navLinks').style.display = 'block';
});