import {Listener} from '@core/Listener';

export class SpreadsheetComponent extends Listener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
    this.unsubscribers = [];

    this.prepare();
  }

  getTemplate() {
    return '';
  }

  prepare() {}

  $emit(evt, ...args) {
    this.emitter.emit(evt, ...args);
  }

  $on(evt, fn) {
    const unsubscribe = this.emitter.subscribe(evt, fn);
    this.unsubscribers.push(unsubscribe);
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key);
  }

  init() {
    this.initListeners();
  }

  destroy() {
    this.removeListeners();
    this.unsubscribers.forEach((unsubscribe) => unsubscribe());
  }
}
