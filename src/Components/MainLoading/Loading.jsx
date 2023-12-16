import './Loading.css'
import { useState, useEffect } from 'react'
import { ImSpinner9 } from "react-icons/im";
const MainLoading = ({ children }) => {
     const [seconds, setSeconds] = useState(0);

     useEffect(() => {
          if (seconds <= 10) {
               const interval = setInterval(() => {
                    setSeconds(prevSeconds => prevSeconds + 1);
               }, 500);

               return () => clearInterval(interval);
          }
     }, [seconds]);

     if (seconds >= 1) {
          return children
     }

     return (
          <div className=" flex justify-center items-center w-full h-screen ">

               <div className=' animate-spin '>
                    <ImSpinner9 size={100} className=' text-[#38BDF8]' />
               </div>

          </div>
     );
};

export default MainLoading;