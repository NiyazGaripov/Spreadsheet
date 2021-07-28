import {TABLE_RESIZE} from '@/redux/types';

export function rootReducer(state, action) {
  let prevState;

  switch (action.type) {
    case TABLE_RESIZE:
      prevState = state.columnState || {};
      prevState[action.data.id] = action.data.value;
      return {...state, columnState: prevState};
    default: return state;
  }
}

export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }

  localStorage.setItem(key, JSON.stringify(data));
}
