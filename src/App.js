import './index.scss';
import React from 'react';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Homepage from './components/pages/homePage/Homepage';
import LoginPage from './components/pages/loginPage/LoginPage';
import TodoPage from './components/pages/todoPage/TodoPage';
import SettingsPage from './components/pages/settingsPage/SettingsPage';
import {
  LOGIN_ROUTE,
  TODO_ROUTE,
  HOME_ROUTE,
  SETTINGS_ROUTE,
} from './utils/consts';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  const [newUser, setNewUser] = useState(false);
  const handleLogout = () => {
    setNewUser(true);
  };
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route
            path={HOME_ROUTE}
            element={<Layout autorisation={newUser} logout={handleLogout} />}
          >
            <Route index element={<Homepage />} />
            {newUser && <Route path={LOGIN_ROUTE} element={<LoginPage />} />}
            {!newUser && <Route path={TODO_ROUTE} element={<TodoPage />} />}
            <Route path={SETTINGS_ROUTE} element={<SettingsPage />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}
export default App;
