const { EventEmitter } = require("events");
const recorder = require("node-record-lpcm16");
const speech = require("@google-cloud/speech");

const textEmitter = new EventEmitter();

// Creates a google-speech client
const client = new speech.SpeechClient();
const sampleRateHertz = 16000;
const request = {
  config: {
    encoding: "LINEAR16",
    sampleRateHertz,
    languageCode: "es-ES",
  },
  interimResults: false,
  single_utterance: true,
};

// Create a recognize stream
const recognizeStream = client
  .streamingRecognize(request)
  .on("error", console.error)
  .on("data", (data) => {
    const text = data.results[0].alternatives[0].transcript;
    textEmitter.emit("new_text", text);
  });

// Start recording and send the microphone input to the Speech API
recorder
  .record({
    sampleRateHertz,
    threshold: 0,
    verbose: false,
    recordProgram: "rec", // Try also "arecord" or "sox"
    silence: "10.0",
  })
  .stream()
  .on("error", console.error)
  .pipe(recognizeStream);

console.log("Listening, press Ctrl+C to stop.");

// TODO: Export start and stop functions and maybe a config option
module.exports = { textEmitter };
