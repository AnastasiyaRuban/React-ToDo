import { createSlice } from '@reduxjs/toolkit';

document.documentElement.dataset.theme = 'pink';

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`;
  if (['pink', 'blue'].includes(theme)) return theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: pink)');
  if (userMedia.matches) return 'pink';

  return 'blue';
};

const initialState = getTheme();

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    set: (state, action) => action.payload,
  },
});

export const { set } = themeSlice.actions;

export default themeSlice.reducer;
