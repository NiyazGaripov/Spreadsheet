class Dom {
  constructor(selector) {
    this.$node = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector;
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
