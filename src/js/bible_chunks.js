var chunks = [
  ['Genesis', 3, 31],
  ['Exodus', 2, 51],
  ['Leviticus', 2, 3],
  ['Numbers', 2, 57],
  ['Deuteronomy', 2, 24],
  ['Joshua', 1, 42],
  ['Judges', 1, 41],
  ['Ruth', 0, 14],
  ['1 Samuel', 2, 14],
  ['2 Samuel', 1, 49],
  ['1 Kings', 2, 6],
  ['2 Kings', 2, 6],
  ['1 Chronicles', 2, 3],
  ['2 Chronicles', 2, 19],
  ['Ezra', 0, 40],
  ['Nehemiah', 0, 58],
  ['Esther', 0, 31],
  ['Job', 1, 46],
  ['Psalms', 4, 51],
  ['Proverbs', 1, 35],
  ['Ecclesiastes', 0, 31],
  ['Song of Solomon', 0, 17],
  ['Isaiah', 3, 43],
  ['Jeremiah', 3, 51],
  ['Lamentations', 0, 20],
  ['Ezekiel', 3, 39],
  ['Daniel', 1, 6],
  ['Hosea', 0, 32],
  ['Joel', 0, 12],
  ['Amos', 0, 24],
  ['Obadiah', 0, 4],
  ['Obadiah', 0, 4],
  ['Jonah', 0, 8],
  ['Micah', 0, 18],
  ['Nahum', 0, 7],
  ['Habakkuk', 0, 9],
  ['Zephaniah', 0, 10],
  ['Haggai', 0, 6],
  ['Zechariah', 0, 35],
  ['Malachi', 0, 11],
  ['Matthew', 2, 21],
  ['Mark', 1, 23],
  ['Luke', 2, 24],
  ['John', 1, 51],
  ['Acts', 2, 15],
  ['Romans', 0, 57],
  ['1 Corinthians', 0, 58],
  ['2 Corinthians', 0, 38],
  ['Galatians', 0, 20],
  ['1 Thessalonians', 0, 11],
  ['2 Thessalonians', 0, 7],
  ['1 Timothy', 0, 15],
  ['2 Timothy', 0, 11],
  ['Titus', 0, 6],
  ['Philemon', 0, 3],
  ['Hebrews', 0, 44],
  ['James', 0, 15],
  ['1 Peter', 0, 15],
  ['2 Peter', 0, 10],
  ['1 John', 0, 16],
  ['2 John', 0, 2],
  ['3 John', 0, 2],
  ['Jude', 0, 4],
  ['Revelation', 1, 10]
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