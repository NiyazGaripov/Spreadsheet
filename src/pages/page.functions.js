const createSpreadsheetItem = () => {
  return (`
    <li class="dashboard__item">
      <a class="dashboard__record" href="#">
        <h3 class="dashboard__name">First table</h3>
        <span>12.06.2020</span>
      </a>
    </li>
  `);
};

const getAllSpreadsheets = () => {
  const spreadsheets = [];

  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (!key.includes('spreadsheet')) {
      continue;
    }
    spreadsheets.push(key);
  }

  return spreadsheets;
};
