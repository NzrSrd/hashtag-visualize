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
  state = { hashtags: [], tweet: {} };

  componentDidMount() {
    this.subscripeToTweets();
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

      console.log(hashtags);
      this.setState({ hashtags, tweet: data.id_str });
    });
  };
  render() {
    const { tweet } = this.state;
    return (
      <Container fluid style={{ minHeight: "100vh" }}>
        <Row>
          <Col style={{ border: "1px solid red", maxHeight: "100vh" }} md={2}>
            <LeftSideBar />
          </Col>
          <Col
            style={{
              border: "1px solid red",
              maxHeight: "95vh",
              height: "95vh"
            }}
            md={10}>
            <Visualizer />
          </Col>
        </Row>
        <Row>
          <Col style={{ border: "1px solid red", height: "5vh" }} md={12}>
            <Controls />
          </Col>
        </Row>

        {/* <MusicThing tweet={tweet} /> */}
      </Container>
    );
  }
}

export default App;
