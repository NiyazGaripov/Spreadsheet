import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

export class Toolbar extends SpreadsheetComponent {
  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    });
  }
  static className = 'spreadsheet__toolbar';

  getTemplate() {
    return (
      `<h2 class="visually-hidden">Toolbar</h2>

        <button type="button">
          <i class="material-icons">format_align_left</i>
        </button>

        <button type="button">
          <i class="material-icons">format_align_center</i>
        </button>

        <button type="button">
          <i class="material-icons">format_align_right</i>
        </button>

        <button type="button">
          <i class="material-icons">format_bold</i>
        </button>

        <button type="button">
          <i class="material-icons">format_italic</i>
        </button>

        <button type="button">
          <i class="material-icons">format_underlined</i>
        </button>`
    );
  }
}
