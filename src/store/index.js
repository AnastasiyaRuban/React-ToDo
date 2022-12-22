import { configureStore } from '@reduxjs/toolkit';
import todoReduser from './todoSlice';
import themeReduser from './themeSlice';

export default configureStore({
  reducer: {
    todos: todoReduser,
    theme: themeReduser,
  },
});
