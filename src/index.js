import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap';
import './styles/index.scss';

var Dragdealer = require('dragdealer');

var $ = require('jquery');

var BibleChunks = require('./js/bible_chunks.js');

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

class BibleChunk extends React.Component {
  render() {
    return (
      <li key={this.props.name}>{this.props.name} - {formatTime(this.props.hours, this.props.minutes)}</li>
    )
  }
}
class BibleTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      available: []
    }
  }

  getAnimationCallback() {
    var component = this;
    return function(x, y) {
        // 1 = 4 hours
        var minutes = Math.floor(x * (4 * 60 - 1)) + 1;
        var hours = Math.floor(minutes / 60);
        var minsRemainder = minutes - hours * 60;

        var label = formatTime(hours, minsRemainder);

        $('#timeLabel').text(label);

        var chunks = BibleChunks.getChunks(minutes);
        component.setState({ available: chunks })
      }
  }

  componentDidMount() {
    new Dragdealer('just-a-slider', {
      animationCallback: this.getAnimationCallback()
    });
  }

  render() {
    return (
      <div className="container-fluid">
        How long have you got?

        <div id="just-a-slider" className="dragdealer">
          <div className="handle red-bar">

          </div>
        </div>

        <div id="timeLabel"></div>

        <div id="available">
          <ul>
            {this.state.available.map((chunk) =>
              <BibleChunk name={chunk[0]} hours={chunk[1]} minutes={chunk[2]} />)}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BibleTime />, document.getElementById("index"));