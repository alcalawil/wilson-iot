# Wilson IoT

Wilson IoT is a simple assistant who react to voice commands and interacts with hardware through its API

It was inspired by [this tutorial](https://medium.com/kmakes/how-i-made-an-app-to-recognize-speech-c65c4be666fa). I recommend you to read it if you don't have previous experience using any of the required modules.

### Requirements

- node.js
- [SoX](http://sox.sourceforge.net/) for sound input
- A terminal player like mplayer (read the [play-sound](https://www.npmjs.com/package/play-sound) docs for more options)
- [Google Cloud SKD](https://cloud.google.com/sdk/docs)
- Setup the [Google Cloud Project](https://cloud.google.com/speech-to-text/docs/quickstart-client-libraries#client-libraries-install-nodejs) - (You can create a free account)

### Usage
  - `export GOOGLE_APPLICATION_CREDENTIALS="path_to_google-credentials.json"` (you must to do this every time you open a new terminal session)
  - `npm i`
  - `npm start`
