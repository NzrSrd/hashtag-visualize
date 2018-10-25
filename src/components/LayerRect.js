import React from "react";
import { Rect } from "react-konva";
import rc from "randomcolor";

const rcOptions = {
  luminosity: "light"
};

class LayerRect extends React.Component {
  componentDidUpdate() {
    const { frequencies } = this.props;
    let freq = 1;
    if (frequencies.length > 0) {
      freq = frequencies.pop();
      this.rect.to({
        height: freq / 80,
        width: freq / 80,
        druation: 0.1
      });
    }
  }
  render() {
    const color = rc(rcOptions);
    const { width, height } = this.props;
    return (
      <Rect
        ref={elem => {
          this.rect = elem;
        }}
        strokeWidth={1}
        height={height / 1.4}
        shadowColor={color}
        width={width - width / 2}
        x={width / 4}
        y={height / 10}
        stroke={color}
      />
    );
  }
}
export default LayerRect;
