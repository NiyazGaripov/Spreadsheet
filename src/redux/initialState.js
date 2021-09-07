import {DEFAULT_STYLES, DEFAULT_TITLE} from '@/constants';
import {clone} from '@core/utils';

const defaultState = {
  title: DEFAULT_TITLE,
  rowState: {},
  columnState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: DEFAULT_STYLES,
  openedDate: new Date().toJSON(),
};

const normalize = (state) => ({
  ...state,
  currentStyles: DEFAULT_STYLES,
  currentText: '',
});

export const normalizeInitialState = (state) => {
  return state ? normalize(state) : clone(defaultState);
};
