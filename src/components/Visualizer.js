import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Text } from 'react-konva';

class LayerBackground extends React.component {
  state = {
  },
  render () {
    return (
      <Layer>
        {/* this is the background based on the melody */}
      </Layer>
    )
  }
}

class LayerTweetText extends React.component {
  state = {
    text: tweet 
  },
  render() {
    <Text>${tweet}</Text>
  }
}

class LayerTweetShape extends React.component {
  state = {

  },
  render() {

  }
}

class Visualizer extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight} >
        <Layer></Layer>
      </Stage>
    )
  }
}

export default Visualizer;