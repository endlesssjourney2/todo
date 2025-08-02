import { use, useEffect, useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";

const categories = ["work", "personal", "shopping", "home", "study"];

function App() {
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState(categories[0]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("todos"));
      if (saved && Array.isArray(saved)) {
        setTodos(saved);
      }
    } catch (e) {
      console.warn("Error reading from localStorage:", e);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isInitialized]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, category, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="App">
      <h2 className="app-title">My Todo List</h2>
      <label className="category-label">
        <div className="category-select-container">
          <h2 className="category-title">Category:</h2>
          <select
            className="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </label>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} toggleTodo={toggleTodo} category={category} />
      <button className="remove-btn" onClick={removeTodo}>
        Remove Completed Todos
      </button>
    </div>
  );
}

export default App;
