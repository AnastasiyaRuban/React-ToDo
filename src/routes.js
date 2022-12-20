import LoginPage from './components/pages/loginPage/LoginPage';
import TodoPage from './components/pages/todoPage/TodoPage';
import { LOGIN_ROUTE, TODO_ROUTE } from './utils/consts';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
];

export const privateRoutes = [
  {
    path: TODO_ROUTE,
    Component: TodoPage,
  },
];
