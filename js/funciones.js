function run() {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();

  recognition.lang = "es-US";

  recognition.onend = (event) => {
    recognition.start();
  };

  recognition.onresult = (resultado) => {
    manejarResultado(resultado);
  };

  /* 2.5 */
  recognition.start();

  //document.getElementById("textoCambiar").textContent = resultado.results[0][0].transcript.toLowerCase().trim();
  const manejarResultado = (resultado) => {
    //document.body.innerHTML = resultado.results[0][0].transcript;
    /* Adicional */
    if (
      resultado.results[0][0].transcript.toLowerCase().trim() ==
      "abrir wikipedia"
    ) {
      const childFrame = document.createElement("iframe");
      childFrame.src = "https://es.wikipedia.org/wiki/Wikipedia:Portada";
      childFrame.style.width = "100vw";
      childFrame.style.height = "500px";
      document.body.append(childFrame);
    } else if (
      resultado.results[0][0].transcript.toLowerCase().trim() == "música"
    ) {
      window.open(
        "https://www.youtube.com/watch?v=z6GgrL6a-cc&ab_channel=JulianRosero",
        "_blank"
      );
    } else if (
      resultado.results[0][0].transcript.toLowerCase().trim() == "whatsapp"
    ) {
      window.open("https://web.whatsapp.com/", "_blank");
    } else if (
      resultado.results[0][0].transcript.toLowerCase().trim() == "stop"
    ) {
      recognition.aborted();
    } else if (
      resultado.results[0][0].transcript.toLowerCase().trim() == "aula virtual"
    ) {
      window.open("https://campus.uandina.edu.pe/login/index.php", "_blank");
    } else {
      var url =
        "https://" +
        resultado.results[0][0].transcript.toLowerCase().trim() +
        ".com";
      window.open(url, "_blank");
      // Cambiar el foco al nuevo tab (punto opcional)
      recognition.stop();
    }
  };
}
function stop() {}

// comentar ctrl+k+c  descomentar ctrl+k+u
