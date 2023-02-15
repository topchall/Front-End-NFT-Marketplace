import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect, useRef, useState,Fragment } from 'react';
import Image from 'next/image';
import Coming_soon from 'components/Coming_soon';

export default function conversions() {
    
    const [convertDetail , setConvertDetail] = useState(false) ;
    


    return(
        <div>
            <div className={cn(' bg-[#032C32] flex flex-col justify-center items-center ' , convertDetail && 'hidden')} >
                <div className='flex flex-col justify-center items-center pt-[110px] '>
                    <div className='text-[white] text-[65px] '>Convertion</div>
                    <div className='text-[white] text-[13px]'>CONVERT G-TOKEN TO GOD TOKEN. FROM PLAYER TO HOLDER</div>
                </div>
                <div className='flex justify-center pt-[71px] '>
                    <div className={cn('pb-[55px] flex flex-col items-center justify-center ',styles.convert1_btn)}>
                        <div className=''>
                            <img src="/images/convertion/gtoken.png" width={55} height={90} alt="" />
                        </div>
                        <div className='text-[white] text-[36px] '>14,860,992</div>
                        <div className=' text-[#43F3FF] text-[21px] '>G TOKEN</div>
                    </div>
                    <div className='flex flex-col justify-center items-center -mt-[40px]'>
                        <div className='flex justify-center items-center pb-[10px] '>
                            <img src="/images/convertion/convert arrow.png" width={60} height={45} alt="" />
                        </div>
                        <div className='text-[white] text-[16] '>CONVERTED</div>
                    </div>
                    <div className={cn('pb-[55px] flex flex-col items-center justify-center ',styles.convert2_btn)}>
                        <div className=''>
                            <img src="/images/convertion/god-token.png" width={55} height={90} alt="" />
                        </div>
                        <div className='text-[white] text-[36px] '>479,902</div>
                        <div className=' text-[#43F3FF] text-[21px] '>GOD TOKEN</div>
                    </div>
                </div>
                <div className=' pt-[0px] text-[white] text-[13px] flex flex-col items-center justify-center '>
                    <div className=''>Total self converted: 0 G-TOKEN / 5,000 G-TOKEN </div>
                    <div className=''>Total market converted: $3,489,027 / $13,000,000 </div>
                </div>
                <div className='font-bold mt-[41px] mb-[92px] bg-[#43F3FF] text-[black] text-[16px] rounded-[20px] w-[483px] h-[67px] flex justify-center items-center cursor-pointer ' onClick={()=>setConvertDetail(!convertDetail)} >
                    CONVERT
                </div>
            </div>

        </div>

    )

} 