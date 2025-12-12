import React, { useState } from "react";
import "./styles.css";
import Input from "../Input";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim() === "") return;

    onAdd(text.trim());
    setText("");
  };

  return (
    <div>
      <form className="add-todo" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="add new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
