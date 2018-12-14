var chunks = [
  ['Genesis', 3, 31],
  ['Exodus', 2, 51]
];

var BibleChunks = {
  getChunks: function(minutes) {
    var available = [];
    for (var i in chunks) {
      var chunk = chunks[i];
      var totalMins = chunk[1] * 60 + chunk[2];
      if (totalMins < minutes) {
        available.push(chunk);
      }
    }
    return available;
  }
}

module.exports = BibleChunks;