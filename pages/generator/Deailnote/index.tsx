import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect, useRef, useState,Fragment } from 'react';
import Image from 'next/image';
import StarLevel from 'components/StarLevel' ;
import ProgressCustom from '../ProgressCustom';


const Deailnote=({isShow})=>{

    return (
        <div className={cn("absolute left-[160px] top-[150px] flex flex-col justify-start px-[25px] pt-[10px] " ,!isShow && 'hidden')}>
                    <div className={cn('text-[#E1FAFF] text-[20px] flex justify-center items-center ' ,styles.goldy_title)}>
                        Goldy#12293
                    </div>
                    <div className={cn('-ml-[15px]' , styles.goldy_body)}>
                        <div className=" flex justify-between pl-[47px] pt-[26px] w-[215px] ">
                            <div className="text-[#E1FAFF] text-[18px]">Grade:</div>
                            <div className=""><StarLevel star_num={5} /></div>
                        </div>
                        <div className=" flex justify-start pl-[47px] w-[215px] ">
                            <div className="text-[#E1FAFF] text-[18px]">Gem Class:</div>
                            <Image src={'/images/updated_one/oxil.png'} width='29px' height='20px' alt='startb'  />
                            <div className="text-[#E1FAFF] text-[18px]">OXIL</div>
                        </div>
                        <div className={cn('ml-[10px] mt-[15px] text-[#E1FAFF] text-[18px] pl-[36px] ', styles.attributes_line)}>
                            Attributes
                        </div>

                        <div className="  px-[47px] pt-[20px] ">
                            <div className="">
                                <div className="text-[#66CBE1] text-[18px] flex justify-start pb-[3px] ">
                                    <Image src={'/images/updated_one/deva.png'} width='29px' height='20px' alt='startb'  />
                                    &nbsp; Deva
                                </div>
                                <div className="flex w-[100%] justify-between items-center -my-[8px]">
                                    <ProgressCustom bgcolor="#F26262" completed={'21'} />
                                    <span className='text-[#F5C83B] text-[20px] pl-[10px]' >21</span>
                                </div>
                            </div>
                            <div className="xsmin:pt-[10px]">
                                <div className="text-[#66CBE1] text-[18px] flex justify-start pb-[3px] ">
                                    <Image src={'/images/updated_one/oxil.png'} width='29px' height='20px' alt='startb'  />
                                    &nbsp; Oxil
                                </div>
                                <div className="flex w-[100%] justify-between items-center  -my-[8px]">
                                    <ProgressCustom bgcolor="#51C9FF" completed={'48'} />
                                    <span className='text-[#F5C83B] text-[20px] pl-[10px]' >48</span>
                                </div>
                            </div>
                            <div className="xsmin:pt-[10px]">
                                <div className="text-[#66CBE1] text-[18px] flex justify-start pb-[3px] ">
                                    <Image src={'/images/updated_one/Lacto.png'} width='29px' height='20px' alt='startb'  />
                                    &nbsp; Grani
                                </div>
                                <div className="flex w-[100%] justify-between items-center  -my-[8px]">
                                    <ProgressCustom bgcolor="#60B726" completed={'32'} />
                                    <span className='text-[#F5C83B] text-[20px] pl-[10px]' >32</span>
                                </div>

                            </div>
                            <div className="xsmin:pt-[10px]">
                                <div className="text-[#66CBE1] text-[18px] flex justify-start pb-[3px] ">
                                    <Image src={'/images/updated_one/Yak.png'} width='29px' height='20px' alt='startb'  />
                                    &nbsp; Lacto
                                </div>
                                <div className="flex w-[100%] justify-between items-center  -my-[8px]">
                                    <ProgressCustom bgcolor="#C356C7" completed={'31'} />
                                    <span className='text-[#F5C83B] text-[20px] pl-[10px]' >31</span>
                                </div>
                            </div>
                            <div className="xsmin:pt-[10px]">
                                <div className="text-[#66CBE1] text-[18px] flex justify-start pb-[3px] ">
                                    <Image src={'/images/updated_one/deva.png'} width='29px' height='20px' alt='startb'  />
                                    &nbsp; Yak
                                </div>
                                <div className="flex w-[100%] justify-between items-center  -my-[8px]">
                                    <ProgressCustom bgcolor="#F5C83B" completed={'12'} />
                                    <span className='text-[#F5C83B] text-[20px] pl-[10px]' >12</span>
                                </div>

                            </div>
                            
                        </div>
                           
                        <div className={cn('ml-[10px] mt-[15px] text-[#E1FAFF] text-[18px] pl-[36px] ', styles.attributes_line)}>
                            Parts
                        </div>
                        <div className="flex justify-between px-[60px] pt-[15px]">
                            <Image src={'/images/marketplace/parts/b1.png'} width='45px' height='50px' alt='startb'  />
                            <Image src={'/images/marketplace/parts/ear2.png'} width='45px' height='50px' alt='startb'  />
                            <Image src={'/images/marketplace/parts/a4.png'} width='45px' height='50px' alt='startb'  />
                            <Image src={'/images/marketplace/parts/l1.png'} width='45px' height='50px' alt='startb'  />


                        </div>
                    </div>
                </div>
    )
}

export default Deailnote ;