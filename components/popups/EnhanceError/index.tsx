import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';


export default function EnhanceError({ onClose, visible, msg = '' }) {
    if(!visible) return (<></>);
    return (
        <div className="z-[3000] ">
            <div className='fixed w-screen h-screen left-0 top-0 bg-transparent'
                onClick={onClose}
            ></div>
            <div className='fixed top-1/2 left-[24%] -translate-x-1/2 -translate-y-1/2 flex flex-col w-[480px] h-[306px] rounded-[16px] px-[24px] pb-[34px] bg-[#02222A] border-[1px] border-[#025962]  '>
                <div className='flex items-center justify-between h-[78px] w-full text-[20px] px-[10px] pt-[5px] '>
                    <div className='invisible'>Error</div> 
                    <button className='text-[#025962] text-[26px] z-[3000]' onClick={onClose}>x</button>
                </div>
                <div className='flex justify-center'>
                    <Image  src="/images/enhancement/caution-sign.svg" width={132} height={132} alt="alert" />
                </div>
                <div className='flex justify-center text-center text-[#FFFFFF] text-[18px] py-[30px] '>Please select a goldy you want to enhance </div>
                <div className='flex justify-center text-center text-[#43F3FF] text-[12px]'>Learn more about Goldy Enhancement</div>
                
            </div>
        </div>
    )
}