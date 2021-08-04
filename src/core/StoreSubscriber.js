import {isEqual} from '@core/utils';

export class StoreSubscriber {
  constructor(store) {
    this.store = store;
    this.subscribe = null;
    this.prevState = {};
  }
}
