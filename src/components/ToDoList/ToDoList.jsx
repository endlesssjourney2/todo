import ToDoItem from "../ToDoItem/ToDoItem";
import s from "./ToDoList.module.css";

const ToDoList = ({ todos, toggleTodo, category }) => {
  const filteredTodos = todos.filter((todo) => todo.category === category);

  if (filteredTodos.length === 0)
    return <p className={s.empty}>No todos in category {category}.</p>;

  return (
    <ul className={s.todoList}>
      {filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default ToDoList;
