import React from "react";
import Konva from "konva";
import { Layer, Circle } from "react-konva";
import rc from "randomcolor";

const rcOptions = {
  luminosity: "light"
};

class VisualLayer extends React.Component {
  componentDidUpdate() {
    const { frequencies } = this.props;
    // console.log(frequencies[0] / 10);
    let freq = 1;
    if (frequencies.length > 0) {
      freq = frequencies.pop();
      console.log(freq);
      this.circle.to({
        scaleX: freq / 100,
        scaleY: freq / 100,
        druation: 0.1
      });
    }

    // console.log(freq);

    // this.circle.to({
    //   scaleX: 1,
    //   scaleY: 1,
    //   druation: 0.5
    // });
  }
  render() {
    const color = rc(rcOptions);
    const { visualizerSize } = this.props;
    const { width, height } = visualizerSize;
    // console.log(hashtagsSize);
    return (
      <Layer>
        <Circle
          ref={elem => {
            this.circle = elem;
          }}
          strokeWidth={1}
          height={50}
          width={50}
          tension={2}
          x={width / 2}
          y={height / 2}
          stroke={color}
        />
      </Layer>
    );
  }
}
export default VisualLayer;
