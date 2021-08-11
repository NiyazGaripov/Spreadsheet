import {createToolbar} from '@/components/toolbar/toolbar.template';
import {$} from '@core/Dom';
import {SpreadsheetStateComponent} from '@core/SpreadsheetStateComponent';
import {DEFAULT_STYLES} from '@/constants';

export class Toolbar extends SpreadsheetStateComponent {
  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options,
    });
  }
  static className = 'spreadsheet__toolbar';

  prepare() {
    this.initState(DEFAULT_STYLES);
  }

  get template() {
    return createToolbar(this.state);
  }

  getTemplate() {
    return this.template;
  }

  onClick(evt) {
    const $target = $(evt.target);
    if ($target.dataAttribute.type === 'button') {
      const value = JSON.parse($target.dataAttribute.value);
      this.$emit('toolbar:applyStyle', value);
      const key = Object.keys(value)[0];
      this.setState({[key]: value[key]});
    }
  }
}
