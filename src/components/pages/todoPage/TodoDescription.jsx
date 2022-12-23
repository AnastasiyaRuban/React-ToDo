import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTodoDescription } from '../../../store/todoSlice';

export default function TodoDescription({
  editMode,
  value,
  id,
  descriptionRef,
  styles,
}) {
  const [descriptionValue, setDescriptionValue] = useState(value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setDescriptionValue(e.target.value);
    dispatch(changeTodoDescription({ id, description: e.target.value }));
  };

  // useEffect(() => {
  //   if (descriptionRef) {
  //     descriptionRef.current.setAttribute(
  //       'style',
  //       'height:' +
  //         descriptionRef.current.scrollHeight +
  //         'px;overflow-y:hidden;'
  //     );

  //     descriptionRef.current.addEventListener('input', OnInput, false);
  //   }
  // }, [descriptionRef]);

  // function OnInput() {
  //   this.style.height = 'auto';
  //   this.style.height = this.scrollHeight + 'px';
  // }

  return (
    <>
      {editMode ? (
        <textarea
          className={styles['item__description-input']}
          value={descriptionValue}
          onChange={handleChange}
          ref={descriptionRef}
        />
      ) : (
        <p className={styles.item__description}>{value}</p>
      )}
    </>
  );
}
