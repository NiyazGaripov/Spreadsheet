export const shouldResize = (evt) => {
  return evt.target.dataset.resize;
};

export const isCell = (evt) => {
  return evt.target.dataset.type === 'cell';
};
