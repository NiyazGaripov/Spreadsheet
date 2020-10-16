import {capitalize} from '@core/utils';

const getCallbackName = (eventName) => {
  return 'on' + capitalize(eventName);
};

export class Listener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root');
    }

    this.$root = $root;
    this.listeners = listeners;
  }

  initListeners() {
    this.listeners.forEach((listener) => {
      const method = getCallbackName(listener);

      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implemented in ${this.name} Component`
        );
      }

      this.$root.on(listener, this[method].bind(this));
    });
  }
}
