import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {createTableComponent} from '@/components/table/table.template';

export class Table extends SpreadsheetComponent {
  static className = 'spreadsheet__table';

  getTemplate() {
    return createTableComponent();
  }
}
