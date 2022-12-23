import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { set } from '../store/themeSlice';

export default function ColorsTheme({ className, styles }) {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => {
    const next = theme === 'blue' ? 'pink' : 'blue';
    dispatch(set(next));
  };

  return (
    <div
      className={cn(
        className,
        styles.theme,
        theme === 'blue' ? styles.blue : styles.pink
      )}
      onClick={handleChange}
    />
  );
}
