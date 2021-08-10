import {createToolbar} from '@/components/toolbar/toolbar.template';
import {$} from '@core/Dom';
import {SpreadsheetStateComponent} from '@core/SpreadsheetStateComponent';

export class Toolbar extends SpreadsheetStateComponent {
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
      const value = JSON.parse($target.dataAttribute.value);
      const key = Object.keys(value)[0];
      this.setState({[key]: value[key]});
    }
  }
}
