
import ScrollMenu from 'react-horizontal-scrolling-menu';
// import VisibilityContext from 'react-horizontal-scrolling-menu' ;
// import './Horizontalscroll.css'
import cn from 'classnames';
import styles from './index.module.scss';
import PetCard from 'components/cards/PetCard';
import PetCardMobile from 'components/cards/PetCardMobile';
import { useEffect, useRef, useState,Fragment ,useContext } from 'react';
import Image from 'next/image';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css' ;
import ReactLogo from '../../public/images/horizontal/right_arrow.svg'

const Arrow = ({text, className}) => {
    return (
      <i className={className}></i>
    )
}

// const ArrowLeft = Arrow({text:'', className: 'fa-chevron-left'})
// const ArrowRight = Arrow({text:'', className: 'fa-chevron-right'})

const PastTabs_Skeleten =()=>{

    return (
        <>
            <div className={cn('mdmax:hidden relative boxShadow justify-center mx-[13px] bg-[#1E474E] rounded-[35px] h-[298px]  w-[338px] px-[1px]  my-[10px]')}>
                {/* <div className={cn(`bg-[url('/images/goldypot/pastpot.png')] w-[337px] h-[218px]`)}></div> */}
                {/* <div className={cn(`` , styles.pastcard)}></div> */}
                <Image
                    // placeholder="blur"
                    src='/images/goldypot/pastpot.svg'
                    alt="Picture of the author"
                    width={337}
                    height={218}
                    className={cn(styles.userDrag)}
                    draggable={false}
                />
                <div className="  items-center  px-[10] ml-[0px] flex  justify-evenly	">
                    <div className="flex flex-col ">
                        <div className="tracking-wider	 text-[14px] text-[#FFFFFF] mt-[0px]">
                            <SkeletonTheme  highlightColor="#ccc">
                                <Skeleton className={cn(styles.loadingskeleton)} style={{ width: '150px', borderRadius:'7px', height: 23 }} />
                            </SkeletonTheme>
                        </div>
                        <div className="tracking-wider	 text-[14px] text-[#FFFFFF]">
                            <SkeletonTheme  highlightColor="#ccc">
                                <Skeleton className={cn(styles.loadingskeleton)} style={{ width: '120px', borderRadius:'7px', height: 23 }} />
                            </SkeletonTheme>
                        </div>
                    </div>
                    <div className="">
                        <SkeletonTheme  highlightColor="#ccc">
                                <Skeleton className={cn(styles.loadingskeleton)} style={{ width: '100px', borderRadius:'7px', height: 35 }} />
                        </SkeletonTheme>
                    </div>
                </div>
                
                <div className={cn('absolute  top-[10px] right-[11px] ' ,styles.pastClose)}>
                </div>

            </div>

            
            {/* modal */}

            
        </>
    ) ;
}

const productsrow =()=>{
    
    const PastPot = [
        {_id:'1' , _title:'Goldypot Round 4D' , _saleAmount:'1000' },
        {_id:'2' , _title:'Goldypot Round 4C' , _saleAmount:'1000' },
        {_id:'3' , _title:'Goldypot Round 4B' , _saleAmount:'1000' },
        {_id:'3' , _title:'Goldypot Round 4A' , _saleAmount:'1000' },
        {_id:'4' , _title:'Goldypot Round 3D' , _saleAmount:'1000' },
        {_id:'5' , _title:'Goldypot Round 3C' , _saleAmount:'1000' },
        {_id:'6' , _title:'Goldypot Round 3B' , _saleAmount:'1000' },
        {_id:'6' , _title:'Goldypot Round 3A' , _saleAmount:'1000' },
        {_id:'7' , _title:'Goldypot Round 2D' , _saleAmount:'1000' },
        {_id:'8' , _title:'Goldypot Round 2C' , _saleAmount:'1000' },
        {_id:'9' , _title:'Goldypot Round 2B' , _saleAmount:'1000' },
        {_id:'9' , _title:'Goldypot Round 2A' , _saleAmount:'1000' },
        {_id:'10' , _title:'Goldypot Round 1D' , _saleAmount:'1000' },
        {_id:'11' , _title:'Goldypot Round 1C' , _saleAmount:'1000' },
        {_id:'12' , _title:'Goldypot Round 1B' , _saleAmount:'1000' },
        {_id:'12' , _title:'Goldypot Round 1A' , _saleAmount:'1000' },      
    ]
    return(
        <>
            {
                PastPot?.map((data ,inx)=>(
                    <div className="w-[180px] h-[160px] mdmin:w-[350px] mdmin:h-[310px]" key={`pastDone${inx}`}>
                        <PastTabs_Skeleten key={`past_Skeleton${inx}`}/>
                    </div>
                ))
            }
        </>
    )
}

const Horizontalscroll =({scrollData})=>{

    const PastPot = [
        {_id:'1' , _title:'Goldypot Round 4D' , _saleAmount:'1000' },
        {_id:'2' , _title:'Goldypot Round 4C' , _saleAmount:'1000' },
        {_id:'3' , _title:'Goldypot Round 4B' , _saleAmount:'1000' },
        {_id:'3' , _title:'Goldypot Round 4A' , _saleAmount:'1000' },
        {_id:'4' , _title:'Goldypot Round 3D' , _saleAmount:'1000' },
        {_id:'5' , _title:'Goldypot Round 3C' , _saleAmount:'1000' },
        {_id:'6' , _title:'Goldypot Round 3B' , _saleAmount:'1000' },
        {_id:'6' , _title:'Goldypot Round 3A' , _saleAmount:'1000' },
        {_id:'7' , _title:'Goldypot Round 2D' , _saleAmount:'1000' },
        {_id:'8' , _title:'Goldypot Round 2C' , _saleAmount:'1000' },
        {_id:'9' , _title:'Goldypot Round 2B' , _saleAmount:'1000' },
        {_id:'9' , _title:'Goldypot Round 2A' , _saleAmount:'1000' },
        {_id:'10' , _title:'Goldypot Round 1D' , _saleAmount:'1000' },
        {_id:'11' , _title:'Goldypot Round 1C' , _saleAmount:'1000' },
        {_id:'12' , _title:'Goldypot Round 1B' , _saleAmount:'1000' },
        {_id:'12' , _title:'Goldypot Round 1A' , _saleAmount:'1000' },      
    ]


      const providerDiv = PastPot?.map((data ,inx)=>(
        <div className=" w-[180px] h-[160px] mdmin:w-[350px] mdmin:h-[310px]" key={`pastDone${inx}`}>
            <PastTabs_Skeleten key={`past_Skeleton${inx}`}/>

        </div>
    ))

    return(
        <>
            <ScrollMenu 
               wheel={false}
               translate={1} 
               data={scrollData} 
               arrowLeft={<div style={{ fontSize: "10px" , paddingTop:'4px' , paddingRight:'3px' }}>
                <Image
                    src={'/images/horizontal/right_arrow.png'}
                    alt=''
                    width='15px'
                    height='20px'
                    
                    />
               </div>}
               arrowRight={<div style={{ fontSize: "10px" , paddingTop:'4px' , paddingLeft:'3px' }}>
                <Image
                    src={'/images/horizontal/left_arrow.png'}
                    alt=''
                    width='15px'
                    height='20px'
                    
                    />
               </div>}
               hideSingleArrow={true}
               dragging={true}
               alignCenter={false}
               arrowDisabledClass={''}
               arrowClass='arrow'
            />
                 
            </>
    ) ;
}

export default Horizontalscroll ;