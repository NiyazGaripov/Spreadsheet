import {Listener} from '@core/Listener';

export class SpreadsheetComponent extends Listener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  getTemplate() {
    return '';
  }

  init() {
    this.initListeners();
  }
}
