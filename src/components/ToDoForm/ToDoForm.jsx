import { useState } from "react";
import s from "./ToDoForm.module.css";

const ToDoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.todoForm}>
      <input
        type="text"
        value={text}
        placeholder="New Todo"
        onChange={(e) => setText(e.target.value)}
        className={s.todoInput}
      />
      <button type="submit" className={s.todoButton}>
        Add Todo
      </button>
    </form>
  );
};

export default ToDoForm;
