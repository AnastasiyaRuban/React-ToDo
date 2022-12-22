import { createSlice } from '@reduxjs/toolkit';

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`;
  if (['pink', 'blue'].includes(theme)) return theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: pink)');
  if (userMedia.matches) return 'pink';

  return 'blue';
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: getTheme(),
  reducers: {
    set: (state, action) => action.payload,
  },
});

export const { set } = themeSlice.actions;

export default themeSlice.reducer;
