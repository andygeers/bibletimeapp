import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap';
import './styles/index.scss';

var Dragdealer = require('dragdealer');

var $ = require('jquery');

var BibleChunks = require('./js/bible_chunks.js');

class BibleTime extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new Dragdealer('just-a-slider', {
      animationCallback: function(x, y) {
        // 1 = 4 hours
        var minutes = Math.floor(x * (4 * 60 - 1)) + 1;
        var hours = Math.floor(minutes / 60);
        var minsRemainder = minutes - hours * 60;

        var minsLabel;
        if (minsRemainder == 1) {
          minsLabel = minsRemainder + ' minute';
        } else {
          minsLabel = minsRemainder + ' minutes';
        }

        var label = "";
        if (hours > 1) {
          label = hours + " hours " + minsLabel;
        } else if (hours == 1) {
          label = hours + " hour " + minsLabel;
        } else {
          label = minsLabel;
        }

        $('#timeLabel').text(label);

        var chunks = BibleChunks.getChunks(minutes);
        $('#available').text(chunks);
      }
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

        <div id="available"></div>
      </div>
    );
  }
}

ReactDOM.render(<BibleTime />, document.getElementById("index"));