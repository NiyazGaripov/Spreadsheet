import {
  CHANGE_TEXT,
  CHANGE_STYLE,
  TABLE_RESIZE,
  APPLY_STYLE,
} from '@/redux/types';

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

export function applyStyle(data) {
  return {
    type: APPLY_STYLE,
    data,
  };
}
