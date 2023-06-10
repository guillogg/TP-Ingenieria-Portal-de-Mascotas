const users = [{
  nombre: "voluntario",
  dni: "123",
  telefono: "123",
  email: "asd@asd",
  password: "123",
  tipoUsuario: "voluntario"
},
{
  nombre: "representante",
  dni: "123",
  telefono: "123",
  email: "asd@asd",
  password: "123",
  tipoUsuario: "representante"
}

]; // Array para almacenar los usuarios registrados


const loginButton = document.getElementById('btn-loguearse');
const loginForm = document.getElementById('login-form');
const perfilButton = document.getElementById('btn-perfil');
const publicarButton = document.getElementById('btn-publicar');

const regOrgaButton = document.getElementById('btn-registrarOrga');

loginButton.addEventListener('click', () => {
  loginForm.classList.toggle('hide');
});


const loginButton2 = document.getElementById('login-button');
loginButton2.addEventListener('click', () => {
  const usernameInput = document.getElementById('login-username-input').value;
  const passwordInput = document.getElementById('login-password-input').value;

  const authenticatedUser = users.find(user => user.nombre === usernameInput && user.password === passwordInput);

  if (authenticatedUser) {
    loginForm.classList.toggle('hide');

      if (authenticatedUser.tipoUsuario === "representante")
        UIRepresentante();

      else
        UIMiembro();
      
      alert('bienvenido ' + usernameInput);

  } else {
    alert('Nombre o contraseña incorrectos.');
  }
});

function UIRepresentante(){
  loginButton.style.display = 'none'; // Ocultar el botón de inicio de sesión
  perfilButton.classList.remove('hide');
  regOrgaButton.classList.remove('hide');
}

function UIMiembro(){
  loginButton.style.display = 'none'; // Ocultar el botón de inicio de sesión
  perfilButton.classList.remove('hide');
  publicarButton.classList.remove('hide');
}