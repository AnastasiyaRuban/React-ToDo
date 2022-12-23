import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';
import Form from './Form';

export default function TodoPage() {
  const todoList = useSelector((state) => state.todos.todos);
  return (
    <div className='app'>
      <div className='app__container'>
        <Form />
        {todoList.length > 0 && <TodoList />}
      </div>
    </div>
  );
}
