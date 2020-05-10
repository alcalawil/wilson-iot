const { textEmitter } = require("./speechToText");
const request = require("request-promise-native");
const playSound = require("./playSound");

const doRequest = (url) => {
  return request({ method: "GET", uri: url })
    .then((body) => {
      console.log("Response received from server");
    })
    .catch((err) => console.error("Request error", err));
};

const processText = async (text) => {
  const cleanText = text.toLowerCase();
  console.log("Text:", cleanText);

  if (text.includes("por favor")) {
    console.log("Send request to turn the light on");
    doRequest("http://192.168.0.50:3001/ledon");
    return;
  }

  if (text.includes("prende la luz")) {
    console.log("tienes que ser educado wil");
    playSound("./media/educado.mp3");
    return;
  }

  if (text.includes("apaga la luz") || text.includes("apágala")) {
    console.log("Send request to turn the light off");
    doRequest("http://192.168.0.50:3001/ledoff");
    return;
  }

  if (text.includes("gracias")) {
    console.log("play de_nada mp3");
    playSound("./media/de_nada.mp3");
    return;
  }
};

textEmitter.on("new_text", processText);
