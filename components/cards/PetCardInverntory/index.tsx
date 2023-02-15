import cn from 'classnames';
import styles from './index.module.scss';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { goldypetspage_data ,goldypet_attribute_text } from 'utils/data'


import Skeleton, {SkeletonTheme} from 'react-loading-skeleton' ;

import 'react-loading-skeleton/dist/skeleton.css' ;

  const SkeletonCard =()=>{
    return (
        <div className='relative mb-[22px] mx-[7px]'>
            {/* CARD */}
            <div className={cn('flex-col w-[160px] h-[215px] pt-[15px] pl-[15px] ', styles.petcard)}>
            <div className={cn('relative  items-center justify-center mt-2 text-[13px]',  )} style={{color: '#71FFCF'}}>
                <SkeletonTheme  highlightColor="#ccc">
                <Skeleton className={cn(styles.loadingskeleton)} style={{ width: '90%', borderRadius:'7px', height: 10 }} />
                </SkeletonTheme>
            </div>
            <div className='relative mt-2 mx-auto' >
                <SkeletonTheme  highlightColor="#ccc">
                <Skeleton style={{ width: '90%', height: 110 , borderRadius:'7px'}} className={cn(styles.loadingskeleton)} />
                </SkeletonTheme>
            </div>
            <div className='grid grid-cols-4 gap-1 pl-[5px] pr-[5px] mt-3'  style={{ width: '90%'}}>
                <div className="">
                    <SkeletonTheme >
                        <Skeleton height={20}   className={cn(styles.loadingskeleton)}  />
                    </SkeletonTheme>
                </div><div className="">
                    <SkeletonTheme >
                        <Skeleton height={20}   className={cn(styles.loadingskeleton)}  />
                    </SkeletonTheme>
                </div><div className="">
                    <SkeletonTheme >
                        <Skeleton height={20}   className={cn(styles.loadingskeleton)}  />
                    </SkeletonTheme>
                </div><div className="">
                    <SkeletonTheme >
                        <Skeleton height={20}   className={cn(styles.loadingskeleton)}  />
                    </SkeletonTheme>
                </div>
            </div>
            </div>
        </div>
    )
  }

const attributes = [
    {
        image: '/images/a1.svg'
    },
    {
        image: '/images/a2.svg'
    },
    {
        image: '/images/a3.svg'
    },
    {
        image: '/images/a4.svg'
    },
]

const tooltipType =[
    "get_mine","synthesis","mating","hunger"
]

const PetCardInverntory = ({ name, image, onClaim, enableClaim = false }) => {

    const [tooltip, setTooltip] = useState(null);
    const [tooltipImage, setTooltipImage] = useState('');
    const [showClaim, setShowClaim] = useState(false);
    const [tooltipTitle, setTooltipTitle] = useState('');

    const [isLoading , setLoading] = useState(false) ;

    useEffect(()=>{
        setTimeout(()=>(setLoading(true)),500)
    },[]) ;

    useEffect(()=>{
        console.log(name , image , onClaim) ;
    },[]) ;

    // useEffect(() => {
    //     if(tooltip != null) 
    //         setTooltipImage(attributes[tooltip].image);
    // }, [tooltip])
    const checkMinus =(val)=>{
        if(val < 0) val = val * (-1) ;
        return val ;
    }
    useEffect(() => {
        if(tooltip != null) 
            setTooltipImage(attributes[tooltip].image);
            let current_goldpet = goldypetspage_data.filter(ele=>{
                return ele.image == image ;
            });
            // console.log(current_goldpet , current_goldpet[0] , goldypetspage_data) ;
            setTooltipTitle((current_goldpet[0]?.attributes[tooltipType[tooltip]] > 0 ? ("Increase ") : ("Decrease ")) +(goldypet_attribute_text[tooltipType[tooltip]] +" by " + checkMinus(current_goldpet[0].attributes[tooltipType[tooltip]]) +"%") );
            // setTooltipTitle((current_goldpet[0].attributes[tooltipType[tooltip]] > 0 ? ("Increase ") : ("Decrease ")) +(goldypet_attribute_text[tooltipType[tooltip]] +" by " + current_goldpet[0].attributes[tooltipType[tooltip]] +"%") );
    }, [tooltip])

    return (
        !isLoading ?
        <SkeletonCard/>
        :
        <div className='relative mb-[22px] mx-[7px]' 
            onMouseLeave={() => enableClaim && setShowClaim(false)}
        >
            {/* CARD */}
            <div className={cn('flex flex-col w-[160px] h-[215px] ', styles.petcard, enableClaim && showClaim && 'brightness-50')}
                onClick={() => enableClaim && setShowClaim(true)}
            >
                <div className={cn('flex items-center justify-center mt-[17px] mx-auto text-[13px]', styles.toppanel)} style={{color: '#71FFCF'}}>
                    {name}
                </div>
                <div className='mx-auto mt-[5px]'>
                    <Image alt='' src={image} width='110' height='110' />
                </div>
                <div className=' text-[10px] text-[#E9E9E9] pl-[27px] pt-[0px] leading-none'>
                    Attributes
                </div>
                <div className='flex flex-row justify-between px-5 pt-[0px]'>
                    {
                        attributes.map((attr, key) => (
                            <div 
                                key={key} 
                                onMouseOver={() => !showClaim && setTooltip(key)} onMouseLeave={() => setTooltip(null)}
                                className='my-[7px] cursor-pointer'
                            >
                                <Image alt='' src={attr.image} width='50' height='50' />
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* TOOLTIP */}
            <div className={cn('absolute z-10 flex flex-row -bottom-[66px] py-[5px] ml-[6px] w-[154px] h-[55px] bg-[#032330] border-[#067e93] border-[1px]', tooltip != null ? 'transition-opacity duration-300' : 'opacity-0 hidden')}>
                <div className='ml-[10px] shrink-0'> 
                    {tooltipImage && <Image width='40' height='40' alt='' src={tooltipImage} /> }
                </div>
                <div className='text-white px-[5px] text-[10px]'>
                    {/* When the equipped Goldy breeds
                    the chance of breeding advantage
                    increases by 1% */}
                    {tooltipTitle}

                </div>
            </div>

            {/* CLAIM Button */}
            <button className={cn('absolute w-[203px] h-[80px] top-[125px] left-[34px]', styles.claimbutton, (!enableClaim || !showClaim ) && 'hidden')}
                onClick={onClaim}
            >
            </button>
        </div>
    )
}

export default PetCardInverntory ;