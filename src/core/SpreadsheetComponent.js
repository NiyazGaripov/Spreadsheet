import {Listener} from '@core/Listener';

export class SpreadsheetComponent extends Listener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }

  getTemplate() {
    return '';
  }

  init() {
    this.initListeners();
  }
}
