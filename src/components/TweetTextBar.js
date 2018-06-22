import React, { Component } from "react";

class TweetTextBar extends Component {
  render() {
    return (
      <div style={{ padding: 10 }}>
        <h4 style={{ color: "#fff" }}> {this.props.tweet.text}</h4>
      </div>
    );
  }
}

export default TweetTextBar;
