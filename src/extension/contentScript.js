/**
 * El Script de contenido es un script que se ejecuta en el
 * contexto de la página web, en este caso el vortal unipamplona.
 */

/**
 * Accede al Frame principal de la página
 */
mainFrame = window.frames[1];
console.log(mainFrame.name);

/**
 * Determina las claves y valores correspondientes a cada letra de la tabla.
 * @returns {*} dicc: Diccionario con las claves y valores.
 */
function search() {
  const itemsCount = 37;
  var dicc = [];
  for (var i = 0; i < itemsCount; i++) {
    textInput = mainFrame.document.getElementsByClassName(
      "fondo_celda_5 text_letras"
    )[i].innerHTML;
    numberImput = mainFrame.document.getElementsByClassName(
      "fondo_celda_3 text_num"
    )[i].innerHTML;
    dicc[textInput] = numberImput;
  }
  return dicc;
}

/**
 * Decodifica la contraseña del usuario con los valores de la tabla.
 * @param {*} password contraseña del usuario
 * @return {*} decodedPassword Contraseña decodificada
 */
function decode(password) {
  var dicc = search();
  var passwordSplit = password.split("");
  var decodedPassword = [];

  for (var i = 0; i < passwordSplit.length; i++) {
    var nombre = passwordSplit[i].toUpperCase();
    decodedPassword[i] = dicc[nombre];
  }
  return decodedPassword.join("");
}

/**
 * Sobreescribe los datos introducidos por el usuario en el formulario
 * principal del Vortal. Finaliza activando el evento del botón
 * ingresar.
 * @param {*} user Nombre de usuario
 * @param {*} password Contraseña del usuario
 */
function overwriteDocument(user, password) {
  mainFrame.document.getElementById("usuario").value = user;
  mainFrame.document.getElementById("password").value = password;
  mainFrame.document.getElementsByName("btnIngresar")[0].click();

  // Sirve para comprobar si se ha iniciado sesión correctamente
  mainFrame.document.addEventListener("change", () => console.log("change"));
  mainFrame.document.addEventListener("DOMContentLoaded", () =>
    console.log("Dom")
  );
  window.addEventListener("load", () => console.log("Windows"));
  mainFrame.addEventListener("load", () => console.log("mf"));
  mainFrame.document.addEventListener("load", () => console.log("mfd"));
  mainFrame.document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      console.log("ready");
    }
  };
  // setTimeout(successfullyLoggedInPage, 5000);

  return successfullyLoggedInPage();
}

/**
 * Comprueba si se ha iniciado sesión correctamente
 */
async function successfullyLoggedInPage() {
  console.log(
    "Calendario ",
    mainFrame.document.getElementsByName("calendario")[0]
  );

  console.log("length", mainFrame.length);
  return mainFrame.length === 2;
}

/**
 * Obtiene una cookie a partir de su nombre
 * @param {*} name
 * @returns
 */
function getCookieItem(name) {
  let nameEQ = name + "=";
  let ca = mainFrame.document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/**
 * Oyente de mensajes enviados desde la extensión.
 * Inicia el tratamiento y inyección de los datos del usuario en la página.
 */
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
  var decodedPassword = decode(request.password);
  var successfullyLoggedIn = overwriteDocument(
    request.username,
    decodedPassword
  );
  console.log("successfullyLoggedIn", successfullyLoggedIn);

  if (successfullyLoggedIn) {
    sendResponse({
      replication: "Done",
    });
  } else {
    sendResponse({
      replication: "Error",
    });
  }
});

