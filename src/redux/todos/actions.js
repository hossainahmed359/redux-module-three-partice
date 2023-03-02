import {
  ADD_TODO,
  COLOR_SELECT_TODO,
  COMPLETE_ALL_TODO,
  CLEAR_COMPLETED_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "./actionTypes";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      text,
    },
  };
};

export const clearCompletedTodo = () => {
  return {
    type: CLEAR_COMPLETED_TODO,
  };
};

export const colorSelectTodo = (todoId, color) => {
  return {
    type: COLOR_SELECT_TODO,
    payload: {
      todoId,
      color,
    },
  };
};

export const completeAllTodo = () => {
  return {
    type: COMPLETE_ALL_TODO,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: {
      todoId,
    },
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      todoId,
    },
  };
};