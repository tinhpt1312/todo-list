import { useEffect, useState } from "react";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: string, newText: string) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
  };
}
