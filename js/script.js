/**
 * Script que relaciona los enventos con el Script de contenido.
 */

/**
 * Se obtiene el botón Decodificar
 */
var btnDecode = document.getElementById("btnDecode");

/**
 * Se define la función correspondiente al evento click.
 * Este debe enviar el usuario y la contraseña al script de contenido.
 * Y debe obtener la respuesta de dicha operación.
 */
btnDecode.onclick = function () {

    /**
     * Se obtiene el nombre de usuario y la contraseña registrados en el formulario.
     */ 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    /**
     * Inyecta el script de contenido a la página
     */
    chrome.tabs.executeScript({
        file: 'js/contentScript.js'
    });

    /**
     * Envia el mensaje con los datos del usuario.
     * Recibe el resultado de la operación.
     */
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
                username : username,
                password : password 
            }, 
            function (response) {
                switch(response.replication){
                    case "Done":
                        done(response);
                        break;
                    case "Done":
                        error(response);
                        break;
            }
            }
        );
    });
}

/**
 * Define el comportamiento de la extensión cuando todo es correcto.
 * @param {*} response 
 */
function done(response){
    console.log("Done");
}

/**
 * Define el comportamiento de la extensión cuando exixte un error.
 * @param {*} response 
 */
function error(response){
    console.log(response.farewell);
}








  

