import cn from "classnames" ;
import styles from './index.module.scss';

import { BeatLoader, BarLoader } from 'react-spinners' ;
import { useEffect, useRef, useState,Fragment } from 'react';
import Image from 'next/image';
import StarLevel from "components/StarLevel" ;
import BreedProgressBar from "./BreedProgressBar" ;
import EnhanceGoldyCard from "pages/Enhancement/EnhanceGoldyCard" ;

export default function BreedDetail({  isOpen = true, onClose }) {
    

// rim Data

const rim_data=[
    {id:'1' , breed:'3' , price:'23' , name:'num1'} ,
    {id:'2' , breed:'2' , price:'23' , name:'num2'} ,
    {id:'3' , breed:'5' , price:'23' , name:'num3'} ,
    {id:'4' , breed:'3' , price:'23' , name:'num4'} ,
    
]

    const wrapper = useRef<HTMLDivElement>();
    const [width, setWidth] = useState(0);

    const [stepFlg , setStep] = useState(0) ;
    const [breedingInfo , setBreedingInfo] = useState(false) ;
    const [mainPage,  setMainPage] = useState(1) ;
    const openBreedInfo =()=>{
        setBreedingInfo(!(breedingInfo)) ;
    }

    useEffect(() => {
        const onResize = () => {
            setWidth(wrapper.current.clientWidth) ;
        }
        window.addEventListener('resize', onResize);
        onResize();
        // console.log(wrapper.current.clientWidth) ;
        return () => window.removeEventListener('resize', onResize);
    }, [wrapper]) ;

    return  (
        <>
            <div className={cn('fixed top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 z-[30] flex justify-start', !isOpen && 'hidden' ,mainPage !== 1 && 'hidden')} ref={wrapper}>
                <div className='w-[647px] h-[621px] xsmax:w-[300px] border border-[#44B8D2] rounded-[34px] bg-[#01242B] text-white text-[21px] xsmax:text-[18px]'>
                    <div className='h-[90px] flex justify-between items-center pl-[40px] pr-[38px] text-[22px]  '>
                        Goldy Breeding
                        <div className="flex items-center justify-center">
                            <div className="flex items-center justify-center mr-[20px] cursor-pointer " onClick={openBreedInfo} >
                                <div className="select-none	 flex items-center justify-center w-[99px] h-[34px] text-[12px] text-white bg-gradient-to-t from-[#025962] to-[#01282c] rounded-[9px]  ">
                                    Breeding info
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className='text-[#025962] text-[24px] font-euro font-bold' onClick={onClose} >
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                    
    {/* main */}

                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div>
                                <Image src="/images/charAvartar/goldy2.png" width={206} height={206} alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center -mt-[20px] ">
                                <div className="flex items-center justify-center">
                                    <div className=" bg-[#083B43] rounded-[7px] w-[90px] h-[24px] flex items-center justify-center text-[12px] text-[#E1FAFF] ">
                                        Goldy#44412
                                    </div>
                                </div>
                                <div><StarLevel star_num={0} /></div>
                                <div className=" text-white text-[13px] -mt-[6px] ">
                                    BREED COUNT
                                </div>
                                <div className="text-[white] text-[15px] -mt-[5px] " >
                                    0/7
                                </div>
                            </div>
                        
                        </div>
                        <div className="flex flex-col items-center justify-center -mt-[80px] ">
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center text-center justify-center rounded-[5px] text-[9px] w-[52px] h-[47px] bg-[#091B1F] border-[1px] border-[#586A7D]  ">Add Pet (optional)</div>
                                <div className=" w-[0px] h-[29px] border-[1px] border-[#586A7D] "></div>
                            </div>
                            <div className=" flex items-center justify-center ">
                                <div className="w-[41px] h-[0px] border-[1px] border-[#586A7D] "></div>
                                <div className=""> <Image src="/images/enhancement/life.svg" width={73} height={73} alt ="heart-svg" /> </div>
                                <div className="w-[41px] h-[0px] border-[1px] border-[#586A7D] "></div>
                            </div>
                            <div className="flex flex-col items-center justify-center -mt-[5px] ">
                                <div className=" w-[0px] h-[29px] border-[1px] border-[#586A7D] "></div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="flex items-center justify-center w-[100px] h-[37px] text-[white] text-[16px] rounded-[9px] border border-[#586A7D] ">
                                        <div className="flex items-center justify-center">5000</div>
                                        <div className="flex items-center justify-center pl-[7px] "> <Image src="/images/enhancement/g.png" width={17} height={29} alt="goldefy" /> </div>
                                    </div>
                                    <div className="flex items-center justify-center text-[white] text-[9px] font-semibold mt-[5px] ">
                                        REQUIRED G-TOKEN
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cn("flex flex-col items-center justify-center  " , stepFlg !== 0 && 'hidden')}>
                            <div className={cn("-mt-[70px] pl-[10px] flex items-center justify-center text-white text-[15px] font-semibold ",styles.goldy_shadow)}>
                                Select Goldy
                            </div>
                        </div>   
                        <div className={cn("flex flex-col items-center justify-center ml-[20px] " , stepFlg !== 1 && 'hidden')}>
                            <div>
                                <Image src="/images/charAvartar/g8.png" width={174} height={170} alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center mt-[5px] ">
                                
                                <div><StarLevel star_num={0} /></div>
                                <div className=" text-white text-[13px] -mt-[6px] ">
                                    BREED COUNT
                                </div>
                                <div className="text-[white] text-[15px] -mt-[5px] " >
                                    0/7
                                </div>
                            </div>
                        
                        </div>   
                        

                    </div>

    {/* bottom */}
                    <div className={cn(" pt-[50px] flex items-center justify-center  text-[#586A7D] text-[9px] font-semibold " , stepFlg !== 0 && 'hidden')}>
                        <div className="flex items-center justify-center pr-[6px]">
                            BREEDING FEE: <span className="ml-[7px] text-[13px] font-semibold text-white ">500</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src="/images/enhancement/50x50.png" width={15} height={15} alt="logo" />
                        </div>
                    </div>
                    <div className={cn("", stepFlg !== 1 && 'hidden' )}>
                        <BreedProgressBar />
                    </div>
                    <div className=' pt-[13px] flex justify-center px-[44px]'>
                        <button className={cn(' w-[189px] h-[53px] xsmax:w-[100px] xsmax:h-[38px] rounded-[14px] text-[15px] xsmax:text-[13px] text-[white]' ,stepFlg == 0 && 'bg-[#5A5A5A] ' ,stepFlg == 1 && 'bg-[#44B8D2] ' )}
                            onClick={onClose}
                        >
                            {  stepFlg == 0 ? 'BREED' : 'INVENTORY' }
                        </button>
                    </div>
                    <div className="flex items-center text-center text-[#919191] text-[12px] pt-[27px] px-[34px] ">
                        Breeding allows players to create new Goldy. This will allow players to expand and increase their asset and use them to increase the population in the game. Through breeding, no identical Goldy will appear, since every Goldy is very unique.
                    </div>
                </div>
                <div className={cn(' px-[18px] fixed flex flex-col justify-center items-center top-1/2   -translate-y-1/2 w-[431px] h-[621px] xsmax:w-[300px] border border-[#44B8D2] rounded-[34px] bg-[#01161D] text-white text-[21px] xsmax:text-[18px] duration-[300ms] ease-in-out	' , !breedingInfo && 'opacity-[0%] ' , breedingInfo && 'opacity-[100%]')} style={{left:(width/2 + 330 )}} >
                    <div className="">
                        <div className=" text-[16px] text-[white] font-semibold pt-[23px] pb-[11px] ">Goldy Info</div>
                        <div className="flex justify-center">
                            <table className="border-collapse border border-slate-500 ...">
                                <thead className=" text-[11px] text-[white] ">
                                    <tr>
                                        <th className="border text-center w-[200px] h-[40px]  border-slate-600 ...">Breeding Average Value</th>
                                        <th className="border text-center w-[200px] h-[40px] border-slate-600 ...">Time (Minutes)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[white] text-[14px] ">
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">1</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">720</td>
                                    </tr>
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">2</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">840</td>
                                    </tr>
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">3</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">840</td>
                                    </tr>
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">4</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">720</td>
                                    </tr>
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">5</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">840</td>
                                    </tr>
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">6</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">840</td>
                                    </tr>
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">7</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">840</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="">
                        <div className=" text-[16px] text-[white] font-semibold pt-[23px] pb-[11px] ">Advance Chance when Breeding</div>
                        <div className="flex justify-center">
                            <table className="border-collapse border border-slate-500 ...">
                                <thead className=" text-[11px] text-[white] ">
                                    <tr>
                                        <th className="border text-center w-[200px] h-[40px]  border-slate-600 ..."># of Breeding</th>
                                        <th className="border text-center w-[200px] h-[40px] border-slate-600 ...">0 Star Chance</th>
                                        <th className="border text-center w-[200px] h-[40px] border-slate-600 ...">1 Star Chance</th>
                                        <th className="border text-center w-[200px] h-[40px] border-slate-600 ...">2 Star Chance</th>
                                        <th className="border text-center w-[200px] h-[40px] border-slate-600 ...">3 Star Chance</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[white] text-[14px] ">
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">1</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">100%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                    </tr>
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">2</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">100%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                    </tr>
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">3</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">100%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                    </tr>
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">4</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">100%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                    </tr>
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">5</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">100%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                    </tr>
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">6</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">100%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                    </tr>
                                    <tr>
                                        <td className="h-[27px] text-center border border-slate-700 ...">7</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">100%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                        <td className="h-[27px] text-center border border-slate-700 ...">0%</td>
                                    </tr>
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className={cn('fixed top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 z-[30] flex justify-start', !isOpen && 'hidden' ,mainPage !== 2 && 'hidden')} >
                <div className='w-[647px] h-[621px] xsmax:w-[300px] border border-[#44B8D2] rounded-[34px] bg-[#01242B] text-white text-[21px] xsmax:text-[18px]'>
                    <div className='h-[90px] flex justify-between items-center pl-[40px] pr-[38px] text-[22px]  '>
                        Find a mate
                        <div className="flex items-center justify-center">
                            
                            <div className="flex items-center justify-center">
                                <button className='text-[#025962] text-[24px] font-euro font-bold' onClick={onClose} >
                                    X
                                </button>
                            </div>
                        </div>
                    </div>

                {/* header */}
                    <div className=" flex items-center justify-between">
                        <div className="flex justify-center items-center text-[white] text-[13px] ">
                            <div className='pl-[50px]'>All</div>
                            <div className="flex justify-around items-center pl-[15px] ">
                                <div className='flex items-center'><Image src="/images/goldypass/DEVA.png" width={25} height={25} alt="bowel" /></div>
                                <div className='ml-[3px]'>Deva</div>
                            </div>
                            <div className="flex justify-around items-center pl-[15px] ">
                                <div className='flex items-center'><Image src="/images/goldypass/OXIL.png" width={25} height={25} alt="bowel" /></div>
                                <div className='ml-[3px]'>Grani</div>
                            </div>
                            <div className="flex justify-around items-center pl-[15px]">
                                <div className='flex items-center'><Image src="/images/goldypass/LACTO.png" width={25} height={25} alt="bowel" /></div>
                                <div className='ml-[3px]'>Lacto</div>
                            </div>
                            <div className="flex justify-around items-center pl-[15px] ">
                                <div className='flex items-center'><Image src="/images/goldypass/OXIL.png" width={25} height={25} alt="bowel" /></div>
                                <div className='ml-[3px]'>Oxil</div>
                            </div>
                            <div className="flex justify-around items-center pl-[15px] ">
                                <div className='flex items-center'><Image src="/images/goldypass/YAK.png" width={25} height={25} alt="bowel" /></div>
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
                           
                        </div>
                    </div>
                    
                {/* main */}

                    <div className="flex justify-center pt-[20px]">
                        {
                            rim_data.map((data , inx)=>(
                                <EnhanceGoldyCard id={data.id}  breed={data.breed} grade={data.breed} />
                            ))
                        }
                    </div>

                </div>

            </div>
        </>
        
    )
  
}