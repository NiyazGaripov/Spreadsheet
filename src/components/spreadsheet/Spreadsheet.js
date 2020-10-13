import {$} from '@core/Dom';

export class Spreadsheet {
  constructor(selector, options) {
    this._$node = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('main', 'spreadsheet');

    this.components.forEach((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);

      $el.innerHTML = component.getTemplate();

      $root.appendChild($el);
    });

    return $root;
  }

  render() {
    this._$node.appendChild(this.getRoot());
  }
}
