import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTodoDescription } from '../../../store/todoSlice';

export default function TodoDescription({
  editMode,
  value,
  id,
  descriptionRef,
}) {
  const [descriptionValue, setDescriptionValue] = useState(value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setDescriptionValue(e.target.value);
    dispatch(changeTodoDescription({ id, description: e.target.value }));
  };

  return (
    <>
      {editMode ? (
        <div className='item__description'>
          <span>Description:</span>{' '}
          <input
            className='item__description-input'
            value={descriptionValue}
            onChange={handleChange}
            ref={descriptionRef}
          />
        </div>
      ) : (
        <p className='item__description'>
          <span>Description:</span> {value}
        </p>
      )}
    </>
  );
}
