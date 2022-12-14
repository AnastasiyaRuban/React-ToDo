import { createSlice } from '@reduxjs/toolkit';
import { DateTime } from 'luxon';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      // action.payload.preventDefault();

      // const formData = new FormData(action.payload.target);
      // formData.append('files', action.payload.files);
      // console.log(action.payload);

      // state.todos.push({
      //   id: '_' + Math.random().toString(36).substring(2, 9),
      //   task: formData.get('task'),
      //   date: DateTime.fromFormat(formData.get('date'), 'dd.MM.yyyy').toISO(),
      //   description: formData.get('description'),
      //   done: false,
      //   files: formData.get('files'),
      // });

      const formData = action.payload.formData;
      state.todos.push({
        id: '_' + Math.random().toString(36).substring(2, 9),
        task: formData.get('task'),
        date: DateTime.fromFormat(formData.get('date'), 'dd.MM.yyyy').toISO(),
        description: formData.get('description'),
        done: false,
        files: formData.get('files'),
      });
    },
    toggleTodoDone(state, action) {
      const togleTodo = state.todos.find(
        (item) => item.id === action.payload.id
      );
      togleTodo.done = !togleTodo.done;
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
    changeTodoDescription(state, action) {
      const changedTodo = state.todos.find(
        (item) => item.id === action.payload.id
      );
      changedTodo.description = action.payload.description;
    },
    changeTodoTask(state, action) {
      const changedTodo = state.todos.find(
        (item) => item.id === action.payload.id
      );
      changedTodo.task = action.payload.task;
    },
    changeTodoDate(state, action) {
      const changedTodo = state.todos.find(
        (item) => item.id === action.payload.id
      );
      changedTodo.date = action.payload.date;
    },
  },
});

export const {
  addTodo,
  toggleTodoDone,
  deleteTodo,
  changeTodoDescription,
  changeTodoTask,
  changeTodoDate,
} = todoSlice.actions;

export default todoSlice.reducer;
