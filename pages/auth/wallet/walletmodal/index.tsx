import { useEffect, useRef, useState,Fragment } from 'react';
// import Image from 'next/image';
import cn from "classnames"
import { BeatLoader, BarLoader } from 'react-spinners'
import Image from 'next/image' ;
import {copy2Clipboard } from 'utils';
import Link from 'next/link'
import { toast } from 'react-toastify';

const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#0c1c1e" offset="20%" />
        <stop stop-color="#1e474e" offset="50%" />
        <stop stop-color="#0c1c1e" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#0c1c1e" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`
  
  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

const Walletmodal =({isOpen , onClickWalletconnet , onClickMetamask})=>{
    return (
        <div className="relative z-[3000]">
        <div className={cn('fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[30]', !isOpen && 'hidden')}>
        
            <div className='w-[400px] h-[330px] xsmax:w-[300px] xsmax:h-[250px] border border-[#025962] rounded-[16px] bg-[#02222A] text-white text-[25px] xsmax:text-[16px]'>
                <div className='h-[70px] xsmax:h-[45px]  flex justify-between items-center mt-[25px] xsmax:mt-[10px] xsmax:pl-[90px]  pl-[150px] pr-[38px]  '>
                    Select Wallet
                    
                </div>
                <div className="flex justify-center flex-col items-center w-full ">
                 
                    <div className='cursor-pointer	 w-[350px] justify-around pt-[0px] xsmax:pt-[15px]   px-[60px]  xsmin:px-[40px]  text-[15px]  xsmin:text-[25px] text-[#BEBEBE] flex fexl-wrap items-center'
                      onClick={()=>onClickWalletconnet()}
                    >
                           <div className="" >
                                    <Image src='/images/account/wallet/walletconnect.svg' className=' px-[5px] z-40' width='90' height='90' alt='' />
                           </div>
                           <div className="" >
                                Wallet Connect
                           </div>
                    </div>
                    <div className='cursor-pointer	 w-[350px] justify-around pt-[0px] xsmax:pt-[15px]   px-[60px]  xsmin:px-[40px]  text-[15px]  xsmin:text-[25px] text-[#BEBEBE] flex fexl-wrap   items-center'
                       onClick={onClickMetamask}
                    >
                           <div className="">
                                    <Image src='/images/account/wallet/metamask.svg' className=' px-[5px] z-40' width='55' height='55' alt='' />
                           </div>
                           <div className="" >
                                Metamask
                           </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
    )
}

export default Walletmodal ;