import React, { useReducer } from "react";
import axios from "axios";

import NoteContext from "./noteContext";
import noteReducer from "./noteReducer";
import {
  GET_NOTES,
  ADD_NOTE,
  NOTE_ERROR,
  DELETE_NOTE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_NOTE,
  FILTER_NOTE,
  CLEAR_FILTER,
  CLEAR_NOTES,
} from "../types";

const NoteState = (props) => {
  const initialState = {
    notes: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(noteReducer, initialState);

  //Get Note

  const getNotes = async () => {
    try {
      const res = await axios.get("/api/notes");
      dispatch({ type: GET_NOTES, payload: res.data });
    } catch (err) {
      dispatch({
        type: NOTE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Add Note
  const addNote = async (note) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/notes", note, config);
      dispatch({ type: ADD_NOTE, payload: res.data });
    } catch (err) {
      dispatch({
        type: NOTE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Update Note
  const updateNote = async (note) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(`/api/notes/${note._id}`, note, config);
      dispatch({ type: UPDATE_NOTE, payload: res.data });
    } catch (err) {
      dispatch({
        type: NOTE_ERROR,
        payload: err.response.msg,
      });
    }
   
  };

  //Delete Note

  const deleteNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      dispatch({ type: DELETE_NOTE, payload: id });
    } catch (err) {
      dispatch({
        type: NOTE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Set Current Note
  const setCurrent = (note) => {
    dispatch({ type: SET_CURRENT, payload: note });
  };

  // Clear Notes

  const clearNotes = () => {
    dispatch({ type: CLEAR_NOTES });
  };

  //Clear Current Note
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Filter Note

  const filterNote = (text) => {
    dispatch({ type: FILTER_NOTE, payload: text });
  };

  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <NoteContext.Provider
      value={{
        notes: state.notes,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addNote,
        deleteNote,
        setCurrent,
        clearCurrent,
        updateNote,
        filterNote,
        clearFilter,
        getNotes,
        clearNotes,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
