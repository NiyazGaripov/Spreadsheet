import {storage} from '@core/utils';

const createSpreadsheetItem = (key) => {
  const data = storage(key);
  const href = key.split(':')[1];

  return (`
    <li class="dashboard__item">
      <a class="dashboard__record" href="#spreadsheet/${href}">
        <h3 class="dashboard__name">${data.title}</h3>
        <span>
            ${new Date(data.openedDate).toLocaleDateString()}
            ${new Date(data.openedDate).toLocaleTimeString()}
        </span>
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
