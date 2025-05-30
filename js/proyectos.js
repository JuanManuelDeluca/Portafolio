const contenedor = document.getElementById("lista-proyectos");

proyectos.forEach(p => {
  const div = document.createElement("div");
  div.className = "proyecto";

  // Hacer clic en todo el div redirige al link
  div.onclick = () => {
    window.open(p.link1, "_blank");
  };

  div.innerHTML = `
    <h3>${p.titulo}</h3>
    <p>${p.descripcion}</p>
  `;

  contenedor.appendChild(div);
});
