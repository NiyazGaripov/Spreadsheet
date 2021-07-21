export class Emitter {
  constructor() {
    this.listeners = {};
  }

  emit(evt, ...args) {
    if (!Array.isArray(this.listeners[evt])) {
      return false;
    }

    this.listeners[evt].forEach((listener) => {
      listener(...args);
    });

    return true;
  }

  subscribe(evt, fn) {
    this.listeners[evt] = this.listeners[evt] || [];
    this.listeners[evt].push(fn);

    return () => {
      this.listeners[evt] =
        this.listeners[evt].filter((listener) => listener !== fn);
    };
  }
}
