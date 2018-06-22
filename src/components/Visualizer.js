import React, { Component } from "react";
import { Stage, Layer } from "react-konva";
import LayerCircle from "./LayerCircle";
import LayerRect from "./LayerRect";

class Visualizer extends Component {
  render() {
    const { visualizerSize, frequencies, color } = this.props;
    const { width, height } = visualizerSize;
    return (
      <Stage width={width} height={height}>
        <Layer>
          <LayerCircle
            color={color}
            key="first"
            frequencies={frequencies}
            width={width}
            height={height}
            size={25}
          />
          <LayerCircle
            color={color}
            key="secound"
            frequencies={frequencies}
            width={width}
            height={height}
            size={50}
          />
          <LayerCircle
            color={color}
            key="third"
            size={75}
            frequencies={frequencies}
            width={width}
            height={height}
          />
          <LayerCircle
            color={color}
            key="fourth"
            size={100}
            frequencies={frequencies}
            width={width}
            height={height}
          />
          <LayerRect
            color={color}
            key="fiths"
            size={700}
            frequencies={frequencies}
            width={width}
            height={height}
          />
          <LayerRect
            color={color}
            key="fiths"
            size={800}
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
