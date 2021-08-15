import {storage} from '@core/utils';
import {DEFAULT_STYLES} from '@/constants';

const defaultState = {
  rowState: {},
  columnState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: DEFAULT_STYLES,
};

const normalize = (state) => ({
  ...state,
  currentStyles: DEFAULT_STYLES,
  currentText: '',
});

export const initialState = storage('spreadsheet-state') ?
  normalize(storage('spreadsheet-state')) :
  defaultState;
