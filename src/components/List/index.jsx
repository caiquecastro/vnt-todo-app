import { useAppContext } from "../../hooks/useAppContext";
import styles from "./List.module.css";
import { ItemList } from "./components/ItemList";

export function List() {
  const { tasks } = useAppContext();

  return (
    <ul className={styles.container}>
      {tasks.length === 0 && (
        <div className={styles.no_items}>
          Lista vazia
        </div>
      )}
      {tasks.map((task) => (
        <ItemList key={task.id} name={task.name} id={task.id} />
      ))}
    </ul>
  );
}
