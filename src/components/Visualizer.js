import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Text } from 'react-konva';

class Visualizer extends Component {

  render() {
    return (
      <Stage>
        <Layer width={window.innerWidth} height={window.innerHeight}>
          {/*
            Background layer -> changes gradient colors based on the melody
            Width and Height -> size of window.innnerWidth and window.innerHeight 
          */}
        </Layer>
        <Layer> 
          {/* 
            Text layer -> renders content of the tweets
          */}
        </Layer>
        <Layer>
          {/* 
            Shapes -> renders the shapes of the tweets 
          */}
        </Layer>
      </Stage>
    )
  }
}

export default Visualizer;
