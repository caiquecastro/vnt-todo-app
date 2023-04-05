import styles from "./CreateTask.module.css"

export function CreateTask() {
  return (
    <div className={styles.container}>
      <input type="text" />
      <button>+</button>
    </div>
  )
}