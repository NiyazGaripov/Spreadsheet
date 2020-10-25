const ASCII_CODES = {
  A: 65,
  Z: 90,
};

const createRow = (content) => {
  console.log(content);

  return (
    `<div class="row">
        <div class="row-info"></div>
        <div class="row-data">${content}</div>
    </div>`
  );
};

const createCololumn = (column) => {
  return (
    `<div class="column">${column}</div>`
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
