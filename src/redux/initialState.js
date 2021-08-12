import {storage} from '@core/utils';
import {DEFAULT_STYLES} from '@/constants';

const defaultState = {
  rowState: {},
  columnState: {},
  dataState: {},
  currentText: '',
  currentStyles: DEFAULT_STYLES,
};

export const initialState = storage('spreadsheet-state') ?
  storage('spreadsheet-state') :
  defaultState;
