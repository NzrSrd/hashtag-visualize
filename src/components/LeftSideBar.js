import React, { Component } from "react";

class LeftSideBar extends Component {
  render() {
    const { hashtags, color } = this.props;
    return (
      <div className="aside">
        <h1 style={{ borderBottom: `1px solid ${color}` }}>Hashtags:</h1>
        {hashtags.map(h => (
          <h2 key={h.id} style={{ color: h.color }}>
            #{h.text}
          </h2>
        ))}
      </div>
    );
  }
}

export default LeftSideBar;
