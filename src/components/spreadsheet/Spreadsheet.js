import {$} from '@core/Dom';
import {Emitter} from '@core/Emitter';

export class Spreadsheet {
  constructor(selector, options) {
    this.$node = $(selector);
    this.components = options.components || [];
    this.emitter = new Emitter();
  }

  getRoot() {
    const $root = $.create('main', 'spreadsheet');
    const componentOptions = {
      emitter: this.emitter,
    };

    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el, componentOptions);

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
