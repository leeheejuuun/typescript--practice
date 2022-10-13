import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from '../todo.model';

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    // 1번 방법 : 일반적으로 리액트는 상태 업데이트를 일정한 시간에 시행하며 이 업데이트가 시행될때 여기 있는 todo값이 가장 최신상태가 아닐 수도 있다.
    // setTodos([...todos, { id: Math.random.toString(), text: text }]);

    // 2번 방법 : prev를 활용하여 이전값을 가져와 새로운 값으로 업데이트한다.
    setTodos((prev) => [...prev, { id: Math.random().toString(), text: text }]);
  };

  const todoDeleteTodo = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div className="Todo">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteTodo} />
    </div>
  );
}

export default TodoApp;
