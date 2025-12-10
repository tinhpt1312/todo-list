import { useState } from "react";
import type { Todo } from "../hooks/useTodo";
import "./TodoItem.css";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newText: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim() !== "") {
      onUpdate(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-item">
      <label>
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleUpdate();
              if (e.key === "Escape") setIsEditing(false);
            }}
            autoFocus
          />
        ) : (
          <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
        )}
      </label>
      <div>
        {isEditing ? (
          <button className="update-btn" onClick={handleUpdate}>
            Save
          </button>
        ) : (
          <button className="update-btn" onClick={() => setIsEditing(true)}>
            Update
          </button>
        )}
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>
          ✕
        </button>
      </div>
    </div>
  );
}
