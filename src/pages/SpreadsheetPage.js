import {Page} from '@core/Page';
import {createStore} from '@core/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {normalizeInitialState} from '@/redux/initialState';
import {debounce, storage} from '@core/utils';
import {Spreadsheet} from '@/components/spreadsheet/Spreadsheet';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';

const createKeyName = (param) => {
  return `spreadsheet:${param}`;
};

export class SpreadsheetPage extends Page {
  getRoot() {
    const params = this.params ? this.params : Date.now().toString();
    const state = storage(createKeyName(params));
    const store = createStore(rootReducer, normalizeInitialState(state));
    const stateListener = debounce((state) => {
      storage(createKeyName(params), state);
    }, 500);

    store.subscribe(stateListener);

    this.spreadsheet = new Spreadsheet( {
      components: [
        Header,
        Toolbar,
        Formula,
        Table,
      ],
      store,
    });
    return this.spreadsheet.getRoot();
  }

  afterRender() {
    this.spreadsheet.init();
  }

  destroy() {
    this.spreadsheet.destroy();
  }
}
