import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

// Main application component
const App: React.FC = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;