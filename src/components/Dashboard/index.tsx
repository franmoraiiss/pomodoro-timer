import styles from "./styles.module.scss"
import { Counter } from '../Counter'

export function Dashboard() {
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>Pomodoro Timer</h1>
         <Counter />
      </div>
   )
}