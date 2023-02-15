import { useEffect, useState } from "react";
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import { ClipLoader } from 'react-spinners'
import { useUtil } from "store/hook";
import cn from 'classnames' ;
import { useRouter } from 'next/router';


export default function Layout({children}) {
  const { isOverlay, isSpinner } = useUtil();
  const [sepCase , setSepCase] = useState(false) ;
  const [isFooter , setFooter] = useState(true) ;
  const router = useRouter() ;
  
  // useEffect(()=>{
  //   console.log(router.pathname) ;
  // },[router]) ;

  useEffect(()=>{
    if(router.pathname == '/auth/wallet' || router.pathname == '/auth/email'  || router.pathname == '/marketplace' || router.pathname == '/conversions' || router.pathname == '/account/inventory/pets') setSepCase(true) ;
    else setSepCase(false) ;
    if (router.pathname == '/generator') setFooter(false) ;
    else setFooter(true) ;
  },[router]) ;
  return (
    <div className={cn('flex flex-col ' ,sepCase && 'h-screen' , !sepCase && 'h-full' )}>
      <div className='mt-[55px] xsmax:mt-[48px]'></div>
      <Header/>
      { children }
      <Footer visible={isFooter} />
      { isSpinner &&
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <ClipLoader speedMultiplier={0.5} color='white' size={50}/>
        </div>
      }
      {
        isOverlay &&
        <div className='fixed w-screen h-screen top-0 left-0 bg-[#00000070] z-20'>
        </div>
      }
    </div>
  );
}
