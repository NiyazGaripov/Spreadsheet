import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {$} from '@core/Dom';

export class Formula extends SpreadsheetComponent {
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
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
    this.$emit('formula:input', $(evt.target).setText());
  }

  onKeydown(evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();

      this.$emit('formula:done');
    }
  }
}
