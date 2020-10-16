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
}
