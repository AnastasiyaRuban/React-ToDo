import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTodoTask } from '../store/todoSlice';

export default function TodoTask({ editMode, value, taskRef, id }) {
  const [taskValue, setTaskValue] = useState(value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskValue(e.target.value);
    dispatch(changeTodoTask({ id, task: e.target.value }));
  };

  return (
    <>
      {editMode ? (
        <input
          className='item__task-input'
          value={taskValue}
          ref={taskRef}
          onChange={handleChange}
        />
      ) : (
        <p className='item__task'>{value}</p>
      )}
    </>
  );
}
