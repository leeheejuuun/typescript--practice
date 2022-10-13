import React, { useState } from 'react';
import { useRef } from 'react';

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

export default function NewTodo({ onAddTodo }: NewTodoProps) {
  const ref = useRef<HTMLInputElement>(null);

  const [input, setInput] = useState<string>('');

  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enterdText = ref.current!.value;
    onAddTodo(enterdText);
    setInput('');
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text"></label>
        <input
          type="text"
          id="todo-text"
          ref={ref}
          value={input}
          onChange={onchange}
        ></input>
      </div>
      <button disabled={!input} type="submit">
        ADD TODO
      </button>
    </form>
  );
}
