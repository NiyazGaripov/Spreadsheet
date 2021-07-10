import {Listener} from '@core/Listener';

export class SpreadsheetComponent extends Listener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';

    this.prepare();
  }

  getTemplate() {
    return '';
  }

  prepare() {}

  init() {
    this.initListeners();
  }

  destroy() {
    console.log('remove');
    this.removeListeners();
  }
}
