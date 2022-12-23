import React from 'react';

export default function Input({
  label,
  name,
  type,
  value,
  onChange,
  inputClass,
  labelClass,
}) {
  return (
    <>
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <input
        className={inputClass}
        value={value}
        type={type}
        id={name}
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
