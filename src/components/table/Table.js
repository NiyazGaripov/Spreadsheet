import {$} from '@core/Dom';
import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {createTableComponent} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {
  createMatrix,
  isCell,
  nextSelector,
  shouldResize,
} from '@/components/table/table.helpers';
import {TableSelection} from '@/components/table/TableSelection';

export class Table extends SpreadsheetComponent {
  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown'],
      ...options,
    });
  }

  static className = 'spreadsheet__table';

  getTemplate() {
    return createTableComponent(20);
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const $cell = this.$root.getSelector('[data-id="0:0"]');
    this.selection.select($cell);

    this.$on('formula:input', (text) => {
      this.selection.current.setText(text);
    });

    this.$on('formula:done', () => {
      this.selection.current.setFocus();
    });
  }

  onMousedown(evt) {
    if (shouldResize(evt)) {
      resizeHandler(this.$root, evt);
    } else if (isCell(evt)) {
      const $target = $(evt.target);

      if (evt.shiftKey) {
        const $cells = createMatrix($target, this.selection.current)
            .map((id) => this.$root.getSelector(`[data-id="${id}"]`));
        this.selection.selectGroup($cells);
      } else {
        this.selection.select($target);
      }
    }
  }

  onKeydown(evt) {
    const {key} = evt;

    const keys = [
      'Enter',
      'Tab',
      'ArrowRight',
      'ArrowDown',
      'ArrowLeft',
      'ArrowUp',
    ];

    if (keys.includes(key) && !evt.shiftKey) {
      evt.preventDefault();
      const id = this.selection.current.getId(true);
      const $next = this.$root.getSelector(nextSelector(key, id));

      this.selection.select($next);
      this.$emit('table:select', $next);
    }
  }
}
