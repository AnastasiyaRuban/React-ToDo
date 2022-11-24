import React from 'react';

export default function Form({
  onSubmit,
  onChange,
  taskValue,
  dateValue,
  descriptionValue,
}) {
  return (
    <form className='form' onSubmit={(e) => onSubmit(e)}>
      <h3 className='form__title'>Create task</h3>
      <label className='form__label' htmlFor='task'>
        Task
      </label>
      <input
        className='form__input'
        type='text'
        id='task'
        name='task'
        onChange={onChange}
        value={taskValue}
      />
      <label className='form__label' htmlFor='date'>
        Target date
      </label>
      <input
        className='form__input'
        id='date'
        name='date'
        type='date'
        onChange={onChange}
        value={dateValue}
      />
      <label className='form__label' htmlFor='description'>
        Description
      </label>
      <input
        className='form__input'
        type='description'
        id='description'
        name='description'
        onChange={onChange}
        value={descriptionValue}
      />
      <button className='form__button button-reset' type='submit'>
        Отправить
      </button>
    </form>
  );
}
