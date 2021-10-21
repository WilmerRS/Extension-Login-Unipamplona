/*
 *
 * Este script de contenido permite especificar que el CampusTI
 * abre e una nueva pestaña, dentro de la misma ventana.
 *  */

(() => {
  const li = document.getElementsByClassName("ico_transacciones");
  const a = document.createElement("a");
  a.href =  "http://hermesoft.unipamplona.edu.co";
  li.appendChild(a);
  const keyLink = li[0].children[0];
  const onclick = `window.open('http://hermesoft.unipamplona.edu.co/unipamplona/hermesoft/vortal/iniciarSesion.jsp', "_blank")`;
  keyLink.href = "http://hermesoft.unipamplona.edu.co";
  keyLink.onclick = onclick;
  keyLink.setAttribute("onclick", onclick);
  /* keyLink.removeAttribute("href");
  keyLink.addEventListener("click", () => {
    window.open(
      "http://hermesoft.unipamplona.edu.co/unipamplona/hermesoft/vortal/iniciarSesion.jsp",
      "_blank"
    );
    setTimeout(() => {
      console.log(window);
    }, 4000);
  }); */
})();
