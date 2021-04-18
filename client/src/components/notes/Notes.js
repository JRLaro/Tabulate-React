import React, { Fragment, useContext } from "react";

import NoteContext from "../../context/note/noteContext";
import NoteItems from "./NoteItems";

function Notes() {
  const noteContext = useContext(NoteContext);

  const { notes } = noteContext;
  return (
    <Fragment>
      {notes.map(note => (
          <NoteItems key={note.id} note={note} />
      ))}
    </Fragment>
  );
}

export default Notes;
