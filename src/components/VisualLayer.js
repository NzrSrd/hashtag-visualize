import React from "react";
import Konva from "konva";
import { Layer, Circle } from "react-konva";
import rc from "randomcolor";

const rcOptions = {
  luminosity: "light"
};

class VisualLayer extends React.Component {
  componentDidUpdate() {
    const { visualizerSize, hashtagsSize } = this.props;
    this.circle.to({
      scaleX: hashtagsSize == 0 ? 1.1 : 1 + hashtagsSize * 0.1,
      scaleY: hashtagsSize == 0 ? 1.1 : 1 + hashtagsSize * 0.1,
      druation: 0.5
    });
    // this.circle.to({
    //   scaleX: 1,
    //   scaleY: 1,
    //   druation: 0.5
    // });
  }
  render() {
    const color = rc(rcOptions);
    const { visualizerSize, hashtagsSize } = this.props;
    const { width, height } = visualizerSize;
    console.log(hashtagsSize);
    return (
      <Layer>
        <Circle
          ref={elem => {
            this.circle = elem;
          }}
          strokeWidth={2}
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
