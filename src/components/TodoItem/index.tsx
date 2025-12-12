import { useState } from "react";
import type { Todo } from "../../hooks/useTodo";
import Button from "../Button";
import Input from "../Input";
import "./styles.css";

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
          <Input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleUpdate();
              if (e.key === "Escape") setIsEditing(false);
            }}
          />
        ) : (
          <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
        )}
      </label>
      <div className="btn">
        {isEditing ? (
          <Button variant="primary" className="update-btn" onClick={handleUpdate}>
            Save
          </Button>
        ) : (
          <Button variant="secondary" className="update-btn" onClick={() => setIsEditing(true)}>
            Update
          </Button>
        )}
        <Button variant="danger" className="delete-btn" onClick={() => onDelete(todo.id)}>
          X
        </Button>
      </div>
    </div>
  );
}
