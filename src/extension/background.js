/**
 * El script de fondo sirve como oyente de eventos en segundo plano.
 * Permite configurar las páginas a las cuales tiene acceso la extensión.
 */
chrome.runtime.onInstalled.addListener(function () {
    // Elige cuando se debe activar la extension
     chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { 
                        hostEquals: 'vortal.unipamplona.edu.co'
                    },

                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
     }); 

}); 