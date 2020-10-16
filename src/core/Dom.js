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

  clear() {
    this.html('');

    return this;
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
