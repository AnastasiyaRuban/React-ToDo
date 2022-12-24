import React from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

export default function InputDate({
  label,
  name,
  value,
  onChange,
  inputClass,
  labelClass,
  groupClass,
}) {
  return (
    <div className={groupClass}>
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <DatePicker
        name='date'
        selected={value}
        onSelect={(date) => {
          onChange(date);
        }}
        onChange={(date) => {
          onChange(date);
        }}
        minDate={new Date()}
        showDisabledMonthNavigation
        dateFormat='dd.MM.yyyy'
        className={inputClass}
        locale='ru'
      />
    </div>
  );
}
