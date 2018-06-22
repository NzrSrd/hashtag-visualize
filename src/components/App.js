import React, { Component } from "react";

import io from "socket.io-client";
import uuid4 from "uuid/v4";
import { Container, Row, Col } from "react-grid-system";
import rc from "randomcolor";

import Visualizer from "./Visualizer";
import MusicThing from "./MusicThing";
import LeftSideBar from "./LeftSideBar";
import Controls from "./Controls";
import TweetTextBar from "./TweetTextBar";

const rcOptions = {
  luminosity: "light"
};
const HASHTAGS = [
  "refugees",
  "refugee",
  "refugeeweek2018",
  "refugeeweek",
  "refugeeday",
  "flüchtlinge",
  "migrants",
  "fuckafd",
  "noafd",
  "equality",
  "asylumSeekers",
  "refugiado",
  "rèfugiés",
  "peace",
  "paz",
  "spreadLov",
  "stophate"
];

class App extends Component {
  socket = io.connect("http://beathoven.axelfuhrmann.com/");
  frequencies = [];
  state = {
    hashtags: [],
    tweet: {},
    freq: [],
    visualizerSize: {},
    playing: true
  };

  componentDidMount() {
    this.subscripeToTweets();
    const visualizerElement = document.getElementById("visualizer");
    const { clientHeight, clientWidth } = visualizerElement;
    this.setState({
      visualizerSize: { height: clientHeight, width: clientWidth }
    });
  }
  handleReporduction(playing) {
    this.setState({ playing });
  }
  subscripeToTweets = () => {
    this.socket.on("tweet", data => {
      const { hashtags } = this.state;
      if (this.state.playing) {
        hashtags.push(
          ...data.entities.hashtags
            .filter(h => HASHTAGS.includes(h.text.toLowerCase()))
            .map(h => ({
              text: h.text,
              id: h.text.concat(data.id_str.concat(uuid4())),
              color: rc(rcOptions)
            }))
        );
        this.setState({
          hashtags: hashtags.reverse(),
          tweet: { id: data.id_stri, text: data.text }
        });
      }
    });
  };
  render() {
    const color = rc(rcOptions);
    const color2 = rc(rcOptions);
    const { hashtags, tweet, visualizerSize } = this.state;
    return (
      <Container fluid style={{ minHeight: "100vh" }}>
        <Row>
          <Col
            style={{
              border: `1px solid ${color}`,
              maxHeight: "90vh",
              overflowY: "auto",
              padding: 10
            }}
            md={2}>
            <LeftSideBar color={color2} hashtags={hashtags} />
          </Col>
          <Col
            id="visualizer"
            style={{
              padding: "0px",
              border: `1px solid ${color2}`,
              maxHeight: "90vh",
              height: "90vh"
            }}
            md={10}>
            <Row>
              <TweetTextBar tweet={tweet} color2={color2} color={color} />
            </Row>

            <Row>
              <Visualizer
                color={color}
                frequencies={this.frequencies}
                visualizerSize={visualizerSize}
              />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col style={{ border: `1px solid ${color}`, height: "10vh" }} md={12}>
            <Controls
              handleReporduction={socket => this.handleReporduction(socket)}
              color={color}
            />
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
