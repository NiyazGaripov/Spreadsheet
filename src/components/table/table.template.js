const ASCII_CODES = {
  A: 65,
  Z: 90,
};

const createRow = () => {
  return (
    `<div class="row">
        <div class="row-info"></div>
        <div class="row-data"></div>
    </div>`
  );
};

const createCololumn = () => {
  return (
    `<div class="column"></div>`
  );
};

const createCell = () => {
  return (
    `<div class="cell" contenteditable></div>`
  );
};

export const createTableComponent = (rowCount = 10) => {
  const colsCount = ASCII_CODES.Z - ASCII_CODES.A;
};
