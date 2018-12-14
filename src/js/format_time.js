var formatTime = function(hours, minutes) {
  var minsLabel;
  if (minutes == 1) {
    minsLabel = minutes + ' minute';
  } else {
    minsLabel = minutes + ' minutes';
  }

  var label = "";
  if (hours > 1) {
    label = hours + " hours " + minsLabel;
  } else if (hours == 1) {
    label = hours + " hour " + minsLabel;
  } else {
    label = minsLabel;
  }

  return label;
}

module.exports = formatTime;