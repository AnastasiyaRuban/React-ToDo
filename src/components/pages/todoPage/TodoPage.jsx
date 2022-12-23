import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';
import Form from './Form';
import styles from './TodoPage.module.scss';

export default function TodoPage() {
  const todoList = useSelector((state) => state.todos.todos);
  return (
    <div className={styles.app}>
      <Form styles={styles} />
      {todoList.length > 0 && <TodoList styles={styles} />}
    </div>
  );
}
