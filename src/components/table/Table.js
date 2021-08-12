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
import * as actions from '@/redux/actions';
import {DEFAULT_STYLES} from '@/constants';

export class Table extends SpreadsheetComponent {
  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options,
    });
  }

  static className = 'spreadsheet__table';

  getTemplate() {
    return createTableComponent(20, this.store.getState());
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const $cell = this.$root.getSelector('[data-id="0:0"]');
    this.selectCell($cell);

    this.$on('formula:input', (text) => {
      this.selection.current.setText(text);
      this.updateTextInStore(text);
    });

    this.$on('formula:done', () => {
      this.selection.current.setFocus();
    });

    this.$on('toolbar:applyStyle', (style) => {
      this.selection.applyStyle(style);
    });
  }

  selectCell($cell) {
    const styles = $cell.getStyles(Object.keys(DEFAULT_STYLES));
    this.selection.select($cell);
    this.$emit('table:select', $cell);
    this.$dispatch(actions.changeStyles(styles));
  }

  async resizeTable(evt) {
    try {
      const data = await resizeHandler(this.$root, evt);
      this.$dispatch(actions.tableResize(data));
      console.log('DATA', data);
    } catch (e) {
      console.log('ERROR', e.message);
    }
  }

  updateTextInStore(value) {
    this.$dispatch(actions.changeText({
      id: this.selection.current.getId(),
      value,
    }));
  }

  onMousedown(evt) {
    if (shouldResize(evt)) {
      this.resizeTable(evt);
    } else if (isCell(evt)) {
      const $target = $(evt.target);

      if (evt.shiftKey) {
        const $cells = createMatrix($target, this.selection.current)
            .map((id) => this.$root.getSelector(`[data-id="${id}"]`));
        this.selection.selectGroup($cells);
      } else {
        this.selectCell($target);
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

      this.selectCell($next);
    }
  }

  onInput(evt) {
    this.updateTextInStore($(evt.target).setText());
  }
}
