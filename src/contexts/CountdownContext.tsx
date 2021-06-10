import { createContext, ReactNode, useEffect, useState } from "react";

interface CountdownContextData {
   minutes: number;
   seconds: number;
   hasFinished: boolean;
   isActive: boolean;

   startCountdown: () => void;
   resetCountdown: () => void;
   pauseCountdown: () => void;
   stopCountdown: () => void;
   
   addOneMinute: () => void;
   addTenMinutes: () => void;
   removeOneMinute: () => void;
   removeTenMinutes: () => void;
}

interface CountdownProviderProps {
   children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {

   const [time, setTime] = useState(25 * 60);
   const [isActive, setIsActive] = useState(false);
   const [hasFinished, setHasFinished] = useState(false);

   const minutes = Math.floor(time / 60);
   const seconds = time % 60;

   function startCountdown() {
      setIsActive(true);
   }

   function pauseCountdown() {
      setIsActive(false);
   }

   function stopCountdown() {
      clearTimeout(countdownTimeout);
      setIsActive(false);
      setTime(0);
      setHasFinished(false);
   }

   function resetCountdown() {
      clearTimeout(countdownTimeout);
      setIsActive(false);
      setTime(25 * 60);
      setHasFinished(false);
   }

   function addOneMinute() {
      setTime(time + 60);
   }

   function addTenMinutes() {
      setTime(time + (10 * 60));
   }

   function removeOneMinute() {
      if(time > 0 && (time - 60 > 0)) {
         setTime(time - 60);
      }
   }

   function removeTenMinutes() {
      if(time > 0 && (time - (10*60) > 0)) {
         setTime(time - (10*60));
      }
   }

   useEffect(() => {
      if(isActive && time > 0) {
         countdownTimeout = setTimeout(() => {
            setTime(time - 1);
         }, 1000);
      } else if(isActive && time == 0) {
         setHasFinished(true);
         setIsActive(false);
      }
   }, [isActive, time]);

   return (
      <CountdownContext.Provider value={{
         minutes,
         seconds,
         hasFinished,
         isActive,

         startCountdown,
         resetCountdown,
         pauseCountdown,
         stopCountdown,

         addOneMinute,
         addTenMinutes,
         removeOneMinute,
         removeTenMinutes
      }}>
         { children }
      </CountdownContext.Provider>
   );
}