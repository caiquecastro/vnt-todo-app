import styles from "./ItemList.module.css";

import { useAppContext } from "../../../../hooks/useAppContext";
import { api } from "../../../../services/api";

export function ItemList({ name, id }) {
  const { setTasks } = useAppContext();

  async function handleRemove() {
    if (confirm(`Tem certeza que deseja remover o item ${name}?`)) {
      await api.delete(`/tasks/${id}`);
      setTasks((tasks) => tasks.filter((task) => task.id !== id));
    }
  }

  return (
    <li className={styles.container}>
      <strong>{name}</strong>
      <button onClick={handleRemove}>-</button>
    </li>
  );
}
