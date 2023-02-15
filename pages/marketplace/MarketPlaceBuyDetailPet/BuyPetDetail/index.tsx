import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect, useRef, useState,Fragment } from 'react';
import Image from 'next/image';
import StarLevel from 'components/StarLevel' ;
import ProgressCustom from 'pages/generator/ProgressCustom';

const BuyPetDetail=({})=>{

    return (
        <>
            <div className={cn("hidden sp970min:flex absolute left-[20px] lgmin:left-[100px] sp1440min:left-[200px] sp1770min:left-[28%] top-[130px]  flex-col justify-start px-[25px] pt-[10px] ")}>
                
                <div className={cn('-ml-[15px] mt-[20px] ' , styles.goldy_body)}>
                    
                    <div className=" flex justify-between px-[30px] pt-[30px]  ">
                        <div className="text-[#E1FAFF] text-[18px]">ID</div>
                        <div className="text-[#E1FAFF] text-[18px]">Pet#17e48</div>
                    </div>
                    <div className=" flex justify-between px-[30px] pt-[8px]  ">
                        <div className="text-[#E1FAFF] text-[18px]">Owner</div>
                        <div className="text-[#E1FAFF] text-[18px]">0x95e23f9e002...55e1a3</div>
                    </div>
                    <div className={cn('ml-[10px] mt-[30px] text-[#E1FAFF] text-[18px] pl-[36px] ', styles.attributes_line)}>
                        Attributes
                    </div>

                    <div className="  px-[27px] pt-[20px] ">
                        <div className="flex  justify-between items-center ">
                            <div className='flex justify-center items-center'>
                                <img className="img-max-width-none" src='/images/a1.svg' width={68} height={90} alt="" />
                            </div>
                            <div className=' text-[14px] text-[white] pl-[8px] '>
                                Equipped Goldy's mining amount increased by <label className='text-[#43F3FF]'>3%</label> 
                            </div>
                        </div>
                        <div className="flex  justify-between items-center py-[5px] ">
                            <div className='flex justify-center items-center'>
                                <img className="img-max-width-none" src='/images/a2.svg' width={68} height={90} alt="" />
                            </div>
                            <div className=' text-[14px] text-[white] pl-[8px] '>
                             Reduces Hunger Reduction of Equipped Goldy by <label className='text-[#43F3FF]'>0.1%</label> 
                            </div>
                        </div>
                        <div className="flex  justify-between items-center py-[5px] ">
                            <div className='flex justify-center items-center'>
                                <img className="img-max-width-none" src='/images/a3.svg' width={68} height={90} alt="" />
                            </div>
                            <div className=' text-[14px] text-[white] pl-[8px] '>
                                When the equipped Goldy breeds, the chance of breeding advantage increases by <label className='text-[#43F3FF]'>3%</label> 
                            </div>
                        </div>
                        <div className="flex  justify-between items-center py-[5px] ">
                            <div className='flex justify-center items-center'>
                                <img className="img-max-width-none" src='/images/a4.svg' width={68} height={68} alt="" />
                            </div>
                            <div className=' text-[14px] text-[white] pl-[8px] '>
                                When the equipped Goldy attempts to synthesize, the synthesis rate increases by <label className='text-[#43F3FF]'>10%</label> 
                            </div>
                        </div>

                        
                    </div>
                        
                    
                </div>
            </div>
            <div className={cn("translateX-css flex sp970min:hidden  absolute left-[51%]  top-[730px]  flex-col justify-start  pt-[10px] ")}>
                
                <div className={cn('-ml-[15px] mt-[20px] ' , styles.goldy_body)}>
                    
                    <div className=" flex justify-between px-[30px] pt-[30px]  ">
                        <div className="text-[#E1FAFF] text-[18px]">ID</div>
                        <div className="text-[#E1FAFF] text-[18px]">Pet#17e48</div>
                    </div>
                    <div className=" flex justify-between px-[30px] pt-[8px]  ">
                        <div className="text-[#E1FAFF] text-[18px]">Owner</div>
                        <div className="text-[#E1FAFF] text-[18px]">0x95e23f9e002...55e1a3</div>
                    </div>
                    <div className={cn('ml-[10px] mt-[30px] text-[#E1FAFF] text-[18px] pl-[36px] ', styles.attributes_line)}>
                        Attributes
                    </div>

                    <div className="  px-[27px] pt-[20px] ">
                        <div className="flex  justify-between items-center ">
                            <div className='flex justify-center items-center'>
                                <img className="img-max-width-none" src='/images/a1.svg' width={68} height={90} alt="" />
                            </div>
                            <div className=' text-[14px] text-[white] pl-[8px] '>
                                Equipped Goldy's mining amount increased by <label className='text-[#43F3FF]'>3%</label> 
                            </div>
                        </div>
                        <div className="flex  justify-between items-center py-[5px] ">
                            <div className='flex justify-center items-center'>
                                <img className="img-max-width-none" src='/images/a2.svg' width={68} height={90} alt="" />
                            </div>
                            <div className=' text-[14px] text-[white] pl-[8px] '>
                             Reduces Hunger Reduction of Equipped Goldy by <label className='text-[#43F3FF]'>0.1%</label> 
                            </div>
                        </div>
                        <div className="flex  justify-between items-center py-[5px] ">
                            <div className='flex justify-center items-center'>
                                <img className="img-max-width-none" src='/images/a3.svg' width={68} height={90} alt="" />
                            </div>
                            <div className=' text-[14px] text-[white] pl-[8px] '>
                                When the equipped Goldy breeds, the chance of breeding advantage increases by <label className='text-[#43F3FF]'>3%</label> 
                            </div>
                        </div>
                        <div className="flex  justify-between items-center py-[5px] ">
                            <div className='flex justify-center items-center'>
                                <img className="img-max-width-none" src='/images/a4.svg' width={68} height={68} alt="" />
                            </div>
                            <div className=' text-[14px] text-[white] pl-[8px] '>
                                When the equipped Goldy attempts to synthesize, the synthesis rate increases by <label className='text-[#43F3FF]'>10%</label> 
                            </div>
                        </div>

                        
                    </div>
                        
                    
                </div>
                
            </div>
            
        </>
    )
}

export default BuyPetDetail ;