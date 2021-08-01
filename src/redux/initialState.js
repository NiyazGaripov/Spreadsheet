import {storage} from '@/redux/rootReducer';

const defaultState = {
  rowState: {},
  columnState: {},
  dataState: {},
  currentText: '',
};

export const initialState = storage('spreadsheet-state') ?
  storage('spreadsheet-state') :
  defaultState;
