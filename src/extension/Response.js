/**
 * Permite enciar un mensaje a la extensión si se ha iniciado sesión o no
 */
(function () {
  /**
   * Accede al Frame principal de la página
   */
  mainFrame = window.frames[1];
  //console.log(mainFrame.name);

  if(!mainFrame.onload){
    mainFrame.frameElement.addEventListener("load", loadedMainFrame);
  }

  function loadedMainFrame() {
    // console.log("Entro L:16", mainFrame.length);
    chrome.runtime.sendMessage({loggedIn: mainFrame.length === 2});
  }
})();
