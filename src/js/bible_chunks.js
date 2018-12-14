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

    // Sort by hours then minutes
    available.sort(function(a, b) {
      return ((b[1] * 60 + b[2]) - (a[1] * 60 + a[2]))
    });

    return available.slice(0, 5);
  }
}

module.exports = BibleChunks;