import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer } from "react-konva";
import BackgroundLayer from "./BackgroundLayer";
import VisualLayer from "./VisualLayer";
import LayerCircle from "./LayerCircle";

class Visualizer extends Component {
  render() {
    const { visualizerSize, hashtagsSize, frequencies } = this.props;

    const { width, height } = visualizerSize;
    console.log(frequencies);
    return (
      <Stage width={width} height={height}>
        {/* <BackgroundLayer visualizerSize={visualizerSize} /> */}
        <Layer>
          <LayerCircle
            key="first"
            frequencies={frequencies}
            width={width}
            height={height}
            size={25}
          />
          <LayerCircle
            key="secound"
            frequencies={frequencies}
            width={width}
            height={height}
            size={50}
          />
          <LayerCircle
            key="third"
            size={75}
            frequencies={frequencies}
            width={width}
            height={height}
          />
          <LayerCircle
            key="fourth"
            size={100}
            frequencies={frequencies}
            width={width}
            height={height}
          />
        </Layer>
      </Stage>
    );
  }
}

export default Visualizer;
