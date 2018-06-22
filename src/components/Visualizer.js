import React, { Component } from "react"
import Konva from "konva"
import { Stage, Layer, Text } from 'react-konva'


class LayerBackground extends React.component {
  componentDidMount() {
    console.log('rendered the visualizer background');
  },
  render () {
    return (
      <Rect
        color='black',
        fillRadialGradientStartPoint={0},
        fillRadialGradientStartRadius={0},
        fillRadialGradientEndPoint={0},
        fillRadialGradientEndRadius={70},
        fillRadialGradientColorStops={[0, 'red', 0.5, 'yellow', 1, 'blue']},
      };
    ></Rect>
    )
  }
}

class TweetContent extends React.component {
  componentDidMount() {
    console.log('rendered the tweet content')
  },
  componentDidUpdate() {
    console.log('updated the tweet content')
  },
  render() {
    return (
      {/* TODO: add ${tweet} */}
      <P>Here comes the text from the tweet</P>
    )
  }
}

class LayerTweetShape extends React.component {
  componentDidMount() {
    console.log('rendered the tweet shape')
  },
  render() {
    return (
      {/* TODO: add animation*/}
      <Circle>

      </Circle>

    )
  }
}

class Visualizer extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight} >

      </Stage>
      <TweetContent></TweetContent>
    )
  }
}

export default Visualizer