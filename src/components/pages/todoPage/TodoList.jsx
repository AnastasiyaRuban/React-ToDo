import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

export default function TodoList({ styles }) {
  const todoList = useSelector((state) => state.todos.todos);

  return (
    <ul className={styles['todo-list']}>
      {todoList.map((item, index) => (
        <TodoItem {...item} key={index + 1} styles={styles} />
      ))}
    </ul>
  );
}
