import {
  CHANGE_TEXT,
  CHANGE_STYLE,
  TABLE_RESIZE,
  APPLY_STYLE,
} from '@/redux/types';

export function rootReducer(state, action) {
  let field;
  let val;
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'column' ? 'columnState' : 'rowState';
      return {...state, [field]: getPrevState(state, field, action)};
    case CHANGE_TEXT:
      field = 'dataState';
      return {
        ...state,
        currentText: action.data.value,
        [field]: getPrevState(state, field, action),
      };
    case CHANGE_STYLE:
      return {...state, currentStyles: action.data};
    case APPLY_STYLE:
      field = 'stylesState';
      val = state[field] || {};
      action.data.ids.forEach((id) => {
        val[id] = {...val[id], ...action.data.value};
      });
      return {
        ...state,
        [field]: val,
        currentStyles: {...state.currentStyles, ...action.data.value},
      };
    default: return state;
  }
}

const getPrevState = (state, field, action) => {
  const prevState = state[field] || {};
  prevState[action.data.id] = action.data.value;
  return prevState;
};
