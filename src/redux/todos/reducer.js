import {
  ADD_TODO,
  COLOR_SELECT_TODO,
  COMPLETE_ALL_TODO,
  CLEAR_COMPLETED_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "./actionTypes";
import { initialState } from "./initialState";

function createTodoId(todos = []) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TODO:
      return [
        ...state,
        {
          id: createTodoId(state),
          text: action.payload.text,
        },
      ];

    case COLOR_SELECT_TODO:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          color,
        };
      });

    case COMPLETE_ALL_TODO:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEAR_COMPLETED_TODO:
      return state.filter((todo) => !todo.completed);

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.todoId);

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
      
    default:
      return state;
  }
};

export default reducer;
