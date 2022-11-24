import React from 'react';
import './index.scss';
import Title from './Title';
import Form from './Form';
import { useState } from 'react';

function App() {
  const [taskValue, setTaskValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const add = {
    // добавляемый объект
    id: '38GlFQnHM10UuRDNVUdiebjTq',
    prop1: 'А',
    prop2: 'котята',
    prop3: 'кувырком',
  };
  setValue([...objArr, add]);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
  };

  const handleChange = (e) => {
    if (e.target.id === 'task') setTaskValue(e.target.value);
    if (e.target.id === 'date') setDateValue(e.target.value);
    if (e.target.id === 'description') setDescriptionValue(e.target.value);
  };

  return (
    <div className='App'>
      <Title />
      <Form
        onSubmit={onSubmit}
        onChange={handleChange}
        taskValue={taskValue}
        dateValue={dateValue}
        descriptionValue={descriptionValue}
      />
    </div>
  );
}
export default App;
