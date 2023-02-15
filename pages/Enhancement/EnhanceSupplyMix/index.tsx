import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect, useRef, useState,Fragment } from 'react';
import Image from 'next/image';
import StarLevel from 'components/StarLevel' ;
import ProgressCustom from 'pages/generator/ProgressCustom';
import { useRouter } from 'next/router' ;
import BreedDetail from './BreedDetail' ;
const EnhanceSupplyMix=({})=>{

    const [isDetail , setDetail] = useState(false) ;
    const breedDetail = () => {
        setDetail(true) ;
    }
    const closeDetail = () => {
        setDetail(false) ;
    }

    return (
        <>
            <div className={cn("hidden sp970min:flex absolute left-[20px] lgmin:left-[100px] sp1440min:left-[200px] sp1770min:left-[28%] top-[130px]  flex-col justify-start px-[25px] pt-[10px] ")}>
                <div className='flex justify-center items-center mb-[20px]'>
                    <div className={cn(' mr-[10px] text-[#E1FAFF] text-[20px] flex justify-center items-center  ' ,styles.goldy_title)}>
                        Goldy#12293
                    </div>
                    <div className='ml-[10px] border-[1px] border-[#43F3FF] bg-[#00323B] rounded-[9px] w-[130px] h-[60px] flex justify-center items-center text-[15px] text-[white]' onClick={breedDetail} >
                        <div className='flex items-center justify-center'>Breed</div>
                        <div className='flex items-center justify-center pl-[10px] '><Image src="/images/enhancement/hearticon.svg" width={18} height={15} alt="breadheart" /></div>
                    </div>
                </div>
                <div className={cn('-ml-[15px]' , styles.goldy_body)}>
                    <div className=" flex justify-between px-[30px] pt-[26px]  ">
                        <div className="text-[#E1FAFF] text-[18px]">Grade:</div>
                        <div className=""><StarLevel star_num={0} /></div>
                    </div>
                    <div className=" flex justify-between px-[30px] pt-[8px] ">
                        <div className="text-[#E1FAFF] text-[18px]">Gem Class:</div>
                        <div className='flex'>
                            <Image src={'/images/updated_one/yak.png'} width='21px' height='20px' alt='startb'  />
                            <div className="text-[#E1FAFF] text-[18px] pl-[15px] ">YAK</div>
                        </div>
                    </div>
                    <div className=" flex justify-between px-[30px] pt-[8px]  ">
                        <div className="text-[#E1FAFF] text-[18px]">Breed Count</div>
                        <div className="text-[#E1FAFF] text-[18px]">0</div>
                    </div>
                    <div className=" flex justify-between px-[30px] pt-[8px]  ">
                        <div className="text-[#E1FAFF] text-[18px]">Owner</div>
                        <div className="text-[#E1FAFF] text-[18px]">0x95e23f9e002...55e1a3</div>
                    </div>
                    <div className={cn('ml-[10px] mt-[30px] text-[#E1FAFF] text-[18px] pl-[36px] ', styles.attributes_line)}>
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
                                <ProgressCustom bgcolor="#F5C83B" completed={'42'} />
                                <span className='text-[#F5C83B] text-[20px] pl-[10px]' >42</span>
                            </div>

                        </div>
                        
                    </div>
                        
                    
                </div>

                <div className={cn('mt-[10px] ml-[5px] flex justify-around items-center px-[50px] ', styles.combineItemBg)}>
                    <Image src="/images/marketplace/parts/ear5.png" width={42} height={42} alt="" />
                    <Image src="/images/marketplace/parts/b5.png" width={45} height={45} alt="" />
                    <Image src="/images/marketplace/parts/a1.png" width={49} height={49} alt="" />
                    <Image src="/images/marketplace/parts/l5.png" width={45} height={45} alt="" />
                </div>
            </div>
            <div className={cn("translateX-css flex sp970min:hidden  absolute left-[51%]  top-[730px]  flex-col justify-start  pt-[10px] ")}>
                
                <div className={cn('mt-[0px] mb-[10px] ml-[5px] flex justify-around items-center px-[50px] ', styles.combineItemBg)}>
                    <Image src="/images/marketplace/parts/ear5.png" width={42} height={42} alt="" />
                    <Image src="/images/marketplace/parts/b5.png" width={45} height={45} alt="" />
                    <Image src="/images/marketplace/parts/a1.png" width={49} height={49} alt="" />
                    <Image src="/images/marketplace/parts/l5.png" width={45} height={45} alt="" />
                </div>

                <div className={cn('-ml-[15px]' , styles.goldy_body)}>
                    <div className=" flex justify-between px-[30px] pt-[26px]  ">
                        <div className="text-[#E1FAFF] text-[18px]">Grade:</div>
                        <div className=""><StarLevel star_num={5} /></div>
                    </div>
                    <div className=" flex justify-between px-[30px] pt-[8px] ">
                        <div className="text-[#E1FAFF] text-[18px]">Gem Class:</div>
                        <div className='flex'>
                            <Image src={'/images/updated_one/oxil.png'} width='29px' height='20px' alt='startb'  />
                            <div className="text-[#E1FAFF] text-[18px]">OXIL</div>
                        </div>
                    </div>
                    <div className=" flex justify-between px-[30px] pt-[8px]  ">
                        <div className="text-[#E1FAFF] text-[18px]">Breed Count</div>
                        <div className="text-[#E1FAFF] text-[18px]">0</div>
                    </div>
                    <div className=" flex justify-between px-[30px] pt-[8px]  ">
                        <div className="text-[#E1FAFF] text-[18px]">Owner</div>
                        <div className="text-[#E1FAFF] text-[18px]">0x95e23f9e002...55e1a3</div>
                    </div>
                    <div className={cn('ml-[10px] mt-[30px] text-[#E1FAFF] text-[18px] pl-[36px] ', styles.attributes_line)}>
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
                        <div className="pt-[10px]">
                            <div className="text-[#66CBE1] text-[18px] flex justify-start pb-[3px] ">
                                <Image src={'/images/updated_one/oxil.png'} width='29px' height='20px' alt='startb'  />
                                &nbsp; Oxil
                            </div>
                            <div className="flex w-[100%] justify-between items-center  -my-[8px]">
                                <ProgressCustom bgcolor="#51C9FF" completed={'48'} />
                                <span className='text-[#F5C83B] text-[20px] pl-[10px]' >48</span>
                            </div>
                        </div>
                        <div className="pt-[10px]">
                            <div className="text-[#66CBE1] text-[18px] flex justify-start pb-[3px] ">
                                <Image src={'/images/updated_one/Lacto.png'} width='29px' height='20px' alt='startb'  />
                                &nbsp; Grani
                            </div>
                            <div className="flex w-[100%] justify-between items-center  -my-[8px]">
                                <ProgressCustom bgcolor="#60B726" completed={'32'} />
                                <span className='text-[#F5C83B] text-[20px] pl-[10px]' >32</span>
                            </div>

                        </div>
                        <div className="pt-[10px]">
                            <div className="text-[#66CBE1] text-[18px] flex justify-start pb-[3px] ">
                                <Image src={'/images/updated_one/Yak.png'} width='29px' height='20px' alt='startb'  />
                                &nbsp; Lacto
                            </div>
                            <div className="flex w-[100%] justify-between items-center  -my-[8px]">
                                <ProgressCustom bgcolor="#C356C7" completed={'31'} />
                                <span className='text-[#F5C83B] text-[20px] pl-[10px]' >31</span>
                            </div>
                        </div>
                        <div className="pt-[10px]">
                            <div className="text-[#66CBE1] text-[18px] flex justify-start pb-[3px] ">
                                <Image src={'/images/updated_one/deva.png'} width='29px' height='20px' alt='startb'  />
                                &nbsp; Yak
                            </div>
                            <div className="flex w-[100%] justify-between items-center  -my-[8px]">
                                <ProgressCustom bgcolor="#F5C83B" completed={'42'} />
                                <span className='text-[#F5C83B] text-[20px] pl-[10px]' >42</span>
                            </div>

                        </div>
                        
                    </div>
                        
                    
                </div>

                
            </div>
            <BreedDetail isOpen={isDetail} onClose={closeDetail} />
        </>
    )
}

export default EnhanceSupplyMix ;