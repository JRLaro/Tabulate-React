import React from 'react';
import PropTypes from 'prop-types'

function NoteItems({ note }) {
  const { id, title, body } = note;
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{title}</h3>
      <ul className='list'>
        {body && (
          <li>
            <i class='far fa-comment-dots'></i>
            {body}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm'>Edit</button>
        <button className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  );
};

NoteItems.propTypes = {
    note: PropTypes.object.isRequired,
}

export default NoteItems;
