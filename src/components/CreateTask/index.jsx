import { useState } from "react";
import styles from "./CreateTask.module.css";

export function CreateTask({ tasks, setTasks }) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setTasks(prev => [...prev, {
      id: prev.length + 1,
      name: taskName
    }])

    setTaskName("")
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}
