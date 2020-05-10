const player = require("play-sound")((opts = {}));

module.exports = (path) => {
  player.play(path, function (err) {
    if (err) throw err;
  });
};
