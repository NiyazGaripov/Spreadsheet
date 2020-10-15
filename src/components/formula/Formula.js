import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

export class Formula extends SpreadsheetComponent {
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }
  static className = 'spreadsheet__formula';

  getTemplate() {
    return (
      `<h2 class="visually-hidden">Formula</h2>

      <div class="info">𝑓𝑥</div>
      <div class="formula-bar" contenteditable spellcheck="false"></div>`
    );
  }
}
