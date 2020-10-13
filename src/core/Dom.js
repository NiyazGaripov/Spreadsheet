class Dom {

}

export function $() {
  return new Dom();
}

$.create = (tagName, classes) => {
  const node = document.createElement(tagName);

  if (classes) {
    node.classList.add(classes);
  }

  return node;
};
