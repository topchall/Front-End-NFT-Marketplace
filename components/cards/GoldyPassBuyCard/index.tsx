import cn from 'classnames';
import styles from './index.module.scss';
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css'

const shimmer = (w, h) =>`
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



const SkeletonCard = () => {
    return (
        <div className={cn('relative  flex-col items-center pl-[25px] w-[266px] h-[357px]  mb-[22px] mx-[6px]', styles.card)}>
        <div className={cn('relative  items-center justify-center mt-7 text-[13px]', styles.toppanel)} style={{color: '#71FFCF'}}>
            <SkeletonTheme  highlightColor="#ccc">
              <Skeleton className={cn(styles.loadingskeleton)} style={{ width: '86%', borderRadius:'7px', height: 35 }} />
            </SkeletonTheme>
        </div>
        <div className='relative mt-5 mx-auto' >
            <SkeletonTheme  highlightColor="#ccc">
              <Skeleton style={{ width: '90%', height: 170 , borderRadius:'7px'}} className={cn(styles.loadingskeleton)} />
            </SkeletonTheme>
        </div>
        <div className='mt-[5px] flex flex-row items-center text-[25px] text-white'>
            <div className="flex-none w-14 h-[66px] pr-[10px]">
                <SkeletonTheme >
                    <Skeleton height={60} width ={60}  className={cn(styles.loadingskeleton)}  />
                </SkeletonTheme>
            </div>
            <div className="flex-initial w-96 pl-[20px]">
                <SkeletonTheme  highlightColor="#ccc">
                    <Skeleton style={{ width: '85%' , height:50 , borderRadius:'7px' }}  count={1} className={cn(styles.loadingskeleton)} />
                </SkeletonTheme>
            </div>
        </div>
    </div>
    )
  }

const GoldyPassBuyCard = ({ name, stone, onBuy }) => {

    const [isLoading , setLoading] = useState(false) ;

    useEffect(()=>{
        setTimeout(()=>(setLoading(true)),1500) ;
        // console.log(name , stone , onBuy) ;
    },[]) ;

    return (
        !isLoading ?
            <SkeletonCard/>
            :
        <div className={cn('relative flex flex-col items-center w-[266px] h-[357px] mb-[22px] mx-[6px]', styles.card)}>
            <div className={cn('relative flex items-center justify-center mt-7 text-[17px]', styles.toppanel)} style={{color: '#71FFCF'}}>
                { name }
                <div className={styles.stone}>
                    <Image width='20' height='20' alt='' src={`/images/goldypass/${stone}.png`} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(20, 20))}`} />
                    <div className='absolute text-white text-[10px] -bottom-[15px]'>
                        { stone }
                    </div>
                </div>
            </div>
            <div className='relative mt-6 mx-auto' >
                <Image width='171' height='171' alt='' src={`/images/goldypass/${name}.png`} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(171, 171))}`} />
            </div>
            <div className='mt-[5px] flex items-center text-[15px] text-white'>
                <div className={cn('flex flex-col w-[70px] h-[77px]  text-white items-center justify-center', styles.price_button)}>
                    <div className='text-[18px]'>20</div>
                    <div className='text-[12px] -mt-2'>USDT</div>
                </div>
                <button className={cn('text-[16px] w-[162px] h-[64px]', styles.buy_button)}
                    onClick={onBuy}
                >
                    BUY
                </button>
            </div>
        </div>
    )
}

export default GoldyPassBuyCard;