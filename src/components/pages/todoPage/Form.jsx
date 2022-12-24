import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../store/todoSlice';
import Input from '../../Input';
import InputDate from '../../InputDate';
import UploadFile from './UploadFile';

export default function Form({ styles }) {
  const dispatch = useDispatch();
  const [valueTask, setValueTask] = useState('');
  const [valueDate, setValueDate] = useState(new Date());
  const [valueDescription, setValueDescription] = useState('');
  const [files, setFiles] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('files', files.toString());
    dispatch(addTodo({ formData }));
    setValueTask('');
    setValueDate(new Date());
    setValueDescription('');
    setFiles([]);
  };

  const addFiles = (addedFiles) => {
    setFiles([...files, addedFiles]);
  };

  return (
    <form className={styles.form} onSubmit={(e) => addTask(e)}>
      <h3 className={styles.form__title}>Create task</h3>
      <Input
        label='Task'
        name='task'
        type='text'
        value={valueTask}
        onChange={setValueTask}
        inputClass={styles.form__input}
        labelClass={styles.form__label}
        groupClass={styles['form__task-group']}
      />
      <InputDate
        label='Target date'
        name='date'
        value={valueDate}
        onChange={setValueDate}
        inputClass={styles.form__input}
        labelClass={styles.form__label}
        groupClass={styles['form__date-group']}
      />

      <Input
        label='Description'
        name='description'
        type='description'
        value={valueDescription}
        onChange={setValueDescription}
        inputClass={styles.form__input}
        labelClass={styles.form__label}
        groupClass={styles['form__description-group']}
      />

      <UploadFile files={files} onAdd={addFiles} styles={styles} />
      <button className={`${styles.form__button} button-reset`} type='submit'>
        Add Task
      </button>
    </form>
  );
}
