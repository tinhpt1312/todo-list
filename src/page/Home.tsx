import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import useTodos from "../hooks/useTodo";

export default function HonePage() {
  const { addTodo, deleteTodo, todos, toggleTodo, updateTodo } = useTodos();
  return (
    <div className="home-container">
      <h1 className="title">Todo App</h1>

      <AddTodo onAdd={addTodo} />

      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onUpdate={updateTodo} />
    </div>
  );
}
