import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {$} from '@core/Dom';
import {changeTitle} from '@/redux/actions';
import {DEFAULT_TITLE} from '@/constants';
import {debounce} from '@core/utils';
import {ActiveRoute} from '@core/routes/ActiveRoute';

export class Header extends SpreadsheetComponent {
  static className = 'spreadsheet__header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
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
        <button type="button" data-button="delete">
          <i class="material-icons" data-button="delete">delete</i>
        </button>

        <button type="button" data-button="exit">
          <i class="material-icons" data-button="exit">exit_to_app</i>
        </button>
      </div>`
    );
  }

  onInput(evt) {
    const $target = $(evt.target);
    this.$dispatch(changeTitle($target.setText()));
  }

  onClick(evt) {
    const $target = $(evt.target);

    if ($target.dataAttribute.button === 'delete') {
      const confirmation = confirm('Do you really want to delete this table?');

      if (confirmation) {
        localStorage.removeItem('spreadsheet:' + ActiveRoute.param);
        ActiveRoute.navigate('');
      }
    } else if ($target.dataAttribute.button === 'exit') {
      ActiveRoute.navigate('');
    }
  }
}
