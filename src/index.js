import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap';
import './styles/index.scss';

var Dragdealer = require('dragdealer');

var $ = require('jquery');

var BibleChunks = require('./js/bible_chunks.js');
var formatTime = require('./js/format_time.js');

class BibleChunkLink extends React.Component {
  render() {
    var book_name_encoded = this.props.passage;

    return (
      <a href={"https://www.biblegateway.com/passage/?search=" + book_name_encoded+ "%201-200&version=ESVUK"} target="_blank">{this.props.passage}</a>
    )
  }
}

class BibleChunk extends React.Component {
  render() {
    return (
      <li key={this.props.name}><BibleChunkLink passage={this.props.name}/> - {formatTime(this.props.hours, this.props.minutes)}</li>
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
        <h1>BibleTime</h1>

        How long have you got?

        <div id="just-a-slider" className="dragdealer">
          <div className="handle red-bar">

          </div>
        </div>

        <div id="timeLabel"></div>

        <div id="available" className="card">
          { this.state.available.length > 0 ? 'Why not read...?' : '' }
          <ul>
            {this.state.available.map((chunk) =>
              <BibleChunk name={chunk[0]} hours={chunk[1]} minutes={chunk[2]} />)}
          </ul>
        </div>

        <div id="footer">
          <p>
            Made with love by <a href="https://discipleship.tech/">Discipleship Tech</a><br/>
            at <a href="https://kingdomcode.uk/">Kingdom Code</a> microBUILD 2018
          </p>

          <p>
            Inspired by <a href="https://www.crossway.org/articles/infographic-you-can-read-more-of-the-bible-than-you-think/">this blog post</a> by CrossWay.
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BibleTime />, document.getElementById("index"));