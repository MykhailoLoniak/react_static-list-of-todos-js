import './App.scss';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoList } from './components/TodoList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
    || null;
}

export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const App = () => (
  <div className="App">
    <TodoList
      todos={todos}
    />
  </div>
);
