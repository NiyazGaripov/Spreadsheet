import {DEFAULT_STYLES, DEFAULT_TITLE} from '@/constants';

const defaultState = {
  title: DEFAULT_TITLE,
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
