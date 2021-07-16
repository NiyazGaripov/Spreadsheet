import {Listener} from '@core/Listener';

export class SpreadsheetComponent extends Listener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
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
    const unsubscribe = this.emitter.subscribe(evt, ...fn);
    this.unsubscribers.push(unsubscribe);
  }

  init() {
    this.initListeners();
  }

  destroy() {
    this.removeListeners();
    this.unsubscribers.forEach((unsubscribe) => unsubscribe());
  }
}
