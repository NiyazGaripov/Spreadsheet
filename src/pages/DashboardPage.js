import {Page} from '@core/Page';
import {$} from '@core/Dom';

export class DashboardPage extends Page {
  getRoot() {
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
              <a class="dashboard__create" href="#">
                <i class="material-icons">note_add</i>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="dashboard__history">
        <h2 class="visually-hidden">Spreadsheet history list</h2>

        <div class="wrapper">
          <div class="dashboard__list">
            <span>Name</span>
            <span>Last opened by me</span>
          </div>

          <ul>
            <li class="dashboard__item">
              <a class="dashboard__record" href="#">
                <h3 class="dashboard__name">First table</h3>
                <span>12.06.2020</span>
              </a>
            </li>

            <li class="dashboard__item">
              <a class="dashboard__record" href="#">
                <h3 class="dashboard__name">First table</h3>
                <span>12.06.2020</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    `);
  }
}
