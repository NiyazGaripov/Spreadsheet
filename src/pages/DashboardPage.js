import {Page} from '@core/Page';
import {$} from '@core/Dom';
import {createDashboardList} from '@/pages/page.functions';

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString();
    return $.create('main', 'dashboard').html(`
      <header class="dashboard__header">
        <div>
          <i class="material-icons logo">insert_drive_file</i>
          <h1 class="dashboard__title">Spreadsheet</h1>
        </div>

        <form class="dashboard__search" action="#">
          <input type="text" placeholder="Search">

          <button type="submit">
            <i class="material-icons">search</i>
          </button>
        </form>
      </header>

      <section class="dashboard__sheets">
        <div class="wrapper">
          <h2>Create new spreadsheet</h2>

          <ul>
            <li>
              <a class="dashboard__create" href="#spreadsheet/${now}">
                <i class="material-icons">note_add</i>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="dashboard__history">
        <h2 class="visually-hidden">Spreadsheet history list</h2>

        <div class="wrapper">
            ${createDashboardList()}
        </div>
      </section>
    `);
  }
}
