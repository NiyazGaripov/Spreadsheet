export const capitalize = (string) => {
  if (typeof string !== 'string') {
    return '';
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const range = (start, end) => {
  if (start > end) {
    [end, start] = [start, end];
  }
  return new Array(end - start + 1)
      .fill('')
      .map((_, index) => start + index);
};

export const isEqual = (a, b) => {
  if (typeof a === 'object' && typeof b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return a === b;
};

export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }

  localStorage.setItem(key, JSON.stringify(data));
}

export const camelToDashCase = (string) => {
  return string.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
};

export const toInlineStyles = (styles = {}) => {
  return Object.keys(styles)
      .map((key) => `${camelToDashCase(key)}: ${styles[key]}`)
      .join(';');
};

export const debounce = (func, ms) => {
  let timeout;

  return function(...args) {
    const later = () => {
      clearTimeout(timeout);
      // eslint-disable-next-line no-invalid-this
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, ms);
  };
};

export const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const preventDefault = (evt) => {
  evt.preventDefault();
};
