function $(id) { return document.getElementById(id); }

$('showRegister').onclick = function() {
  $('loginFormBox').style.display = 'none';
  $('registerFormBox').style.display = 'flex';
};
$('cancelRegister').onclick = function() {
  $('registerFormBox').style.display = 'none';
  $('loginFormBox').style.display = 'flex';
};

// Función para validar correo electrónico
function esCorreoValido(correo) {
  // Expresión regular básica para validar email
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

// Validación para login
$('loginForm').addEventListener('submit', function(e) {
  const usuario = $('usuario').value;
  const password = $('password').value;
  if (!esCorreoValido(usuario)) {
    alert('El usuario debe ser un correo electrónico válido.');
    $('usuario').focus();
    e.preventDefault();
    return false;
  }
  if (password.length < 4) {
    alert('La contraseña debe tener al menos 4 caracteres por tu seguridad.');
    $('password').focus();
    e.preventDefault();
    return false;
  }
  window.location.href = "menuSesion.html";
  e.preventDefault();
});

// Validación para registro
$('registerForm').addEventListener('submit', function(e) {
  const usuario = $('newUsuario').value;
  const password = $('newPassword').value;
  if (!esCorreoValido(usuario)) {
    alert('El usuario debe ser un correo electrónico válido.');
    $('newUsuario').focus();
    e.preventDefault();
    return false;
  }
  if (password.length < 4) {
    alert('La contraseña debe tener al menos 4 caracteres por tu seguridad.');
    $('newPassword').focus();
    e.preventDefault();
    return false;
  }
  window.location.href = "menuSesion.html";
  e.preventDefault();
});
// Validación para registro de mascottas
document.addEventListener('DOMContentLoaded', function() {
  const form = $('formRegistroMascota');
  form.addEventListener('submit', function(e) {
    const nombre = $('nombreMascota').value.trim();
    const tipo = $('tipoMascota').value;
    const edad = $('edadMascota').value;
    const vacunas = $('vacunasMascota').value.trim();
    const castrada = $('castradaMascota').value;
    const descripcion = $('descripcionMascota').value.trim();

    if (nombre.length < 2) {
      alert('El nombre de la mascota debe tener al menos 2 caracteres.');
      $('nombreMascota').focus();
      e.preventDefault();
      return false;
    }
    if (!tipo) {
      alert('Selecciona el tipo de mascota.');
      $('tipoMascota').focus();
      e.preventDefault();
      return false;
    }
    if (!edad || isNaN(edad) || Number(edad) < 0) {
      alert('Ingresa una edad válida.');
      $('edadMascota').focus();
      e.preventDefault();
      return false;
    }
    if (!vacunas) {
      alert('Por favor, indica las vacunas que tiene la mascota.');
      $('vacunasMascota').focus();
      e.preventDefault();
      return false;
    }
    if (!castrada) {
      alert('Indica si la mascota está castrada.');
      $('castradaMascota').focus();
      e.preventDefault();
      return false;
    }
    // Puedes agregar más validaciones si lo necesitas
  });
});
