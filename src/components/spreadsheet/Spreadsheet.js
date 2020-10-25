import {$} from '@core/Dom';

export class Spreadsheet {
  constructor(selector, options) {
    this.$node = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('main', 'spreadsheet');

    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);

      $el.html(component.getTemplate());
      $root.append($el);

      return component;
    });

    return $root;
  }

  render() {
    this.$node.append(this.getRoot());

    this.components.forEach((component) => component.init());
  }
}
