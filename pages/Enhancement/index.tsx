import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import EnhanceGoldyCard from './EnhanceGoldyCard' ;
import EnhanceGoldyPotCard from './EnhanceGoldyPotCard' ;

import EnhanceToolBar from './EnhanceToolBar' ;
import EnhanceMixPart from './EnhanceMixPart' ;
import EnhanceSupplymentCard from './EnhanceSupplymentCard' ;

const Enhancement =()=>{

    const [supplyCase , setSupplyCase] = useState(1) ;
    const [selectMainCard , setSelMainCard] = useState(false) ;

    const rim_data=[
        {id:'1' , breed:'3' , price:'23' , name:'num1'} ,
        {id:'2' , breed:'2' , price:'23' , name:'num2'} ,
        {id:'3' , breed:'5' , price:'23' , name:'num3'} ,
        {id:'4' , breed:'3' , price:'23' , name:'num4'} ,
        {id:'5' , breed:'1' , price:'23' , name:'num5'} ,
        {id:'6' , breed:'2' , price:'23' , name:'num6'} ,
        {id:'7' , breed:'2' , price:'23' , name:'num7'} ,
        {id:'8' , breed:'3' , price:'23' , name:'num8'} ,
        {id:'9' , breed:'4' , price:'23' , name:'num9'} ,
        {id:'10' , breed:'3' , price:'23' , name:'num10'} ,
        {id:'11' , breed:'3' , price:'23' , name:'num11'} ,
        {id:'12' , breed:'1' , price:'23' , name:'num12'} ,
        {id:'13' , breed:'3' , price:'23' , name:'num13'} ,
        {id:'14' , breed:'3' , price:'23' , name:'num10'} ,
        {id:'15' , breed:'3' , price:'23' , name:'num11'} ,
        {id:'16' , breed:'1' , price:'23' , name:'num12'} ,
        {id:'17' , breed:'3' , price:'23' , name:'num13'} ,
        {id:'18' , breed:'3' , price:'23' , name:'num10'} ,
        {id:'19' , breed:'3' , price:'23' , name:'num11'} ,
        {id:'20' , breed:'1' , price:'23' , name:'num12'} ,
        {id:'21' , breed:'3' , price:'23' , name:'num13'} ,
    ]
    const rim_pot_data=[
        {id:'1' , breed:'3' , price:'23' , img:"/images/goldypet/pet1.png" , name:'num1'} ,
        {id:'2' , breed:'2' , price:'23' , img:"/images/goldypet/pet2.png" , name:'num2'} ,
        {id:'3' , breed:'5' , price:'23' , img:"/images/goldypet/pet3.png" , name:'num3'} ,
        {id:'4' , breed:'3' , price:'23' , img:"/images/goldypet/pet4.png" , name:'num4'} ,
        {id:'5' , breed:'1' , price:'23' , img:"/images/goldypet/pet5.png" , name:'num5'} ,

    ]

    const rim_supply_data=[
        {id:'1' , breed:'Lorem ipsum dolor sit amet consectetur adipiscing' , s_width:'27' , s_height:'85' , price:'23' , img:"/images/enhancement/p1.png" , name:'Lv.1'} ,
        {id:'2' , breed:'Lorem ipsum dolor sit amet consectetur adipiscing' , s_width:'64' , s_height:'85' , price:'23' , img:"/images/enhancement/p2.png" , name:'Lv.2'} ,
        {id:'3' , breed:'Lorem ipsum dolor sit amet consectetur adipiscing' , s_width:'76' , s_height:'85' , price:'23' , img:"/images/enhancement/p3.png" , name:'Lv.3'} ,
        {id:'4' , breed:'Lorem ipsum dolor sit amet consectetur adipiscing' , s_width:'68' , s_height:'85' , price:'23' , img:"/images/enhancement/p4.png" , name:'Lv.4'} ,
    ]

    return(
        <div>
            <div className="hidden sp1490min:flex justify-center">
                <div className="w-[48%]">
                    <EnhanceMixPart />
                </div>
                <div className="w-[52%] bg-[#032C32] mt-[12px]   ">
                    
                        <EnhanceToolBar />
                    
                    <div className="">
                        <div className=" text-[23px] text-[white] pt-[26px] pb-[44px] pl-[57px] ">
                        {
                            supplyCase === 0 && "Same Grade Goldy"
                        }
                        {
                            supplyCase === 1 && "Goldy Pets"
                        }
                        {
                            supplyCase === 2 && "Supplyments"
                        }
                        
                        </div>
                        <div className='enhancement-goldy-grid-css  '>
                            {
                                supplyCase === 0 &&
                                rim_data.map((data , inx)=>(
                                    <EnhanceGoldyCard id={data.id}  breed={data.breed} grade={data.breed} />
                                ))
                            }
                            {
                                supplyCase === 1 && 
                                rim_pot_data.map((data , inx)=>(
                                    <EnhanceGoldyPotCard id={data.id} image={data.img}  breed={data.breed} grade={data.breed}  />
                                ))
                            }
                            {
                                supplyCase === 2 && 
                                rim_supply_data.map((data , inx)=>(
                                    <EnhanceSupplymentCard id={data.id} image={data.img} label={data.name} breed={data.breed} sWidth={data.s_width} sHeight={data.s_height} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                

            </div>
            <div className="flex sp1490min:hidden justify-center">
                <div className={cn("")}>
                    <EnhanceMixPart />
                </div>
                <div className={cn(" bg-[#032C32] mt-[12px] ",!selectMainCard && 'hidden')}>
                    
                        <EnhanceToolBar />
                    
                    <div className="">
                        <div className=" text-[23px] text-[white] pt-[26px] pb-[44px] pl-[57px] ">
                        {
                            supplyCase === 0 && "Same Grade Goldy"
                        }
                        {
                            supplyCase === 1 && "Goldy Pets"
                        }
                        {
                            supplyCase === 2 && "Supplyments"
                        }
                        
                        </div>
                        <div className='enhancement-goldy-grid-css  '>
                            {
                                supplyCase === 0 &&
                                rim_data.map((data , inx)=>(
                                    <EnhanceGoldyCard id={data.id}  breed={data.breed} grade={data.breed} />
                                ))
                            }
                            {
                                supplyCase === 1 && 
                                rim_pot_data.map((data , inx)=>(
                                    <EnhanceGoldyPotCard id={data.id} image={data.img}  breed={data.breed} grade={data.breed}  />
                                ))
                            }
                            {
                                supplyCase === 2 && 
                                rim_supply_data.map((data , inx)=>(
                                    <EnhanceSupplymentCard id={data.id} image={data.img} label={data.name} breed={data.breed} sWidth={data.s_width} sHeight={data.s_height} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
        
    )
}

export default Enhancement ;