import React, { useReducer } from "react";
import uuid from "uuid";
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
        title: "The First TITLE",
        body: "The First Body",
      },
      {
        id: 2,
        title: "The Second TITLE",
        body: "The Second Body",
      },
      {
        id: 3,
        title: "The Third TITLE",
        body: "The Third Body",
      },
      {
        id: 4,
        title: "The Fourth TITLE",
        body: "The Fourth Body",
      },
    ],
  };
    
    const [state, dispatch] = useReducer(noteReducer, initialState);

    //Add Note


    //Delete Note


    //Set Current Note


    //Clear Current Note


    //Update Note


    //Filter Note


    //Clear Filter


    return (
        <NoteContext.Provider
            value={{
            notes:state.notes
        }}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;