import {Router} from '@core/routes/Router';
import {DashboardPage} from '@/pages/DashboardPage';
import {SpreadsheetPage} from '@/pages/SpreadsheetPage';
import './scss/index.scss';

new Router('#app', {
  dashboard: DashboardPage,
  spreadsheet: SpreadsheetPage,
});
