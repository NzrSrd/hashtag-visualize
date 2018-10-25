import { onBecomeObserved, onBecomeUnobserved, decorate, observable } from 'mobx';

class AutoObservable {
  constructor(onObserved, onUnobserved) {
    onBecomeObserved(this, 'data', onObserved);
    onBecomeUnobserved(this, 'data', onUnobserved);
  }
}

decorate(AutoObservable, {
  data: observable,
});

export default AutoObservable;
