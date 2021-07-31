import {storage} from '@/redux/rootReducer';

const defaultState = {
  rowState: {},
  columnState: {},
};

export const initialState = storage('spreadsheet-state') ?
  storage('spreadsheet-state') :
  defaultState;
