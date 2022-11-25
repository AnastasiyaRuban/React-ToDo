import React from 'react';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export default function Item({
  id,
  task,
  description,
  date,
  done,
  onDone,
  item,
  onDelete,
  editItem,
  onEdit,
  isReadonly,
}) {
  return (
    <li className='todo-item' id={id}>
      <div className='todo-item__item item'>
        <IconButton
          className='item__checkbox'
          aria-label='check done'
          onClick={() => onDone(item)}
          sx={{ color: '#fff', fontSize: 15 }}
        >
          {done === true ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>

        <p className='item__task'>{task}</p>
        {/* <input
          className='item__task'
          value={task}
          onChange={(e) => editItem(e)}
          readOnly={isReadonly}
          onBlur={() => onEdit(id, 'blur')}
        /> */}

        <p className='item__description'>
          <span>Description:</span> {description}
        </p>
      </div>

      <div className='todo-item__date date'>
        <CalendarIcon
          className='date__icon'
          sx={{ color: '#822651', fontSize: 15 }}
        />
        <p className='date__description'>{date}</p>
      </div>
      <div className='todo-item__buttons'>
        <IconButton aria-label='add files'>
          <AttachFileIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton aria-label='edit' onClick={() => onEdit(id, 'edit')}>
          <EditIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton aria-label='delete' onClick={() => onDelete(id)}>
          <DeleteIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </div>
    </li>
  );
}
