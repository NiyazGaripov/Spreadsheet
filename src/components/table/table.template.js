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

function createCell(row) {
  return function(cell, column) {
    return (
      `<div
        class="cell"
        contenteditable
        data-column="${column}"
        data-id="${row}:${column}">
      </div>`
    );
  };
}

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

  rows.push(createRow(columns));

  for (let row = 0; row < rowCount; row += 1) {
    const cells = new Array(colsCount)
        .fill(``)
        .map(createCell(row))
        .join(``);

    rows.push(createRow(cells, row + 1));
  }

  return rows.join(``);
};
