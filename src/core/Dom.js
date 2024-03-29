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

  getSelector(selector) {
    return $(this.$node.querySelector(selector));
  }

  getSelectorAll(selector) {
    return this.$node.querySelectorAll(selector);
  }

  setCss(styles) {
    Object.keys(styles).forEach((property) => {
      this.$node.style[property] = styles[property];
    });
  }

  getStyles(styles = []) {
    return styles.reduce((res, style) => {
      res[style] = this.$node.style[style];
      return res;
    }, {});
  }

  addClass(className) {
    this.$node.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.$node.classList.remove(className);
    return this;
  }

  getId(parse) {
    if (parse) {
      const parsed = this.getId().split(':');

      return {
        row: +parsed[0],
        column: +parsed[1],
      };
    }
    return this.dataAttribute.id;
  }

  setFocus() {
    this.$node.focus();
    return this;
  }

  setText(text) {
    if (typeof text !== 'undefined') {
      this.$node.textContent = text;

      return this;
    }

    if (this.$node.tagName.toLowerCase() === 'input') {
      return this.$node.value.trim();
    }
    return this.$node.textContent.trim();
  }

  attr(name, value) {
    if (value) {
      this.$node.setAttribute(name, value);

      return this;
    }
    return this.$node.getAttribute(name);
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
