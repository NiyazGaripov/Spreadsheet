import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {createToolbar} from '@/components/toolbar/toolbar.template';

export class Toolbar extends SpreadsheetComponent {
  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      ...options,
    });
  }
  static className = 'spreadsheet__toolbar';

  getTemplate() {
    return createToolbar();
  }
}
