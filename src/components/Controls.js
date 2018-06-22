import React, { Component } from "react";

class Controls extends Component {
  // TODO: please rename this to whatever music shit you are doing

  render() {
    const { color } = this.props;
    return (
      <footer>
        <div className="buttons">
          <button
            onClick={() => this.props.handleReporduction(true)}
            style={{ border: `1px solid ${color}`, color }}
            type="button"
            name="button">
            <i style={{ color }} className="fas fa-play-circle" /> PLAY
          </button>
          <button
            onClick={() => this.props.handleReporduction(false)}
            style={{ border: `1px solid ${color}`, color }}
            type="button"
            name="button">
            <i style={{ color }} className="fas fa-stop-circle" /> STOP
          </button>
          {/* <div className="slide-bar">
            <i className="fas fa-volume-down" style={{ color: "#ff00c2" }} />
            <input type="range" id="myRange" value="90" />
            <i className="fas fa-volume-up" style={{ color: "#ff00c2" }} />
          </div> */}
        </div>
      </footer>
    );
  }
}

export default Controls;
