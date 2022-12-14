import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

export default function TodoList() {
  const todoList = useSelector((state) => state.todos.todos);

  return (
    <ul className='todo-list'>
      {todoList.map((item, index) => (
        <TodoItem {...item} key={index + 1} />
      ))}
    </ul>
  );
}
