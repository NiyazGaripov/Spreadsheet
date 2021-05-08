class Dom {
  constructor(selector) {
    this.$node = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$node.innerHTML = html;

      return this;
    }
    return this.$node.outerHTML.trim();
  }

  append(el) {
    if (el instanceof Dom) {
      el = el.$node;
    }

    if (Element.prototype.append) {
      this.$node.append(el);
    } else {
      this.$node.appendChild(el);
    }

    return this;
  }

  on(eventType, callback) {
    this.$node.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.$node.removeEventListener(eventType, callback);
  }

  clear() {
    this.html('');

    return this;
  }

  closest(selector) {
    return $(this.$node.closest(selector));
  }

  getCoords() {
    return this.$node.getBoundingClientRect();
  }

  getSlectorAll(selector) {
    return this.$node.querySelectorAll(selector);
  }

  get dataAttribute() {
    return this.$node.dataset;
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const node = document.createElement(tagName);

  if (classes) {
    node.classList.add(classes);
  }

  return $(node);
};
