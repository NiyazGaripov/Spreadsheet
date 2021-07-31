import {Spreadsheet} from '@/components/spreadsheet/Spreadsheet';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';
import {createStore} from '@core/createStore';
import {rootReducer, storage} from '@/redux/rootReducer';
import {initialState} from '@/redux/initialState';

import './scss/index.scss';

const store = createStore(rootReducer, initialState);

store.subscribe((state) => {
  console.log('APPS', state);
  storage('spreadsheet-state', state);
});

const spreadsheet = new Spreadsheet('#app', {
  components: [
    Header,
    Toolbar,
    Formula,
    Table,
  ],
  store,
});
spreadsheet.render();
