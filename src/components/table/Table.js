import {$} from '@core/Dom';
import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {createTableComponent} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {
  createMatrix,
  isCell,
  shouldResize,
} from '@/components/table/table.helpers';
import {TableSelection} from '@/components/table/TableSelection';

export class Table extends SpreadsheetComponent {
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
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
}
