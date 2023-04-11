import styles from "./List.module.css";
import { ItemList } from "./components/ItemList";

export function List({ tasks }) {
  return (
    <ul className={styles.container}>
      {tasks.map((task) => (
        <ItemList key={task.id} name={task.name} />
      ))}
    </ul>
  );
}
