/**
 * Script que relaciona los enventos con el Script de contenido.
 */

const VORTAL_USERNAME= "VORTAL_USERNAME_UNIPAMPLONA";
const VORTAL_PASSWORD= "VORTAL_PASSWORD_UNIPAMPLONA";

/**
 * Se obtiene el botón Decodificar
 */
//var btnDecode = document.getElementById("btnDecode");

var btnDeleteUser = document.getElementById("btnDeleteUser");

/**
 * Objeto de formulario de inicio de sesión
 */
var form = document.getElementById('signup');


/**
 * Se define la función correspondiente al evento click.
 * Este debe enviar el usuario y la contraseña al script de contenido.
 * Y debe obtener la respuesta de dicha operación.
 */
form.addEventListener('submit', event=> {
    event.preventDefault();
  
    /**
     * Se obtiene el nombre de usuario y la contraseña registrados en el formulario.
     */
    var username = document.getElementById("username").value;
    var password = document.getElementById("current-password").value;

    /**
     * Se obtiene el valor booleano correspondiete al deseo de guadar los datos de usuario
     */
    var rememberCheck = document.getElementById("rememberCheck").checked;

    /**
     * Inyecta el script de contenido a la página
     */
    chrome.tabs.executeScript({
        file: "js/contentScript.js",
    });

    /**
     * Envia el mensaje con los datos del usuario.
     * Recibe el resultado de la operación.
     */
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                username: username,
                password: password,
                rememberCheck: rememberCheck
            },
            function (response) {
                try {
                    switch (response.replication) {
                        case "Done":
                            done(response);
                            break;
                        case "Error":
                            error(response);
                            break;
                    }
                } catch (error) {
                    console.log("Se ha generado un error. ",error)
                }
            }
        );
    });
});

/**
 * Se define la función correspondiente al evento click.
 * Permite eliminar el usaurio registrado en el localStorage.
 */
btnDeleteUser.onclick = function () {
    if(checkLocarStorage()){
        return;
    }
    localStorage.removeItem(VORTAL_USERNAME);
    localStorage.removeItem(VORTAL_PASSWORD);
    resetUserValue();
};


/**
 * Permite verificar si los espacio en memoria correspondientes a 
 * usuario y contraseña son nulos.
 */
function checkLocarStorage(){
    return localStorage.getItem(VORTAL_USERNAME) == null && localStorage.getItem(VORTAL_PASSWORD) == null;
}

/**
 * Define el comportamiento de la extensión cuando todo es correcto.
 * @param {*} response
 */
function done(response) {
    console.log("Done");
    // En caso de que el usuario no desee guardar sus datos
    if(!response.rememberCheck) {
        return;
    }
    // En caso de que los datos del usuario ya esten guardados
    if(!checkLocarStorage()){
        return;
    }
    
    // Guardar credenciales
    localStorage.setItem(VORTAL_USERNAME, response.username);
    localStorage.setItem(VORTAL_PASSWORD, response.password);
}

/**
 * Define el comportamiento de la extensión cuando exixte un error.
 * @param {*} response
 */
function error(response) {
  console.log("Error",response);
}

/**
 * De estar registardas unas credenciales de usuario, las escribe en
 * los input.
 */
function getUserValue(){    
    if(checkLocarStorage()){
        return;
    }

    document.getElementById("username").value = localStorage.getItem(VORTAL_USERNAME);
    document.getElementById("current-password").value = localStorage.getItem(VORTAL_PASSWORD);
}

/**
 * Limpia los input correspondientes a Usuario y contraseña.
 */
function resetUserValue(){
    document.getElementById("username").value = "";
    document.getElementById("current-password").value = "";
}

/**
 * Permite al momento de cargar la extensión rellenar 
 */
document.addEventListener("DOMContentLoaded", function(event) {
    getUserValue()
});
