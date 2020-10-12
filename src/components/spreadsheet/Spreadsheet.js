export class Spreadsheet {
  constructor(selector, options) {
    this._$node = document.querySelector(selector);
    this.components = options.components || [];
  }
}
