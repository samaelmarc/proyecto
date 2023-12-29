const enviar = document.getElementById('btn-enviar');

const validación = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('usuario');
  const direcciónEmail = document.getElementById('email');
  const direcciónAsunto = document.getElementById('asunto');
  const direcciónMensaje = document.getElementById('mensaje');
  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre de usuario.");
    usuario.focus();
    return false;
  }
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }
  if (asunto.value === "") {
    alert("Por favor, escribe el asunto");
    asunto.focus();
    return false;
  }
  if (mensaje.value === "") {
    alert("Por favor, escribe el mensaje");
    mensaje.focus();
    return false;
  }
  return true;
}

submitBtn.addEventListener('click', validate);