import { useState } from "react";
import { CreateTask } from "../../components/CreateTask";
import { List } from "../../components/List";

export function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Study React",
    },
    {
      id: 2,
      name: "Study Javascript",
    },
    {
      id: 3,
      name: "Study Node",
    },
  ]);

  return (
    <>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} />
    </>
  );
}
