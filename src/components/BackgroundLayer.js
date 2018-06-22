import React from "react";
import Konva from "konva";
import { Layer, Rect } from "react-konva";

class BackgroundLayer extends React.Component {
  componentDidMount() {
    console.log("rendered the visualizer background");
  }
  render() {
    const { visualizerSize } = this.props;
    const { width, height } = visualizerSize;
    return (
      <Layer>
        <Rect
          color="red"
          width={width}
          height={height}
          // fillRadialGradientStartPointX={width / 2}
          // fillRadialGradientStartPointY={height / 2}
          // fillRadialGradientEndPointX={width}/
          // fillRadialGradientEndPointY={height}
          // fillRadialGradientStartRadius={width / 2}
          // fillRadialGradientEndRadius={width}
          // fillLinearGradientStartPointY={1}
          // fillRadialGradientEndPoint={width}
          // fillLinearGradientEndPointX={height}
          fillRadialGradientColorStops={[
            0,
            "yellow",
            0.5,
            "#1a1a1a",
            1,
            "blue"
          ]}
        />
      </Layer>
    );
  }
}
export default BackgroundLayer;
