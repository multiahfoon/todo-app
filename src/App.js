import React from 'react'
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

import './app.styles.css'

function App() {
  return (
    <div className='container'>
      <main>
        <h1>Todo App</h1>
        <Form />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
