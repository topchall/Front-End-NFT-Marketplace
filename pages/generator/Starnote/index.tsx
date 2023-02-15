import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect, useRef, useState,Fragment } from 'react' ;
import Image from 'next/image' ;
import StarLevel from 'components/StarLevel' ;

const Starnote =({isShow})=>{

    return (
        <div className={cn("absolute left-[20px] sp1440min:left-[160px] top-[150px] hidden lgmin:flex flex-col justify-center px-[25px] pt-[10px] " , styles.styles_start ,!isShow && 'hidden')}>
            <div className="text-[#D8D8D8] text-[15px] ">This random generator has possibility of</div>
            <div className="text-[#43F3FF] text-[16px] ">0 star up to 3star</div>

            <div className=" flex justify-between pl-[10px] w-[215px] pt-[30px]">
                <div className="text-[#43F3FF] text-[16px]">Zero Star 75%</div>
                <div className=""><StarLevel star_num={0}/></div>
            </div>
            <div className=" flex justify-between pl-[10px] w-[215px] ">
                <div className="text-[#43F3FF] text-[16px]">1 Star 15%</div>
                <div className=""><StarLevel star_num={1}/></div>
            </div>
            <div className=" flex justify-between pl-[10px] w-[215px] ">
                <div className="text-[#43F3FF] text-[16px]">2 Star 7%</div>
                <div className=""><StarLevel star_num={2}/></div>
            </div>
            <div className=" flex justify-between pl-[10px] w-[215px] ">
                <div className="text-[#43F3FF] text-[16px]">3 Star 3%</div>
                <div className=""><StarLevel star_num={3}/></div>
            </div>

            <div className="text-[#FF4E4E] text-[15px] pt-[30px]">Only GOD token can be use to purchase. There will be no Goldypot numbers on generator</div>
        </div>
    )
}

export default Starnote ;