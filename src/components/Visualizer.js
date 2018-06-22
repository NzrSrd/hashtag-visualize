import React, { Component } from "react";
import Konva from "konva";
import { Stage } from "react-konva";
import BackgroundLayer from "./BackgroundLayer";
import VisualLayer from "./VisualLayer";

class Visualizer extends Component {
  render() {
    const { visualizerSize, hashtagsSize } = this.props;
    const { width, height } = visualizerSize;
    // console.log(visualizerSize);
    return (
      <Stage width={width} height={height}>
        {/* <BackgroundLayer visualizerSize={visualizerSize} /> */}
        <VisualLayer
          hashtagsSize={hashtagsSize}
          visualizerSize={visualizerSize}
        />
      </Stage>
    );
  }
}

export default Visualizer;
