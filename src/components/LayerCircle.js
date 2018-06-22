import React from "react";
import Konva from "konva";
import { Layer, Circle } from "react-konva";
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
      // console.log(freq);
      this.circle.to({
        scaleX: freq / 80,
        scaleY: freq / 80,
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
