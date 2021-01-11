/* var cuerpo = document.getElementsByClassName("text_num")
var matrizEquivalencia = [38]

for (var i = 0; i < cuerpo.length; i++) {
    matrizEquivalencia[i] = cuerpo[i]
}
console.log(cuerpo[0]) */
/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {
    var password = document.getElementById("password").value;

    if (e.target.classList.contains("btn")) {
      let user = document.getElementById("user");
      let pass = document.getElementById("password");
      console.log(user.value);
      chrome.tabs.sendMessage(1, {
        command: "decodificar",
        usuario: user,
      });
      console.log("salio");
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log("11");
        chrome.tabs.sendMessage(tabs[0].id, {
          command: "decodificar",
        });
      });
    }

    function decodificar(tabs) {
      chrome.tabs.insertJS({ code: hidePage }).then(() => {
        var user = document.getElementById("user").getAttribute("value");
        chrome.tabs.sendMessage(tabs[0].id, {
          command: "decodificar",
          usuario: user,
        });
      });
    }
    function reportarError(error) {
      console.error(`Error en decodificar: ${error}`);
    }
  });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  /* document.querySelector("#popup-content").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden"); */
  console.error(`Failed to execute EMERHENTE content script: ${error.message}`);
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
chrome.tabs
  .executeScript({ file: "./background.js" }, listenForClicks)
  .then(listenForClicks)
  .catch(reportExecuteScriptError);
