/**
 * Permite enciar un mensaje a la extensión si se ha iniciado sesión o no
 */
(function () {
  /**
   * Accede al Frame principal de la página
   */
  mainFrame = window.frames[1];
  console.log(mainFrame.name);

  mainFrame.document.addEventListener("change", () => console.log("change"));
  mainFrame.document.addEventListener("DOMContentLoaded", () =>
    console.log("Dom")
  );
  window.addEventListener("load", () => console.log("Windows"));
  mainFrame.addEventListener("load", () => console.log("mf"));
  mainFrame.document.addEventListener("load", () => console.log("mfd"));
  mainFrame.document.onreadystatechange = function () {
    if (mainFrame.document.readyState == "complete") {
      console.log("ready");
    }
  };


  let btn = mainFrame.document.getElementsByName("btnIngresar")[0];

  btn.addEventListener("click", response);
})();

function response() {
  console.log("hi otro", mainFrame.length);
  

  mainFrame.document.addEventListener("change", () => console.log("change 22"));
  mainFrame.document.addEventListener("DOMContentLoaded", () =>
    console.log("Dom 22")
  );
  window.addEventListener("load", () => console.log("Windows 22"));
  mainFrame.addEventListener("load", () => console.log("mf 22"));
  mainFrame.document.addEventListener("load", () => console.log("mfd 22"));
  mainFrame.document.onreadystatechange = function () {
    if (mainFrame.document.readyState == "complete") {
      console.log("ready 22");
    }
  };
}
