import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BuyPetDetail from './BuyPetDetail' ;
import GoBack from 'components/buttons/GoBack' ;

const MarketplaceBuyDetailPet =()=>{

    return(
        <div className={cn('relative h-[1500px] sp970min:h-[1000px] overflow-hidden	 bg-[#0B1A34]')}>
            <div className={cn('w-full hidden sp970min:flex  ',styles.bg_img)}></div>
            <div className={cn('w-full flex sp970min:hidden  ',styles.bg_mobile_img)}></div>
            <GoBack className='hidden sp460min:flex text-[11px] top-[80px] sp1440min:top-[90px] sp1770min:top-[100px] left-[50px] lgmin:left-[120px] sp1440min:left-[80px] sp1770min:left-[20%] ' title='Go Back' />
            <GoBack className='flex sp460min:hidden text-[11px] top-[30px] left-[30px]' title='' />
            <BuyPetDetail />
            <div className='translateX-css hidden xlmin:block absolute  left-[900px] sp1440min:left-[65%] sp1770min:left-[70%] top-[130px] z-[2] '>
                <img className='img-max-width-none' src="/images/marketplace/pet1.png" width={513} height={500} alt="" />
            </div>
            <div className='translateX-css hidden xlmin:block absolute left-[900px] sp1440min:left-[65%] sp1770min:left-[70%] top-[510px] z-[1] '>
                <img className='img-max-width-none' src="/images/marketplace/floor2.png" width={730} height={195} alt="" />
            </div>
            <div className={cn('translateX-css hidden xlmin:flex justify-center items-center absolute left-[900px] sp1440min:left-[65%] sp1770min:left-[70%] top-[720px] z-[1] ' , styles.buy_bg)}>
                <div className={cn('mr-[47px] flex justify-center items-center text-[#FFFFFF] texy-[17px] ' , styles.buyBTN_bg)}>
                    BUY
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex justify-start items-center'>
                        <div className='text-[24px] text-[white] font-semibold '>5,000 GOD</div>
                        <div className='flex items-center pl-[10px] pt-[5px]'>
                            <img src="/images/marketplace/goldefy_icon.png" width={25} height={25} alt=''  />
                        </div>
                    </div>
                    <div className='text-[#FFFFFF] text-[15]'>440USD</div>
                </div>
            </div>
            {/*  */}

            <div className='translateX-css hidden sp970min:flex xlmin:hidden  absolute  left-[70%]  top-[210px] z-[2] '>
                <img className='img-max-width-none' src="/images/marketplace/pet1.png" width={413} height={400} alt="" />
            </div>
            <div className='translateX-css hidden sp970min:flex xlmin:hidden  absolute left-[70%]  top-[530px] z-[1] '>
                <img className='img-max-width-none' src="/images/marketplace/floor2.png" width={573} height={153} alt="" />
            </div>
            <div className={cn('translateX-css hidden sp970min:flex justify-center items-center xlmin:hidden  absolute left-[70%]  top-[690px] z-[1] ', styles.buy_bg)}>
                <div className={cn('mr-[47px] flex justify-center items-center text-[#FFFFFF] texy-[17px] ' , styles.buyBTN_bg)}>
                    BUY
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex justify-start items-center'>
                        <div className='text-[24px] text-[white] font-semibold '>5,000 GOD</div>
                        <div className='flex items-center pl-[10px] pt-[5px]'>
                            <img src="/images/marketplace/goldefy_icon.png" width={25} height={25} alt=''  />
                        </div>
                    </div>
                    <div className='text-[#FFFFFF] text-[15]'>440USD</div>
                </div>
            </div>

            {/* mobile part */}

            <div className='translateX-css hidden sp460min:flex sp970min:hidden  absolute  left-[50%]  top-[150px] z-[2] '>
                <img className='img-max-width-none' src="/images/marketplace/pet1.png" width={413} height={400} alt="" />
            </div>
            <div className='translateX-css hidden sp460min:flex sp970min:hidden  absolute left-[50%]  top-[470px] z-[1] '>
                <img className='img-max-width-none' src="/images/marketplace/floor2.png" width={573} height={153} alt="" />
            </div>

            <div className='translateX-css flex sp460min:hidden  absolute  left-[50%]  top-[200px] z-[2] '>
                <img className='img-max-width-none' src="/images/marketplace/pet1.png" width={350} height={320} alt="" />
            </div>
            <div className='translateX-css flex sp460min:hidden  absolute left-[50%]  top-[480px] z-[1] '>
                <img className='img-max-width-none' src="/images/marketplace/floor2.png" width={500} height={120} alt="" />
            </div>

            <div className={cn('translateX-css flex justify-center items-center sp970min:hidden  absolute left-[50%]  top-[630px] z-[1] ', styles.buy_bg)}>
                <div className={cn('mr-[47px] flex justify-center items-center text-[#FFFFFF] texy-[17px] ' , styles.buyBTN_bg)}>
                    BUY
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex justify-start items-center'>
                        <div className='text-[24px] text-[white] font-semibold '>5,000 GOD</div>
                        <div className='flex items-center pl-[10px] pt-[5px]'>
                            <img src="/images/marketplace/goldefy_icon.png" width={25} height={25} alt=''  />
                        </div>
                    </div>
                    <div className='text-[#FFFFFF] text-[15]'>440USD</div>
                </div>
            </div>

        </div>
    )
}
export default MarketplaceBuyDetailPet ;