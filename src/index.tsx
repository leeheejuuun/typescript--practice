import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import TodoApp from './TODO_LIST/TodoApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <TodoApp />
  </React.StrictMode>
);
