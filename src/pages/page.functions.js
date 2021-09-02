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

export const createDashboardList = () => {
  const keys = getAllSpreadsheets();

  if (keys.length === 0) {
    return `<p class="empty">No tables have been created yet</p>`;
  }

  return (`
    <div class="dashboard__list">
      <span>Name</span>
      <span>Last opened by me</span>
    </div>

    <ul>
        ${keys.map(createSpreadsheetItem).join('')}
    </ul>
  `);
};
