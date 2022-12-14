import { configureStore } from '@reduxjs/toolkit';
import todoReduser from './todoSlice';

export default configureStore({
  reducer: {
    todos: todoReduser,
  },
});
