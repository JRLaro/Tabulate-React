import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import NoteContext from "./noteContext";
import noteReducer from "./noteReducer";
import {
  ADD_NOTE,
  DELETE_NOTE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_NOTE,
  FILTER_NOTE,
  CLEAR_FILTER,
} from "../types";

const NoteState = (props) => {
  const initialState = {
    notes: [
      {
        id: 1,
        title: " First TITLE",
        body:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 2,
        title: "Second TITLE",
        body: " Second Body",
      },
      {
        id: 3,
        title: "Third TITLE",
        body: " Third Body",
      },
      {
        id: 4,
        title: "Fourth TITLE",
        body: " Fourth Body",
      },
    ],
    current: null
  };

  const [state, dispatch] = useReducer(noteReducer, initialState);

  //Add Note
  const addNote = (note) => {
    note.id = uuidv4();
    dispatch({ type: ADD_NOTE, payload: note });
  };

  //Delete Note

  const deleteNote = (id) => {
    dispatch({ type: DELETE_NOTE, payload: id });
  };
  
  //Set Current Note
  const setCurrent = (note) => {
    dispatch({ type: SET_CURRENT, payload: note });
  };
  
  //Clear Current Note
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Update Note
  const updateNote = (note) => {
    dispatch({ type: UPDATE_NOTE, payload: note });
  };
  //Filter Note

  //Clear Filter

  return (
    <NoteContext.Provider
      value={{
        notes: state.notes,
        current: state.current,
        addNote,
        deleteNote,
        setCurrent,
        clearCurrent,
        updateNote
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
