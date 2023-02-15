import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ToolBar  from './ToolBar'; 
import GoldyCard from 'components/cards/GoldyCard' ;
import GoldyCardInventory from 'components/cards/GoldyCardInventory' ;

import GoldyPet from 'components/cards/GoldyPet' ;
import GoldyPetMobile from 'components/cards/GoldyPetMobile' ;

export default function Marketplace() {
    
    const [auto_margin_pass , setAutoMarginPass] = useState(0) ;
    const [navTitle , setNavTitle] = useState('Goldy') ;
    const [width , setWidth] = useState(0) ;
    const [mobileFilter , setMobileFilter] = useState(false) ;
    const wrapper = useRef(null) ;

    const onResize = () => {
        setWidth(window.innerWidth)  ;
        if(window.innerWidth > 1670)setAutoMarginPass((window.innerWidth - 1670)/2) ;
    }
    useEffect(() => {
        
        window.addEventListener('resize', onResize);
        onResize();
        return () => window.removeEventListener('resize', onResize);
    }, [])


    const goldycard_data=[
        {id:'1' , image:'/images/marketplace/parts/g1.png' , stone:'Deva' , stone_image:'/images/marketplace/ui/Deva.png' , breed:'4' , price:'100'} ,
        {id:'2' , image:'/images/marketplace/parts/g2.png' , stone:'Deva' , stone_image:'/images/marketplace/ui/Deva.png' , breed:'3' , price:'300'} ,
        {id:'3' , image:'/images/marketplace/parts/g3.png' , stone:'Deva' , stone_image:'/images/marketplace/ui/Deva.png' , breed:'2' , price:'200'} ,
        {id:'4' , image:'/images/marketplace/parts/g4.png' , stone:'Deva' , stone_image:'/images/marketplace/ui/Deva.png' , breed:'4' , price:'100'} ,
        {id:'5' , image:'/images/marketplace/parts/g5.png' , stone:'Deva' , stone_image:'/images/marketplace/ui/Deva.png' , breed:'2' , price:'520'} ,
        {id:'6' , image:'/images/marketplace/parts/g3.png' , stone:'Deva' , stone_image:'/images/marketplace/ui/Deva.png' , breed:'5' , price:'130'} ,
        {id:'7' , image:'/images/marketplace/parts/g7.png' , stone:'Deva' , stone_image:'/images/marketplace/ui/Deva.png' , breed:'1' , price:'120'} ,
        {id:'8' , image:'/images/marketplace/parts/g8.png' , stone:'Deva' , stone_image:'/images/marketplace/ui/Deva.png' , breed:'4' , price:'100'} ,
        {id:'9' , image:'/images/marketplace/parts/g1.png' , stone:'Deva' , stone_image:'/images/marketplace/ui/Deva.png' , breed:'4' , price:'130'} ,
    ]
    const pet_data=[
        {id:'1' , image:'/images/marketplace/parts/goldy1.png'  , price:'100'} ,
        {id:'2' , image:'/images/marketplace/parts/goldy2.png'  , price:'300'} ,
        {id:'3' , image:'/images/marketplace/parts/goldy3.png'  , price:'200'} ,
        {id:'4' , image:'/images/marketplace/parts/goldy4.png'  , price:'100'} ,
        {id:'5' , image:'/images/marketplace/parts/goldy5.png'  , price:'520'} ,
        {id:'6' , image:'/images/marketplace/parts/goldy6.png'  , price:'130'} ,
        {id:'7' , image:'/images/marketplace/parts/goldy7.png'  , price:'120'} ,
        {id:'8' , image:'/images/marketplace/parts/goldy13.png'  , price:'100'} ,
        {id:'9' , image:'/images/marketplace/parts/goldy33.png'  , price:'130'} ,
    ]
    
    return(
        <div className='relative '>
            <div className='fixed top-0 h-[50px] w-[100%] mt-[45px] xsmin:mt-[65px] bg-[#02222A] border-[1px] border-[#025962] z-[10]'>
                <div className='flex justify-between items-center pr-[20px] h-[100%]'>
                    <div className='flex justify-start items-end h-[100%] text-[#097F8B]  '>
                        <div className={cn(' text-[14px] xsmin:text-[18px] font-semibold ml-[15px] xsmin:ml-[30px] flex cursor-pointer' , navTitle == 'Goldy' && 'text-[white] border-b-[#43F3FF] border-b-[3px]' , navTitle !='Goldy' &&  'mb-[2.4px]')} onClick={()=>setNavTitle('Goldy') } >
                            <div className='pr-[5px] xsmin:pr-[10px]'><Image  src="/images/goldypass/goldy.png" width={27} height={25} alt="" /></div>
                            <div>Goldy</div> 
                        </div>
                        <div className={cn(' text-[14px] xsmin:text-[18px] font-semibold ml-[10px] xsmin:ml-[30px] flex cursor-pointer' , navTitle == 'Pet' && 'text-[white] border-b-[#43F3FF] border-b-[3px]' , navTitle !='Pet' &&  'mb-[2.4px]')} onClick={()=>setNavTitle('Pet') } >
                            <div className='pr-[5px] xsmin:pr-[10px]'><Image  src="/images/goldypet/pet3.png" width={27} height={25} alt="" /></div>
                            <div>Pet</div> 
                        </div>
                    </div>
                    <div className={cn('flex justify-center items-center px-[10px] xsmin:px-[25px] ',width >= 1024 && 'hidden' , width > 425 && styles.side_title , width <= 425 && styles.side_title_142)} onClick={()=>setMobileFilter(!mobileFilter)} >
                        <div className=' flex justify-center items-center text-[17px] text-[#C1E0FF] '>
                            Filter
                        </div>
                    </div>
                </div>

                
            </div>
            {/* left bar */}
            <ToolBar title={navTitle} visible={width< 1024 ? false : true } mobileFilter={mobileFilter} />

            <div className={cn(' pt-[100px] pb-[20px] ' , width >= 1024 && 'ml-[350px]'  ,styles.bg)}>
                <div className={cn('goldycard-marketplace-grid-css', width < 641 && 'marketplace-hidden' , navTitle!="Goldy" && 'marketplace-hidden' )} style={{marginLeft:auto_margin_pass , marginRight:auto_margin_pass }} ref={wrapper} >
                    {
                        goldycard_data.map((item , inx)=>(
                            <GoldyCard id={item.id} image={item.image} stone={item.stone} stone_image={item.stone_image} breed={item.breed} price={item.price} key={inx} />
                        ))
                    }

                </div>
                <div className={cn('goldycard-marketplace-grid-mobile-css' , width >= 641 && 'marketplace-hidden' ,navTitle!="Goldy" && 'marketplace-hidden' )} style={{marginLeft:auto_margin_pass , marginRight:auto_margin_pass }} ref={wrapper} >
                    {
                        goldycard_data.map((item , inx)=>(
                            <GoldyCardInventory id={item.id} image={item.image} stone={item.stone} stone_image={item.stone_image} breed={item.breed} price={item.price} key={inx} />
                        ))
                    }

                </div>
                <div className={cn('goldycard-marketplace-grid-css', width < 641 && 'marketplace-hidden' , navTitle!="Pet" && 'marketplace-hidden' )} style={{marginLeft:auto_margin_pass , marginRight:auto_margin_pass }} ref={wrapper} >
                    {
                        goldycard_data.map((item , inx)=>(
                            <GoldyPet id={item.id} image={item.image}  price={item.price} key={inx} />
                        ))
                    }

                </div>
                <div className={cn('goldycard-marketplace-grid-mobile-css' , width >= 641 && 'marketplace-hidden' , navTitle!="Pet" && 'marketplace-hidden' )} style={{marginLeft:auto_margin_pass , marginRight:auto_margin_pass }} ref={wrapper} >
                    {
                        goldycard_data.map((item , inx)=>(
                            <GoldyPetMobile id={item.id} image={item.image}  price={item.price} key={inx} />
                        ))
                    }

                </div>
            </div>
        </div>
    )

} 