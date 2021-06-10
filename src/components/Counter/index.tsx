import styles from "./styles.module.scss"
import { Button } from "../Button"
import { useContext } from "react"
import { CountdownContext } from "../../contexts/CountdownContext";

export function Counter() {

   const {
      minutes,
      seconds,
      isActive,

      startCountdown,
      resetCountdown,
      pauseCountdown,
      stopCountdown,

      addOneMinute,
      addTenMinutes,
      removeOneMinute,
      removeTenMinutes
   } = useContext(CountdownContext);

   const [minutesAboveHundred, minuteLeft, minuteRight] = String(minutes).padStart(3, '0').split('');
   const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

   return (
      <>
         <div className={styles.containerCounter}>
            <div className={isActive ? styles.counterBoxActive : styles.counterBox }>
               <h1>
                  {Number(minutesAboveHundred) >= 1 ? minutesAboveHundred : ""}{minuteLeft}{minuteRight}:{secondLeft}{secondRight}
               </h1>
            </div>            
         </div>

         <div className={styles.containerActionButtons}>
            { !isActive ? (
                  <Button text="Start" onClick={startCountdown}/>
               ) : (
                  <Button text="Pause" onClick={pauseCountdown}/>
               )
            }            
            <Button text="Stop" onClick={stopCountdown}/>
            <Button text="Reset" onClick={resetCountdown}/>         
         </div>

         { !isActive ? (
               <div>
                  <p className={styles.changeTime}>Change minutes</p>
                  <div className={styles.containerTimeChangeButtons}>
                     <button onClick={removeOneMinute}> -1 </button>
                     <button onClick={removeTenMinutes}> -10 </button>
                     <button onClick={addTenMinutes}> +10 </button>
                     <button onClick={addOneMinute}> +1 </button>
                  </div>
               </div>
            ) : (
               <div className={styles.isDisabled}>
                  <p className={styles.changeTime}>Change minutes</p>
                  <div className={styles.containerTimeChangeButtons}>
                     <button disabled onClick={removeOneMinute}> -1 </button>
                     <button disabled onClick={removeTenMinutes}> -10 </button>
                     <button disabled onClick={addTenMinutes}> +10 </button>
                     <button disabled onClick={addOneMinute}> +1 </button>
                  </div>
               </div>
            )
         }
         
      </>
   )
}