import React from "react";
import { Circle } from "react-konva";
import rc from "randomcolor";

const rcOptions = {
  luminosity: "light"
};

class LayerCircle extends React.Component {
  componentDidUpdate() {
    const { frequencies } = this.props;
    let freq = 1;
    if (frequencies.length > 0) {
      freq = frequencies.pop();
      this.circle.to({
        scaleX: freq / 90,
        scaleY: freq / 90,
        druation: 0.1
      });
    }
  }
  render() {
    const color = rc(rcOptions);
    const { width, height, size } = this.props;
    return (
      <Circle
        ref={elem => {
          this.circle = elem;
        }}
        shadowColor={color}
        strokeWidth={1}
        height={size}
        width={size}
        tension={2}
        x={width / 2}
        y={height / 2}
        stroke={color}
      />
    );
  }
}
export default LayerCircle;
