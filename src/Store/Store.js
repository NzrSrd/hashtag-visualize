import { observable, action, computed, toJS } from 'mobx';
import io from 'socket.io-client';
import uuid from 'uuid';
import AutoObservable from './AutoObservable';

import frequencies from './services/notes';
import { hashtagsList } from './services/constants';
import melody from './services/melody';

class Store {
  socket = io.connect('http://beathoven.axelfuhrmann.com/');

  @observable frequency = null;

  @observable _filterdHashtags = [];

  @computed
  get filterdHashtags() {
    return toJS(this._filterdHashtags);
  }

  @computed
  get tweetText() {
    if (!this.autoObservable.data) return null;
    return this.autoObservable.data.text;
  }

  @computed
  get freqBasedOnTweetLength() {
    if (!this.tweetText || !this.frequency) return null;
    return Math.round((this.frequency * this.tweetText.length) / 200);
  }

  openStream = () => {
    this.socket.on('tweet', (tweet) => {
      const {
        entities: { hashtags },
      } = tweet;

      if (hashtags.filter(h => hashtagsList.includes(h.text.toLowerCase()))) {
        this.autoObservable.data = tweet;
        this.makeSound();
        this._filterdHashtags.push(
          ...hashtags.filter(h => hashtagsList.includes(h.text.toLowerCase())).map(h => ({ text: h.text, id: uuid() }))
        );
      }
    });
  };

  closeStream = () => {
    this.socket.close();
  };

  autoObservable = new AutoObservable(this.openStream, this.closeStream);

  @action
  makeSound() {
    const n = ['A', 'C', 'D', 'E', 'F', 'G'];
    const octave = ['4', '5'];
    const rArr = arr => arr[Math.floor(Math.random() * arr.length)];
    const note = rArr(n) + rArr(octave);

    melody.triggerAttackRelease(note, '16n');
    this.frequency = frequencies[note];
  }
}

export default Store;
