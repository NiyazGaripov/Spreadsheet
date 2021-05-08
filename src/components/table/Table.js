import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {createTableComponent} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.helpers';

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

  onMousedown(evt) {
    if (shouldResize(evt)) {
      resizeHandler(this.$root, evt);
    }
  }
}
