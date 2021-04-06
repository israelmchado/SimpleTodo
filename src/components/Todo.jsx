import { useContext } from "react";
import { TodoListContext } from "../context/TodoListContext";

const Todo = ({ task }) => {
  const { removeTodo, findItem } = useContext(TodoListContext);

  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button
          onClick={() => removeTodo(task.id)}
          className="btn-delete task-btn"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button onClick={() => findItem(task.id) } className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Todo;
