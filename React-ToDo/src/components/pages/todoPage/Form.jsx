import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../store/todoSlice';
import Input from '../../Input';
import InputDate from '../../InputDate';
import UploadFile from './UploadFile';

export default function Form() {
  const dispatch = useDispatch();
  const [valueTask, setValueTask] = useState('');
  const [valueDate, setValueDate] = useState(new Date());
  const [valueDescription, setValueDescription] = useState('');
  const [files, setFiles] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('files', files.toString());
    console.log(files);
    console.log(formData.get('files'));
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
    <form className='form' onSubmit={(e) => addTask(e)}>
      <h3 className='form__title'>Create task</h3>
      <Input
        label='Task'
        name='task'
        type='text'
        value={valueTask}
        onChange={setValueTask}
      />
      <InputDate
        label='Target date'
        name='date'
        value={valueDate}
        onChange={setValueDate}
      />

      <Input
        label='Description'
        name='description'
        type='description'
        value={valueDescription}
        onChange={setValueDescription}
      />

      <UploadFile files={files} onAdd={addFiles} />
      <button className='form__button button-reset' type='submit'>
        Add Task
      </button>
    </form>
  );
}
