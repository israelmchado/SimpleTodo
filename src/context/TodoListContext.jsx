import { createContext, useState, useEffect} from "react";
import { v4 as uuid } from "uuid";

export const TodoListContext = createContext();

const TodoListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || []

  const [tasks, setTasks] = useState(initialState);

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  const addTodo = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  const removeTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);

    setEditItem(item);
  };

  const editTodo = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );

    setTasks(newTasks)
    setEditItem(null)
  };

  return (
    <TodoListContext.Provider
      value={{
        tasks,
        addTodo,
        removeTodo,
        clearList,
        findItem,
        editTodo,
        editItem,
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
