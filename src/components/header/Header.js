import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {$} from '@core/Dom';
import {changeTitle} from '@/redux/actions';
import {DEFAULT_TITLE} from '@/constants';
import {debounce} from '@core/utils';

export class Header extends SpreadsheetComponent {
  static className = 'spreadsheet__header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options,
    });
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300);
  }

  getTemplate() {
    const title = this.store.getState().title || DEFAULT_TITLE;
    return (
      `<input type="text" value="${title}"/>

      <div>
        <button type="button">
          <i class="material-icons">delete</i>
        </button>

        <button type="button">
          <i class="material-icons">exit_to_app</i>
        </button>
      </div>`
    );
  }

  onInput(evt) {
    const $target = $(evt.target);
    this.$dispatch(changeTitle($target.setText()));
  }
}
