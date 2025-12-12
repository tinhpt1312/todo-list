import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import useTodos from "../hooks/useTodo";
import "./styles.css";

export default function HonePage() {
  const { addTodo, deleteTodo, todos, toggleTodo, updateTodo } = useTodos();
  return (
    <div className="container">
      <h1 className="title">Todo App</h1>

      <div className="input">
        <AddTodo onAdd={addTodo} />
      </div>

      <div className="list">
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onUpdate={updateTodo} />
      </div>
    </div>
  );
}
