import React, { useState, useContext, useEffect } from "react";
import NoteContext from "../../context/note/noteContext";

function NoteForm() {
  const noteContext = useContext(NoteContext);
  const { addNote, current, clearCurrent, updateNote } = noteContext;

  useEffect(() => {
    if (current !== null) {
      setNote(current);
    } else {
      setNote({
        title: "",
        body: "",
      });
    }
  }, [noteContext, current]);

  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const { title, body } = note;

  const onChange = (e) =>
    setNote({
      ...note,
      [e.target.title]: e.target.value,
    });

  const onSubmit = (e) => {
      e.preventDefault();
      if (current === null) {
          addNote(note);
      } else {
          updateNote(note);
      }
  };
    
    const clearAll = () => {
      clearCurrent()
  }

  return (
    <form onSubmit={onSubmit}>
          <h2 className="text-primary">{current ? 'Edit Note' : 'Add Note'}</h2>

      <input
        type="text"
        placeholder="Title"
        title="title"
        value={title}
        onChange={onChange}
      />
      <div className="form-group">
        <textarea
          className="form-control"
          rows="10"
          type="text"
          placeholder="Body"
          title="body"
          value={body}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type="submit"
          value={current ? 'Edit Note' : 'Add Note'}
          className="btn btn-primary btn-block"
        />
          </div>
          {current && <div>
              <button className="btn btn-light btn-block"onClick={clearAll}> Clear</button>
          </div>}
    </form>
  );
}

export default NoteForm;
