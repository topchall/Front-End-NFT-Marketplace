import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const EnhanceToolBar =()=>{

    const calc =()=>{

    }

    return(
        <div className="bg-[#1A1A1A] flex justify-between items-center h-[64px] ">
            <div className="flex justify-center items-center text-[white] text-[13px] ">
                <div className='pl-[50px]'>All</div>
                <div className="flex justify-around items-center pl-[30px] ">
                    <div className='flex sp1490min:hidden  sp1770min:flex items-center'><Image src="/images/goldypass/DEVA.png" width={25} height={25} alt="bowel" /></div>
                    <div className='ml-[7px]'>Deva</div>
                </div>
                <div className="flex justify-around items-center pl-[30px] ">
                    <div className='flex sp1490min:hidden  sp1770min:flex items-center'><Image src="/images/goldypass/OXIL.png" width={25} height={25} alt="bowel" /></div>
                    <div className='ml-[7px]'>Grani</div>
                </div>
                <div className="flex justify-around items-center pl-[30px]">
                    <div className='flex sp1490min:hidden  sp1770min:flex items-center'><Image src="/images/goldypass/LACTO.png" width={25} height={25} alt="bowel" /></div>
                    <div className='ml-[7px]'>Lacto</div>
                </div>
                <div className="flex justify-around items-center pl-[30px] ">
                    <div className='flex sp1490min:hidden  sp1770min:flex items-center'><Image src="/images/goldypass/OXIL.png" width={25} height={25} alt="bowel" /></div>
                    <div className='ml-[7px]'>Oxil</div>
                </div>
                <div className="flex justify-around items-center pl-[30px] ">
                    <div className='flex sp1490min:hidden  sp1770min:flex items-center'><Image src="/images/goldypass/YAK.png" width={25} height={25} alt="bowel" /></div>
                    <div className='ml-[7px]'>Yak</div>
                </div>
            </div>
            <div className="flex justify-center items-center ">
                <div className='mr-[45px] flex items-center '>
                    

                    <select className="w-[139px] h-[29px]    bg-[#234B54]  text-[#FFFFFF] text-[11px] border-[1px] border-[#025962]	 " name="" id=""   >
                        <option value="">Lower Price</option>
                        <option value="">High Price</option>
                    </select>
                </div>
                <div className='bg-[#06B3C7] rounded-[10px] w-[199px] h-[29px] flex justify-center items-center font-bold text-[11px] text-white '>
                    ABOUT ENHANCING
                </div>
            </div>
        </div>
    )
}

export default EnhanceToolBar ;