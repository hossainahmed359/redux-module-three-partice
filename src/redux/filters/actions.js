import { FILTER_STATUS_CHANGE, FILTER_COLOR_CHANGE } from "./actionTypes";

export const filterColorChange = (color, changeType) => {
  return {
    type: FILTER_COLOR_CHANGE,
    payload: {
      color,
      changeType,
    },
  };
};

export const filterStatusChange = (status) => {
  return {
    type: FILTER_STATUS_CHANGE,
    payload: {
      status,
    },
  };
};
