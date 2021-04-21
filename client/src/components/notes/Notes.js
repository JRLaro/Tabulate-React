import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((note) => (
              <CSSTransition key={note._id} timeout={500} classNames="note">
                <NoteItems note={note} />
              </CSSTransition>
            ))
          : notes.map((note) => (
              <CSSTransition key={note._id} timeout={500} classNames="note">
                <NoteItems note={note} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
}

export default Notes;
