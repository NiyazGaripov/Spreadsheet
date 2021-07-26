import {Listener} from '@core/Listener';

export class SpreadsheetComponent extends Listener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.store = options.store;
    this.emitter = options.emitter;
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

  init() {
    this.initListeners();
  }

  destroy() {
    this.removeListeners();
    this.unsubscribers.forEach((unsubscribe) => unsubscribe());
  }
}
