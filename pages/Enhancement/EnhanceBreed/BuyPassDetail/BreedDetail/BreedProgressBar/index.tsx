import cn from "classnames" ;
import styles from './index.module.scss';

import { BeatLoader, BarLoader } from 'react-spinners' ;
import { useEffect, useRef, useState,Fragment } from 'react';
import Image from 'next/image';

const BreedProgressBar =() =>{
    return(
        <div className="flex items-center justify-center pt-[30px] "> 
            <div className="p-[4px] bg-[#061113] rounded-[50px] flex items-center justify-center -mr-[2px] ">
                <Image src="/images/enhancement/egg.png" width={12} height={13} alt="" />
            </div>
            <div className=" bg-[#061113] pl-[5px] w-[279px] h-[12px] py-[4px] flex items-center justify-start ">
                <div className="flex items-center bg-[#43F3FF] rounded-[2px] w-[135px] h-[4px] "></div>
            </div>
            <div className="p-[4px] bg-[#061113] rounded-[50px] flex items-center justify-center -ml-[2px] ">
                <Image src="/images/enhancement/egg.png" width={12} height={13} alt="" />
            </div>
        </div>
    )
}

export default BreedProgressBar ;