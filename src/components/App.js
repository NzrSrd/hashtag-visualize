import React, { Component } from "react";

import io from "socket.io-client";
import uuid4 from "uuid/v4";
import { Container, Row, Col } from "react-grid-system";
// import Tone from "tone";
import rc from "randomcolor";

import Visualizer from "./Visualizer";
import MusicThing from "./MusicThing";
import LeftSideBar from "./LeftSideBar";
import Controls from "./Controls";

const rcOptions = {
  luminosity: "light"
};

class App extends Component {
  constructor() {
    super();
    this.socket = io.connect("http://afuh.xyz/");
  }
  frequencies = [];
  state = { hashtags: [], tweet: {}, freq: [], visualizerSize: {} };

  componentDidMount() {
    this.subscripeToTweets();
    const visualizerElement = document.getElementById("visualizer");
    console.log(visualizerElement);
    const { clientHeight, clientWidth } = visualizerElement;
    this.setState({
      visualizerSize: { height: clientHeight, width: clientWidth }
    });
  }

  subscripeToTweets = () => {
    this.socket.on("tweet", data => {
      const { hashtags } = this.state;
      hashtags.push(
        ...data.entities.hashtags.map(h => ({
          text: h.text,
          id: h.text.concat(data.id_str.concat(uuid4())),
          color: rc(rcOptions)
        }))
      );

      // console.log(hashtags);
      this.setState({ hashtags, tweet: data.id_str });
    });
  };
  render() {
    const { hashtags, tweet, visualizerSize } = this.state;
    const hashtagsSize = hashtags.length;
    return (
      <Container fluid style={{ minHeight: "100vh" }}>
        <Row>
          <Col style={{ border: "1px solid red", maxHeight: "100vh" }} md={2}>
            <LeftSideBar />
          </Col>
          <Col
            id="visualizer"
            style={{
              padding: "0px",
              border: "1px solid red",
              maxHeight: "95vh",
              height: "95vh"
            }}
            md={10}>
            <Visualizer
              frequencies={this.frequencies}
              hashtagsSize={hashtagsSize}
              visualizerSize={visualizerSize}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ border: "1px solid red", height: "5vh" }} md={12}>
            <Controls />
          </Col>
        </Row>

        <MusicThing
          tweet={tweet}
          handleFreq={freq => this.frequencies.push(freq)}
        />
      </Container>
    );
  }
}

export default App;
