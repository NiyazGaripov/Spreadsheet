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
      <div
        id="formula-bar"
        class="formula-bar"
        contenteditable
        spellcheck="false">
      </div>`
    );
  }

  init() {
    super.init();

    this.$formula = this.$root.getSelector('#formula-bar');
    console.log('this.$formula', this.$formula);

    this.$on('table:select', ($cell) => {
      console.log('$cell', $cell);
      this.$formula.setText($cell.setText());
    });
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
