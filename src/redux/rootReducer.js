import {CHANGE_TEXT, TABLE_RESIZE} from '@/redux/types';

export function rootReducer(state, action) {
  let field;
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
    default: return state;
  }
}

const getPrevState = (state, field, action) => {
  const prevState = state[field] || {};
  prevState[action.data.id] = action.data.value;
  return prevState;
};
