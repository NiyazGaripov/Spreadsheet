export const parse = (value = '') => {
  if (value.startsWith('=')) {
    try {
      // TODO implement parser for math operations instead of eval
      return eval(value.slice(1));
    } catch (error) {
      console.warn('Skip parse error', error.message);
      return value;
    }
  }

  return value;
};
