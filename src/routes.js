import Login from './components/Login';
import Todo from './components/pages/todoPage/Todo';
import { LOGIN_ROUTE, TODO_ROUTE } from './utils/consts';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: TODO_ROUTE,
    Component: Todo,
  },
];
