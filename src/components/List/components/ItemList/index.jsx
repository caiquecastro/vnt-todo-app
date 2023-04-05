import styles from "./ItemList.module.css";

export function ItemList(props) {
  function handleRemove() {
    alert(`Ação pra remover o item ${props.name}`);
  }

  return (
    <li className={styles.container}>
      <strong>{props.name}</strong>
      <button onClick={handleRemove}>-</button>
    </li>
  );
}
