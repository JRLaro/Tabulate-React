import React, { useContext } from "react";
import PropTypes from "prop-types";
import NoteContext from "../../context/note/noteContext";

function NoteItems({ note }) {
    const noteContext = useContext(NoteContext);
    
    const {deleteNote, setCurrent, clearCurrent} = noteContext

  const { id, title, body } = note;

    const onDelete = () => {
        deleteNote(id);
        clearCurrent();
    }
    
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">{title}</h3>
      <ul className="list">
        {body && (
          <li>
            <i class="far fa-comment-dots"></i>
            {body}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={() => setCurrent(note)}>Edit</button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
}

NoteItems.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteItems;
