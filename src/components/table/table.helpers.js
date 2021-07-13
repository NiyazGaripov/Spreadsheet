import {range} from '@core/utils';

export const shouldResize = (evt) => {
  return evt.target.dataset.resize;
};

export const isCell = (evt) => {
  return evt.target.dataset.type === 'cell';
};

export const createMatrix = ($target, $current) => {
  const target = $target.getId(true);
  const current = $current.getId(true);
  const columns = range(current.column, target.column);
  const rows = range(current.row, target.row);

  return columns.reduce((acc, column) => {
    rows.forEach((row) => acc.push(`${row}:${column}`));
    return acc;
  }, []);
};

export const nextSelector = (key, id) => {
  const MIN_VALUE = 0;
  let {row, column} = id;

  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row += 1;
      break;
    case 'Tab':
    case 'ArrowRight':
      column += 1;
      break;
    case 'ArrowLeft':
      column = column - 1 < MIN_VALUE ? MIN_VALUE : column - 1;
      break;
    case 'ArrowUp':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1;
      break;
    default:
      return;
  }

  return `[data-id="${row}:${column}"]`;
};
