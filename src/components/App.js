import React, { Component } from "react";

import io from "socket.io-client";
import uuid4 from "uuid/v4";
import { Container, Row, Col } from "react-grid-system";
// import Tone from "tone";
import rc from "randomcolor";

import Visualizer from "./Visualizer";
import MusicThing from "./MusicThing";

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
      <div className="App">
        <Visualizer />
        <MusicThing tweet={tweet} />
      </div>
    );
  }
}

export default App;
