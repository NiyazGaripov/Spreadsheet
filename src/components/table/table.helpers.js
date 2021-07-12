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
