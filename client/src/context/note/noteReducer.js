import {
  ADD_NOTE,
  DELETE_NOTE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_NOTE,
  FILTER_NOTE,
  CLEAR_FILTER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
      case UPDATE_NOTE:
        return {
          ...state,
          notes: state.notes.map(note => note.id === action.payload.id ? action.payload : note)
        };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note=> note.id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
