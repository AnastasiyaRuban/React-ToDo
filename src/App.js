import React from 'react';
import './index.scss';
import Title from './Title';
import Form from './Form';
import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [taskValue, setTaskValue] = useState('1');
  const [dateValue, setDateValue] = useState('1990-11-02');
  const [descriptionValue, setDescriptionValue] = useState('3');
  const [todoList, setTodoList] = useState([]);

  function getDate(date) {
    return date.split('-').reverse().join('.');
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setTodoList([
      ...todoList,
      {
        id: '_' + Math.random().toString(36).substr(2, 9),
        task: formData.get('task'),
        date: getDate(formData.get('date')),
        description: formData.get('description'),
        done: false,
        isReadonly: true,
      },
    ]);
  };

  const onDone = (target) => {
    setTodoList(
      todoList.map((item) =>
        item.task === target.task ? { ...item, done: !item.done } : item
      )
    );
  };

  const onDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    if (e.target.id === 'task') setTaskValue(e.target.value);
    if (e.target.id === 'date') setDateValue(e.target.value);
    if (e.target.id === 'description') setDescriptionValue(e.target.value);
  };

  const onEditItem = (e) => {
    setTodoList(
      todoList.map((item) =>
        item.id === e.target.offsetParent.id
          ? { ...item, task: e.target.value }
          : item
      )
    );
  };

  const setReadonly = (id, goal) => {
    goal === 'edit'
      ? setTodoList(
          todoList.map((item) =>
            item.id === id ? { ...item, isReadonly: false } : item
          )
        )
      : setTodoList(
          todoList.map((item) =>
            item.id === id ? { ...item, isReadonly: true } : item
          )
        );
  };

  return (
    <div className='app'>
      <Title />
      <div className='app__container'>
        <Form
          onSubmit={onSubmit}
          onChange={handleChange}
          taskValue={taskValue}
          dateValue={dateValue}
          descriptionValue={descriptionValue}
        />
        {todoList.length > 0 && (
          <TodoList
            todoList={todoList}
            onClick={onDone}
            onDelete={onDelete}
            editItem={onEditItem}
            onEdit={setReadonly}
          />
        )}
      </div>
    </div>
  );
}
export default App;
