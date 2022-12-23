import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTodoDate } from '../../../store/todoSlice';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { DateTime } from 'luxon';
registerLocale('ru', ru);

export default function TodoDate({ editMode, value, dateRef, id, styles }) {
  const [dateValue, setDateValue] = useState(value);
  const dispatch = useDispatch();

  const handleChange = (date) => {
    setDateValue(DateTime.fromJSDate(date).setLocale('ru').toISO());
    dispatch(
      changeTodoDate({
        id,
        date: DateTime.fromJSDate(date).setLocale('ru').toISO(),
      })
    );
  };

  return (
    <div className={styles.date} ref={dateRef}>
      <CalendarIcon
        className={styles.date__icon}
        sx={{ color: '#822651', fontSize: 15 }}
      />

      {editMode ? (
        <DatePicker
          name='date'
          selected={new Date(dateValue)}
          onSelect={handleChange}
          onChange={handleChange}
          minDate={new Date()}
          showDisabledMonthNavigation
          dateFormat='dd.MM.yyyy'
          className={styles['date__description-item']}
          locale='ru'
        />
      ) : (
        <p className={styles.date__description}>
          {DateTime.fromISO(dateValue)
            .setLocale('ru')
            .toLocaleString(DateTime.DATE_FULL)}
        </p>
      )}
    </div>
  );
}
