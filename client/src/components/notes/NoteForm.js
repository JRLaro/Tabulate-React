import React, { useState } from "react";

function NoteForm() {
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

  return (
    <form>
      <h2 className="text-primary">Add Note</h2>

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
          value="Add Note"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
}

export default NoteForm;