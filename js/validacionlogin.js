const enviar = document.getElementById('enviar');

const validación = (e) => {
  e.preventDefault();
  const direcciónEmail = document.getElementById('email');
  const NombrePassword= document.getElementById('password');

  if (email.value === "") {
    alert("Por favor, escribe tu nombre de usuario.");
    email.focus();
    return false;
  }
  if (password.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    password.focus();
    return false;
  }
  return true;
}

submitBtn.addEventListener('click', validate);