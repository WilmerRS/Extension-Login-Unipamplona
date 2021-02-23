/**
 * El Script de contenido es un script que se ejecuta en el 
 * contexto de la página web, en este caso el vortal unipamplona.
 */

/**
 * Accede al Frame principal de la página
 */
mainFrame = window.frames[1];

/**
 * Determina las claves y valores correspondientes a cada letra de la tabla.
 * @returns {*} dicc: Diccionario con las claves y valores.
 */
function search() {
    const itemsCount = 37;
    var dicc = [];
    for (var i = 0; i < itemsCount; i++) {
        textInput = mainFrame.document.getElementsByClassName("fondo_celda_5 text_letras")[i].innerHTML;
        numberImput = mainFrame.document.getElementsByClassName("fondo_celda_3 text_num")[i].innerHTML;
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
    var passwordSplit = password.split('');
    var decodedPassword = [];
 
    for (var i=0; i < passwordSplit.length; i++) {
        var nombre = passwordSplit[i].toUpperCase();
        decodedPassword[i] = dicc[nombre];
    }
    return decodedPassword.join('');
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
    return mainFrame.document.getElementsByName("topFrame");
}

/**
 * Oyente de mensajes enviados desde la extensión.
 * Inicia el tratamiento y inyección de los datos del usuario en la página.
 */
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var decodedPassword = decode(request.password);
        var resultSession = overwriteDocument(request.username, decodedPassword);

        // Si se ha iniciado sesión correctamente
        if (resultSession != null || resultSession != undefined) {
            sendResponse({
                replication: "Done", 
                username: request.username, 
                password: request.password,
                rememberCheck: request.rememberCheck
            });
        } else {
            sendResponse({
                replication: "Error", 
                username: request.username, 
                password: request.password,
                rememberCheck: request.rememberCheck
            }); 
        }
    }
);

