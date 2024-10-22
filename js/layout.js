let header = document.getElementById("header");

header.innerHTML = `
  <div class="header_in">
    <nav>
      <a href="./index.html">Inicio</a>
      <a href="./menu.html">Menú</a>
   
      <a href="./contact.html">Contacto</a>
    </nav>
    <div class="logo">
      <a href="./index.html">
        <img src="./imagenes/lympng.png" alt="LYM Logo" />
      </a>
    </div>
  </div>
`;
// Crear una nueva etiqueta <link>
let link = document.createElement("link");
link.rel = "stylesheet"; // Definir el tipo de relación
link.href = "./css/menu.css"; // Ruta al archivo CSS

// Agregar la etiqueta <link> al <head>
document.head.appendChild(link);




let footer = document.getElementById("footer");

footer.innerHTML = `

      <div class="social-links">
        <a href="https://www.instagram.com/" target="_blank" title="Instagram"
          ><i class="fa fa-instagram" style="font-size: 36px"></i
        ></a>
        <a href="https://www.linkedin.com/" target="_blank" title="LinkedIn"
          ><i class="fa fa-linkedin" style="font-size: 36px"></i
        ></a>
      </div>
      <p style="  color: black;
">Seguinos en nuestras redes!</p>
`