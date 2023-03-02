import { FILTER_STATUS_CHANGE, FILTER_COLOR_CHANGE } from "./actionTypes";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_STATUS_CHANGE:
      return {
        ...state,
        status: action.payload.status,
      };

    case FILTER_COLOR_CHANGE:
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;
