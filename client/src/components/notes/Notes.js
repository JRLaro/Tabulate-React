import React, { Fragment, useContext } from "react";
import NoteContext from "../../context/note/noteContext";
import NoteItems from "./NoteItems";

function Notes() {
  const noteContext = useContext(NoteContext);
  const { notes, filtered } = noteContext;

  if (notes.length === 0) {
    return <h4> Please add a Note</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((note) => <NoteItems key={note.id} note={note} />)
        : notes.map((note) => <NoteItems key={note.id} note={note} />)}
    </Fragment>
  );
}

export default Notes;
