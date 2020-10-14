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
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes) => {
  const node = document.createElement(tagName);

  if (classes) {
    node.classList.add(classes);
  }

  return node;
};
