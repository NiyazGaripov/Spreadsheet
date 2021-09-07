import {$} from '@core/Dom';
import {Emitter} from '@core/Emitter';
import {StoreSubscriber} from '@core/StoreSubscriber';
import {updateDate} from '@/redux/actions';
import {preventDefault} from '@core/utils';

export class Spreadsheet {
  constructor(options) {
    this.components = options.components || [];
    this.store = options.store;
    this.emitter = new Emitter();
    this.storeSubscriber = new StoreSubscriber(this.store);
  }

  getRoot() {
    const $root = $.create('main', 'spreadsheet');
    const componentOptions = {
      emitter: this.emitter,
      store: this.store,
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

  init() {
    if (process.env.NODE_ENV === 'production') {
      document.addEventListener('contextmenu', preventDefault);
    }
    this.store.dispatch(updateDate());
    this.storeSubscriber.subscribeComponents(this.components);
    this.components.forEach((component) => component.init());
  }

  destroy() {
    this.storeSubscriber.unsubscribeFromStore();
    this.components.forEach((component) => component.destroy());
    document.removeEventListener('contextmenu', preventDefault);
  }
}
