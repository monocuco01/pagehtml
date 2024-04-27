const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const usuariosRegistrados = [];
let usuariosConSesionIniciada = [];

function registrarUsuario(usuario, correo, contraseña) {
  const usuarioExistente = usuariosRegistrados.find(
    (u) => u.usuario === usuario || u.correo === correo
  );

  if (usuarioExistente) {
    alert("El usuario ya está registrado.");
    return;
  }

  const nuevoUsuario = { usuario, correo, contraseña };
  usuariosRegistrados.push(nuevoUsuario);
  alert("Usuario registrado con éxito: " + JSON.stringify(nuevoUsuario));
}

function iniciarSesion(usuario, contraseña) {
  const usuarioRegistrado = usuariosRegistrados.find(
    (u) => u.usuario === usuario && u.contraseña === contraseña
  );

  if (usuarioRegistrado) {
    usuariosConSesionIniciada.push(usuarioRegistrado);
    alert("Sesión iniciada para: " + usuarioRegistrado.usuario);
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

function cerrarSesion() {
  usuariosConSesionIniciada = [];
}

window.addEventListener("beforeunload", () => {
  cerrarSesion();
});

const signUpForm = document.querySelector(".sign-up-form");

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = this.querySelector('input[type="text"]').value;
  const correo = this.querySelector('input[type="email"]').value;
  const contraseña = this.querySelector('input[type="password"]').value;

  registrarUsuario(usuario, correo, contraseña);
});
