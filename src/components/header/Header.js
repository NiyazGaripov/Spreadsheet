import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

export class Header extends SpreadsheetComponent {
  static className = 'spreadsheet__header';

  getTemplate() {
    return (
      `<input type="text" value="Untitled spreadsheet"/>

      <div>
        <button type="button">
          <i class="material-icons">delete</i>
        </button>

        <button type="button">
          <i class="material-icons">exit_to_app</i>
        </button>
      </div>`
    );
  }
}
