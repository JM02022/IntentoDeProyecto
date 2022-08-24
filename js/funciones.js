var ventanas = []
function aniadirDiv(text){
  var newDiv = document.createElement("div")
  newDiv.textContent = "• " + text
  const box = document.getElementById("lista")
  box.appendChild(newDiv)
}
function cerrarPagina(text,pos){
  window.close()
}
function speak(text){
  var msg = new SpeechSynthesisUtterance(text)
  var voices = window.speechSynthesis.getVoices() 
  msg.voice = voices[8]
  window.speechSynthesis.speak(msg)
}
function buscarListaMusica(resultado){
  console.log(resultado.results[0][0].transcript.toLowerCase().trim())
}
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
      resultado.results[0][0].transcript.toLowerCase().trim() == "salsa"
    ) {
      window.open(
        "https://music.youtube.com/watch?v=Ty2wCuHfNN8&list=RDCLAK5uy_lc4yBYpywmmgjplkuzYxzUgLJ8UvDKUUk",
        "_blank"
      );
      aniadirDiv("reproduciendo musica - salsa")
      ventanas.push("https://www.youtube.com/watch?v=z6GgrL6a-cc&ab_channel=JulianRosero")

    }
    else if (
      resultado.results[0][0].transcript.toLowerCase().trim() == "música"
    ) {
      window.open(
        "https://music.youtube.com/watch?v=cUmSm7-_YhM&list=RDAMVMcUmSm7-_YhM",
        "_blank"
      );
      aniadirDiv("reproduciendo musica - musica de mierda")
      ventanas.push("https://music.youtube.com/watch?v=cUmSm7-_YhM&list=RDAMVMcUmSm7-_YhM")

    } 
    else if (
      resultado.results[0][0].transcript.toLowerCase().trim() == "Pantera"
    ) {
      window.open(
        "https://inkasex.com/es/video/la-pantera-de-inkasex",
        "_blank"
      );
      aniadirDiv("reproduciendo musica - Pornero(a) de mierda")
      ventanas.push("https://inkasex.com/es/video/la-pantera-de-inkasex")
      speak("señora su hijo esta viendo pornoooo")
    } 
    else if (
      resultado.results[0][0].transcript.toLowerCase().trim() == "whatsapp"
    ) {
      window.open("https://web.whatsapp.com/", "_blank");
      aniadirDiv("whatsapp.com")
      ventanas.push("https://web.whatsapp.com/")
      speak("abriendo whatsapp")
    } else if (
      resultado.results[0][0].transcript.toLowerCase().trim() == "cerrar" 
    ) {
      speak("¿que pestaña deseas cerrar?")
    } else if (
      resultado.results[0][0].transcript.toLowerCase().trim() == "aula virtual"
    ) {
      window.open("https://campus.uandina.edu.pe/login/index.php", "_blank");
      aniadirDiv("campus.uandina.edu.pe")
      ventanas.push("https://campus.uandina.edu.pe/login/index.php")
      speak("abriendo aula virtual")
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
