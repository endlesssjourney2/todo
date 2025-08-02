import s from "./ToDoItem.module.css";

const ToDoItem = ({ todo, toggleTodo }) => {
  return (
    <li className={s.todoItem}>
      <label className={s.todoLabel}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className={s.todoCheckbox}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default ToDoItem;
