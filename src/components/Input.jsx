import React from 'react';

export default function Input({ label, name, type, value, onChange }) {
  return (
    <>
      <label className='form__label' htmlFor={name}>
        {label}
      </label>
      <input
        className='form__input'
        value={value}
        type={type}
        id={name}
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
