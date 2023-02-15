import React, { useEffect, useState ,useRef } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import cn from 'classnames';
import styles from './index.module.scss';
import axios from 'core/utils/axios';
// import { toast } from 'react-toastify';
import RollingPan from 'pages/RollingPan';


export default function SlotMachine_main({ num1 , num2 , num3 ,setModalflg}) {
    const [play, setPlay] = useState(false) ;
    const [visibleCloseBtn , setClosBtn] = useState(false) ;
    const ref = useRef(null) ;
    
    const handleClickOutside = (event) => {
      if ((ref.current && !ref.current?.contains(event.target))) {
          // setModalflg(false);
          // console.log('close');
      }
    }
    useEffect(()=>{
        document.addEventListener("mousedown",  handleClickOutside) ;
    },[ref]) ;

    useEffect(()=>{
      setTimeout(() => {
        setClosBtn(true) ;
      }, 7000);
      // console.log(luckyNumber,'luck-slotmachin-main') ;
    },[]) ;
    

    return (
      <div  className={cn('justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none z-[3000]')}>
      <div  className="relative w-auto my-6 xsmax:my-[0px] mx-auto max-w-[1000px] top-[250px] sp900min:top-[200px] flex flex-wrap justify-center">

        
        <>
       <div 
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto  inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative   bg-transparent  z-[3000] 	">
                {/*header*/}
                <div className={cn("absolute sp900min:right-[60px] sp900min:top-[80px] right-[20px] top-[30px] z-[3000] " , !visibleCloseBtn && 'hidden')} >
                  <button className='text-[white] hidden sp900min:block' onClick={setModalflg}>
                    <Image src='/images/luckynumber/close_1_.svg' width='33' height='33' />
                  </button>
                  <button className='text-[white] block  sp900min:hidden' onClick={setModalflg}>
                    <Image src='/images/luckynumber/close_1_.svg' width='20' height='20' />
                  </button>
                </div>
                {/*body*/}
                  <RollingPan num1={num1} num2={num2} num3={num3} />
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>

      </div>
  </div>
        
       
        
    );
}