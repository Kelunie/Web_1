var Usuario1 = {
  nickName: "itachirr",
  email: "caleb.cordero1997@gmail.com",
  password: "123casa",
  name: "Caleb",
  lastName1: "Rodriguez",
  lastName2: "Cordero",
  age: "25",
  birthday: "04/11/1997",
};
var Usuario2 = {
  nickName: "dani420",
  email: "obando-dani@gmail.com",
  password: "casa123",
  name: "Daniel",
  lastName1: "Obando",
  lastName2: "Navarro",
  age: "18",
  birthday: "29/10/2004",
};
var usuarios = [Usuario1, Usuario2];

document.addEventListener("DOMContentLoaded", function () {
  const correoInput = document.getElementById("correo");
  const contrasenaInput = document.getElementById("contrasena");
  const iniciarBtn = document.getElementById("iniciarBtn");

  iniciarBtn.addEventListener("click", function () {
    const correo = correoInput.value;
    const contrasena = contrasenaInput.value;

    // Simulate authentication logic
    const user = usuarios.find(
      (u) => u.email === correo && u.password === contrasena
    );
    if (user) {
      if (user.email === Usuario1.email) {
        // Authentication successful
        alert("Inicio de sesión exitoso.");
        setTimeout(function () {
          window.location.href = "/Html/perfil1.html"; // Cambia esto a la ruta correcta
        }, 1000); // 2000 milisegundos (3 segundos)
      } else {
        // Authentication successful
        alert("Inicio de sesión exitoso.");
        setTimeout(function () {
          window.location.href = "/Html/perfil2.html"; // Cambia esto a la ruta correcta
        }, 1000); // 2000 milisegundos (3 segundos)
      }
    } else {
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  });
});
