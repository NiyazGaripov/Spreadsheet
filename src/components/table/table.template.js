const ASCII_CODES = {
  A: 65,
  Z: 90,
};

const createRow = (content, index = ``) => {
  const resizeElement = index ? `<div class="row-resize"></div>` : ``;

  return (
    `<div class="row">
        <div class="row-info">
            ${index}
            ${resizeElement}
        </div>
        <div class="row-data">${content}</div>
    </div>`
  );
};

const createCololumn = (column) => {
  return (
    `<div class="column">
        ${column}
        <div class="column-resize"></div>
    </div>`
  );
};

const createCell = (cell) => {
  return (
    `<div class="cell" contenteditable>${cell}</div>`
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
