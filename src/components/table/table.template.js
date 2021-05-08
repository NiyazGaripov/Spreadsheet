const ASCII_CODES = {
  A: 65,
  Z: 90,
};

const createRow = (content, index = ``) => {
  const resizeElement = index ?
    `<div class="row-resize" data-resize="row"></div>` :
    ``;

  return (
    `<div class="row" data-type="resizable">
        <div class="row-info">
            ${index}
            ${resizeElement}
        </div>
        <div class="row-data">${content}</div>
    </div>`
  );
};

const createCololumn = (column, index) => {
  return (
    `<div class="column" data-type="resizable" data-column="${index}">
        ${column}
        <div class="column-resize" data-resize="column"></div>
    </div>`
  );
};

const createCell = (cell, column) => {
  return (
    `<div class="cell" data-column="${column}" contenteditable>${cell}</div>`
  );
};

const getCharCode = (_, index) => {
  return String.fromCharCode(ASCII_CODES.A + index);
};

export const createTableComponent = (rowCount = 10) => {
  const rows = [];
  const colsCount = ASCII_CODES.Z - ASCII_CODES.A + 1;
  const columns = new Array(colsCount)
      .fill(``)
      .map(getCharCode)
      .map(createCololumn)
      .join(``);

  const cells = new Array(colsCount)
      .fill(``)
      .map(createCell)
      .join(``);

  rows.push(createRow(columns));

  for (let i = 0; i < rowCount; i += 1) {
    rows.push(createRow(cells, i + 1));
  }

  return rows.join(``);
};
