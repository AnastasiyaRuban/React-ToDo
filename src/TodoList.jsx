import React from 'react';
import Item from './Item';

export default function TodoList({
  todoList,
  onClick,
  onDelete,
  editItem,
  onEdit,
}) {
  return (
    <ul className='todo-list'>
      {todoList.map((item, index) => (
        <Item
          task={item.task}
          description={item.description}
          key={index}
          date={item.date}
          done={item.done}
          onDone={onClick}
          onDelete={onDelete}
          item={item}
          id={item.id}
          editItem={editItem}
          onEdit={onEdit}
          isReadonly={item.isReadonly}
        />
      ))}
    </ul>
  );
}
