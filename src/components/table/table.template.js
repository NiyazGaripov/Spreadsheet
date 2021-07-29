const ASCII_CODES = {
  A: 65,
  Z: 90,
};

const DEFAULT_WIDTH = 120;

const getCharCode = (_, index) => {
  return String.fromCharCode(ASCII_CODES.A + index);
};

const getColumnWidth = (state, index) => {
  return (state[index] || DEFAULT_WIDTH) + 'px';
};

const widthFrom = (state) => {
  return function(column, index) {
    return {
      column,
      index,
      width: getColumnWidth(state.columnState, index),
    };
  };
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

const createColumn = ({column, index, width}) => {
  return (
    `<div
        class="column"
        data-type="resizable"
        data-column="${index}"
        style="width: ${width}">
        ${column}
        <div class="column-resize" data-resize="column"></div>
    </div>`
  );
};

const createCell = (state, row) => {
  return function(cell, column) {
    const width = getColumnWidth(state.columnState, column);
    return (
      `<div
        class="cell"
        contenteditable
        data-column="${column}"
        data-id="${row}:${column}"
        data-type="cell"
        style="width: ${width}">
      </div>`
    );
  };
};

export const createTableComponent = (rowCount = 10, state = {}) => {
  const rows = [];
  const colsCount = ASCII_CODES.Z - ASCII_CODES.A + 1;
  const columns = new Array(colsCount)
      .fill(``)
      .map(getCharCode)
      .map(widthFrom(state))
      .map(createColumn)
      .join(``);

  rows.push(createRow(columns));

  for (let row = 0; row < rowCount; row += 1) {
    const cells = new Array(colsCount)
        .fill(``)
        .map(createCell(state, row))
        .join(``);

    rows.push(createRow(cells, row + 1));
  }

  return rows.join(``);
};
