import React, { useState, useRef, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodoDone } from '../../../store/todoSlice';
import TodoTask from './TodoTask';
import TodoDescription from './TodoDescription';
import TodoDate from './TodoDate';

export default function TodoItem({
  id,
  task,
  description,
  date,
  done,
  styles,
}) {
  const [editMode, setEditMode] = useState(false);
  const taskRef = useRef(null);
  const descriptionRef = useRef(null);
  const editButtonRef = useRef(null);
  const dateRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editMode) {
      taskRef.current.focus();

      const handleClickOutside = (e) => {
        if (!taskRef.current) return;
        if (
          !taskRef.current.contains(e.target) &&
          !editButtonRef.current.contains(e.target) &&
          !dateRef.current.contains(e.target) &&
          !descriptionRef.current.contains(e.target)
        ) {
          setEditMode((editMode) => !editMode);
        }
      };
      document.addEventListener('click', handleClickOutside);

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [editMode]);

  const handlerEdit = () => {
    setEditMode(!editMode);
  };

  return (
    <li className={styles['todo-item']} id={id}>
      <div className={styles.item}>
        <IconButton
          className={styles.item__checkbox}
          aria-label='check done'
          onClick={() => dispatch(toggleTodoDone({ id }))}
        >
          {done === true ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>

        <TodoTask
          editMode={editMode}
          value={task}
          taskRef={taskRef}
          id={id}
          styles={styles}
        />
        <TodoDescription
          editMode={editMode}
          descriptionRef={descriptionRef}
          value={description}
          id={id}
          styles={styles}
        />
      </div>

      <TodoDate
        value={date}
        editMode={editMode}
        id={id}
        dateRef={dateRef}
        styles={styles}
      />
      <div className={styles['todo-item__buttons']}>
        <IconButton aria-label='add files'>
          <AttachFileIcon className={styles.item__button} />
        </IconButton>
        <IconButton aria-label='edit' ref={editButtonRef} onClick={handlerEdit}>
          <EditIcon className={styles.item__button} />
        </IconButton>
        <IconButton
          aria-label='delete'
          onClick={() => dispatch(deleteTodo({ id }))}
        >
          <DeleteIcon className={styles.item__button} />
        </IconButton>
      </div>
    </li>
  );
}
