import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {createTableComponent} from '@/components/table/table.template';

export class Table extends SpreadsheetComponent {
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: [],
    });
  }

  static className = 'spreadsheet__table';

  getTemplate() {
    return createTableComponent(20);
  }
}
