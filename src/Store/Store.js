import { observable, action, computed } from 'mobx';
import io from 'socket.io-client';
import uuid from 'uuid';
import rc from 'randomcolor';

import AutoObservable from './AutoObservable';

import frequencies from './services/notes';
import { hashtagsList } from './services/constants';
import melody from './services/melody';

class Store {
  socket = io.connect('http://beathoven.axelfuhrmann.com/');

  @observable frequency = null;

  @observable filterdHashtags = [];

  openStream = () => {
    this.socket.on('tweet', (tweet) => {
      this.saveValidTweets(tweet);
    });
  };

  closeStream = () => {
    this.socket.close();
  };

  autoObservable = new AutoObservable(this.openStream, this.closeStream);

  @computed
  get tweetText() {
    if (!this.autoObservable.data) return null;
    return this.autoObservable.data.text;
  }

  @computed
  get freqBasedOnTweetLength() {
    if (!this.tweetText || !this.frequency) return null;
    return Math.round((this.frequency * this.tweetText.length) / 100);
  }

  @computed
  get lastHashtagColor() {
    if (this.filterdHashtags.length === 0) return null;
    return this.filterdHashtags[this.filterdHashtags.length - 1].color;
  }

  @action
  saveValidTweets(tweet) {
    const {
      entities: { hashtags },
    } = tweet;

    const validHashtag = hashtags.find(h => hashtagsList.includes(h.text.toLowerCase()));

    if (!validHashtag) return null;
    this.autoObservable.data = tweet;
    this.makeSound();
    this.filterdHashtags.push({ ...validHashtag, id: uuid(), color: rc({ luminosity: 'light' }) });
    return validHashtag;
  }

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
