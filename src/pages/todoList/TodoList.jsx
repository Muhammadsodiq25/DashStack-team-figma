import "./TodoList.css";
import Abdulbosit from "../../data/Abdulbosit";
import { useState } from "react";

const TodoList = () => {
  const data = Abdulbosit.find((item) => item.page === "todo");

  const [tasks, setTasks] = useState(data.tasks);

  const toggleDone = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const toggleStar = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, starred: !task.starred } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="todo">
      <div className="todo__top">
        <h2>{data.title}</h2>
        <button>{data.button}</button>
      </div>

      <div className="todo__list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`todo__item ${task.done ? "active" : ""}`}
          >
            <div
              className={`todo__check ${task.done ? "checked" : ""}`}
              onClick={() => toggleDone(task.id)}
            >
              {task.done && "✔"}
            </div>

            <p>{task.text}</p>

            <div className="todo__actions">
              <span
                className={`star ${task.starred ? "starred" : ""}`}
                onClick={() => toggleStar(task.id)}
              >
                ★
              </span>

              <span className="delete" onClick={() => deleteTask(task.id)}>
                ✕
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
