import React, { Component } from "react";

class TweetTextBar extends Component {
  render() {
    const { color } = this.props;
    return (
      <div
        className="tweet-text-bar"
        style={{
          padding: 10,
          border: `1px solid ${color}`
        }}
      >
        <h4 style={{ color: "#fff" }}> {this.props.tweet.text}</h4>
      </div>
    );
  }
}

export default TweetTextBar;
