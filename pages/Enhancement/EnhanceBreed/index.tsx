import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BuyPassDetail from './BuyPassDetail' ;
import GoBack from 'components/buttons/GoBack' ;

const EnhanceBreed =()=>{

    return(
        <div className={cn('relative h-[1500px] sp970min:h-[1000px] overflow-hidden	 bg-[#00272D]')}>
            <div className={cn('w-full hidden sp970min:flex  ',styles.bg_img)}></div>
            <div className={cn('w-full flex sp970min:hidden  ',styles.bg_mobile_img)}></div>
            <GoBack className='hidden sp460min:flex text-[11px] top-[80px] sp1440min:top-[90px] sp1770min:top-[100px] left-[50px] lgmin:left-[120px] sp1440min:left-[80px] sp1770min:left-[20%] ' title='Go Back' />
            <GoBack className='flex sp460min:hidden text-[11px] top-[30px] left-[30px]' title='' />
            <BuyPassDetail />
            <div className='translateX-css hidden xlmin:block absolute  left-[900px] sp1440min:left-[65%] sp1770min:left-[70%] top-[180px] z-[2] '>
                <img className='img-max-width-none' src="/images/charAvartar/goldy2.png" width={513} height={500} alt="" />
            </div>
            <div className='translateX-css hidden xlmin:block absolute left-[900px] sp1440min:left-[65%] sp1770min:left-[70%] top-[510px] z-[1] '>
                <img className='img-max-width-none' src="/images/marketplace/floor.png" width={730} height={195} alt="" />
            </div>
            <div className={cn('translateX-css hidden xlmin:flex justify-center items-center absolute left-[900px] sp1440min:left-[65%] sp1770min:left-[70%] top-[720px] z-[1] ' , styles.buy_bg)}>
                <div className={cn('mr-[47px] flex justify-center items-center text-[#FFFFFF] texy-[17px] ' , styles.buyBTN_bg)}>
                    SELL
                </div>
                
            </div>
            {/*  */}

            <div className='translateX-css hidden sp970min:flex xlmin:hidden  absolute  left-[70%]  top-[210px] z-[2] '>
                <img className='img-max-width-none' src="/images/charAvartar/goldy2.png" width={413} height={400} alt="" />
            </div>
            <div className='translateX-css hidden sp970min:flex xlmin:hidden  absolute left-[70%]  top-[530px] z-[1] '>
                <img className='img-max-width-none' src="/images/marketplace/floor.png" width={573} height={153} alt="" />
            </div>
            <div className={cn('translateX-css hidden sp970min:flex justify-center items-center xlmin:hidden  absolute left-[70%]  top-[690px] z-[1] ', styles.buy_bg)}>
                <div className={cn('mr-[47px] flex justify-center items-center text-[#FFFFFF] texy-[17px] ' , styles.buyBTN_bg)}>
                    SELL
                </div>
                
            </div>

            {/* mobile part */}

            <div className='translateX-css hidden sp460min:flex sp970min:hidden  absolute  left-[50%]  top-[150px] z-[2] '>
                <img className='img-max-width-none' src="/images/charAvartar/goldy2.png" width={413} height={400} alt="" />
            </div>
            <div className='translateX-css hidden sp460min:flex sp970min:hidden  absolute left-[50%]  top-[470px] z-[1] '>
                <img className='img-max-width-none' src="/images/marketplace/floor.png" width={573} height={153} alt="" />
            </div>

            <div className='translateX-css flex sp460min:hidden  absolute  left-[50%]  top-[200px] z-[2] '>
                <img className='img-max-width-none' src="/images/charAvartar/goldy2.png" width={350} height={320} alt="" />
            </div>
            <div className='translateX-css flex sp460min:hidden  absolute left-[50%]  top-[480px] z-[1] '>
                <img className='img-max-width-none' src="/images/marketplace/floor.png" width={500} height={120} alt="" />
            </div>

            <div className={cn('translateX-css flex justify-center items-center sp970min:hidden  absolute left-[50%]  top-[630px] z-[1] ', styles.buy_bg)}>
                <div className={cn('mr-[47px] flex justify-center items-center text-[#FFFFFF] texy-[17px] ' , styles.buyBTN_bg)}>
                    SELL
                </div>
                
            </div>

            <div className={cn('hidden sp460min:flex absolute top-[50px] right-[50px] text-[#E1FAFF] text-[20px] sp970min:hidden justify-center items-center mb-[20px] ' ,styles.goldy_title)}>
                Goldy#12293
            </div>
            <div className={cn('absolute top-[50px] right-[30px] text-[#E1FAFF] text-[17px] flex sp460min:hidden justify-center items-center mb-[20px] ' ,styles.goldy_title_200)}>
                Goldy#12293
            </div>

        </div>
    )
}
export default EnhanceBreed ;