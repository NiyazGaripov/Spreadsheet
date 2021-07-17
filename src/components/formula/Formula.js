import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

export class Formula extends SpreadsheetComponent {
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
      ...options,
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

  onInput(evt) {
    const text = evt.target.textContent.trim();
    this.$emit('formula:input', text);
  }
}
