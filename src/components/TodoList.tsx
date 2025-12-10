import type { Todo } from "../hooks/useTodo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newText: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete, onUpdate }: TodoListProps) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
