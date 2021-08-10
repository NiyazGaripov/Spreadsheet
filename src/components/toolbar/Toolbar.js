import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {createToolbar} from '@/components/toolbar/toolbar.template';
import {$} from '@core/Dom';

export class Toolbar extends SpreadsheetComponent {
  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options,
    });
  }
  static className = 'spreadsheet__toolbar';

  getTemplate() {
    return createToolbar();
  }

  onClick(evt) {
    const $target = $(evt.target);
    if ($target.dataAttribute.type === 'button') {
      console.log($target.dataAttribute.value);
    }
  }
}
