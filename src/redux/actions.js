import {CHANGE_TEXT, CHANGE_STYLE, TABLE_RESIZE} from '@/redux/types';

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data,
  };
}

export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data,
  };
}

export function changeStyles(data) {
  return {
    type: CHANGE_STYLE,
    data,
  };
}
