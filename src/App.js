import React from 'react';
import './index.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter } from 'react-router-dom';
import Title from './components/Title';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Title />
      <AppRouter />
    </BrowserRouter>
  );
}
export default App;
