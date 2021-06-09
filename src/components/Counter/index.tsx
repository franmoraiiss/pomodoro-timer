import styles from "./styles.module.scss"
import { Button } from "../Button"

export function Counter() {

   const isActive = false;

   return (
      <>
      <div className={styles.containerCounter}>
         <div className={styles.counterBox}>
            <h1>25:00</h1>
         </div>
         <div className={styles.currentSession}>
            Sessão atual: <span>foco</span>
         </div> 
      </div>

      <div className={styles.containerButtons}>
         { !isActive ? (
               <Button text="Start"/>
            ) : (
               <Button text="Pause"/>
            )
         }
         <Button text="Stop" />
         <Button text="Reset" />
      </div>
      </>
   )
}