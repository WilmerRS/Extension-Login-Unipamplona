/**
 * El script de fondo sirve como oyente de eventos en segundo plano.
 * Permite configurar las páginas a las cuales tiene acceso la extensión.
 */
chrome.runtime.onInstalled.addListener(function () {
  console.log("On INtalled");
  // Elige cuando se debe activar la extension
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostEquals: "hermesoft.unipamplona.edu.co",
            },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });

  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  //   chrome.declarativeContent.onPageChanged.addRules([
  //     {
  //       conditions: [
  //         new chrome.declarativeContent.PageStateMatcher({
  //           pageUrl: {
  //             hostSuffix: "unipamplona.edu.co",
  //           },
  //         }),
  //       ],
  //       actions: [
  //         // chrome.tabs.executeScript({ file: "extension/content.js" }, () =>
  //         //   console.log("run when needed")
  //         // ),
  //         // new chrome.declarativeContent.ShowPageAction()
  //         new ExecuteScriptCustom(),
  //       ],
  //     },
  //   ]);
  // });
});

// class ExecuteScriptCustom extends chrome.declarativeContent.ShowPageAction {
//   constructor() {
//     super();
//     //this.executeScript();
//     this.inyectContentScript('content');
//   }

//   executeScript() {
//     console.log("Hola");
//     chrome.tabs.executeScript({ file: "extension/content.js" }, () =>
//       console.log("run when needed")
//     )
//   }

//   inyectContentScript(script) {
//     chrome.tabs.executeScript({
//       file: `extension/${script}.js`,
//     }, () => console.log('inyectContentScript'));
//   }
// }

