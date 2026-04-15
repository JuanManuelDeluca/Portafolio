const contenedor = document.getElementById("lista-proyectos");

proyectos.forEach(p => {
  const div = document.createElement("div");
  div.className = "proyecto";
  div.onclick = () => window.open(p.link1, "_blank");

  const tagsHTML = p.tecnologias
    ? `<div class="proyecto-tags">${p.tecnologias.map(t => `<span class="proyecto-tag">${t}</span>`).join('')}</div>`
    : '';

  div.innerHTML = `
    <h3>${p.titulo}</h3>
    <p>${p.descripcion}</p>
    ${tagsHTML}
  `;

  contenedor.appendChild(div);
});
