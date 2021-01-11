(function () {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    /* if (window.hasRun) {
        return;
    }
    window.hasRun = true; */

    function insertarDatos(usuario) {
        console.log("mal");
        document.getElementById("username").setAttribute("value") = usuario;
    }

    chrome.runtime.onMessage.addListener((message) => {
        console.log("listo");
        if (message.command === "decodificar") {
            insertarDatos(message.usuario);
        } else if (message.command === "reset") {
            removeExistingBeasts();
        }
    });

     chrome.runtime.onMessage.addListener(
        function (message) {
            if (message.command === "decodificar") {
                insertarDatos(message.usuario);
            } else if (message.command === "reset") {
                removeExistingBeasts();
            }
        }); 
})();

 'use strict';

chrome.runtime.onInstalled.addListener(function () {
    /* chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log('The color is green.');
    }); */

    // Elige cuando se debe activar la extension
     chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'vortal.unipamplona.edu.co' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    }); 
}); 