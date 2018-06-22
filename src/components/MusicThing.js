import React, { Component } from "react";
import Tone from "tone";
import io from "socket.io-client";

import freq from "../notes";

const n = ["A", "C", "D", "E", "F", "G"];
const octave = ["4", "5"];
const osc = ["triangle", "sine", "sawtooth"];
const rArr = arr => arr[Math.floor(Math.random() * arr.length)];
const rNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let note;

const makeSound = () => {
  note = rArr(n) + rArr(octave);
  melo.triggerAttackRelease(note, "16n");
};

window.addEventListener("keydown", e => {
  if (e.keyCode === 32) makeSound(melo);
});

// Synth
const melo = new Tone.Synth({
  oscillator: { type: "sine" }
});

const rev = new Tone.Freeverb({
  roomSize: 0.96,
  dampening: 3000,
  wet: 0.6
});

const revPha = new Tone.Phaser({
  frequency: 0.5,
  octaves: 1
});
const revVol = new Tone.Volume(-40);

melo.connect(rev);
rev.connect(revPha);
revPha.connect(revVol);
revVol.toMaster();

const cho2 = new Tone.Chorus();
const limit = new Tone.Limiter(-6);
const master = new Tone.Volume(-10);

const del = new Tone.PingPongDelay({
  delayTime: "2n",
  maxDelayTime: 2,
  wet: 0.5
});

melo.connect(cho2);
cho2.connect(del);
del.connect(master);
master.connect(limit);

limit.toMaster();

const envelope = {
  attack: 1,
  decay: 0,
  sustain: 1,
  release: 1
};

const bassLeft = new Tone.Synth({
  oscillator: { type: "sine" },
  envelope
});

const bassRight = new Tone.Synth({
  oscillator: { type: "sawtooth" },
  envelope
});

const middleLeft = new Tone.Synth({
  oscillator: { type: "sawtooth" },
  envelope
});

const middleRigth = new Tone.Synth({
  oscillator: { type: "sawtooth" },
  envelope
});

const highLeft = new Tone.Synth({
  oscillator: { type: "sawtooth" },
  envelope
});

const highRight = new Tone.Synth({
  oscillator: { type: "sawtooth" },
  envelope
});

new Tone.Sequence(
  (time, note) => {
    bassLeft.triggerAttackRelease(note, "1n", time);
  },
  ["A2", "A#2", "C2", "G2"],
  "1n"
).start();

new Tone.Sequence(
  (time, note) => {
    bassRight.triggerAttackRelease(note, "1n", time);
  },
  ["A2", "A#2", "C2", "G2"],
  "1n"
).start();

new Tone.Sequence(
  (time, note) => {
    middleLeft.triggerAttackRelease(note, "1n", time);
  },
  ["C3", "D3", "E3", "B3"],
  "1n"
).start();

new Tone.Sequence(
  (time, note) => {
    middleRigth.triggerAttackRelease(note, "1n", time);
  },
  ["C3", "D3", "E3", "B3"],
  "1n"
).start();

new Tone.Sequence(
  (time, note) => {
    highLeft.triggerAttackRelease(note, "1n", time);
  },
  ["E4", "F4", "G4", "E4"],
  "1n"
).start();

new Tone.Sequence(
  (time, note) => {
    highRight.triggerAttackRelease(note, "1n", time);
  },
  ["E4", "F4", "G4", "E4"],
  "1n"
).start();

const reverb = new Tone.Freeverb({
  roomSize: 0.7,
  dampening: 300
});

const chorus = new Tone.Chorus({
  frequency: 0.2
});
const left = new Tone.Panner(-0.5);
const right = new Tone.Panner(0.5);

const compre = new Tone.Compressor({
  threshold: -4
});

const kick = new Tone.MembraneSynth();

new Tone.Sequence(
  (time, note) => {
    kick.triggerAttackRelease(note, "16n", time);
  },
  ["A0", ["A0", ["A0", "A0"]], "A0", "A0"]
).start(0);

const kickGain = new Tone.Volume(-14);
kick.connect(kickGain);
kickGain.toMaster();

bassLeft.connect(left);
middleLeft.connect(left);
highLeft.connect(left);

middleRigth.connect(right);
highRight.connect(right);
bassRight.connect(right);

left.connect(reverb);
right.connect(reverb);

reverb.connect(chorus);
chorus.connect(compre);

const masterGain = new Tone.Volume(-28);

compre.connect(masterGain);
masterGain.toMaster();

Tone.Transport.bpm.value = 50;
Tone.Transport.start();

class MusicMelody extends Component {
  static getDerivedStateFromProps() {
    const note = rArr(n) + rArr(octave);
    melo.triggerAttackRelease(note, "16n");
    return { freq: freq[note] };
  }
  state = {
    freq: null
  };
  render() {
    this.props.handleFreq(this.state.freq);
    return <div />;
  }
}

export default MusicMelody;
