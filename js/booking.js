let formContainer = document.getElementById("formContainer");

if (!localStorage.getItem("bookingData")) {
  formContainer.innerHTML = `
       <form id="booking">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <button type="submit">Enviar</button>
    </form>
    `;

  document
    .getElementById("booking")
    .addEventListener("submit", function (event) {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let bookingData = {
        name: name,
        email: email,
      };
      localStorage.setItem("bookingData", JSON.stringify(bookingData));
      alert("Reserva realizada.");
      location.reload();
    });
} else {
    
  let booking = JSON.parse(localStorage.getItem("bookingData"));
  formContainer.innerHTML = `
      <h3>Nombre: ${booking.name}</h3>
      <h3>Email:  ${booking.email}</h3>
    <button type="button" id="btnDelete">
      ELIMINAR RESERVA
  </button>
  `;
}

console.log(JSON.parse(localStorage.getItem("bookingData")));

document
  .getElementById("btnDelete")
  .addEventListener("click", function (event) {
    localStorage.removeItem("bookingData");
    alert("Reserva eliminada.");
    location.reload();
  });