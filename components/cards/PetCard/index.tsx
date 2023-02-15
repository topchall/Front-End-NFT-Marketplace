import cn from 'classnames';
import styles from './index.module.scss';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { goldypetspage_data ,goldypet_attribute_text } from 'utils/data'
// import { ReactComponent as YourSvg } from '../../../public/images/pet1.svg';


import Skeleton, {SkeletonTheme} from 'react-loading-skeleton' ;

const shimmer = (w, h) =>`
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#0c1c1e" offset="20%" />
        <stop stop-color="#1e474e" offset="50%" />
        <stop stop-color="#0c1c1e" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#0c1c1e" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`
  
  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)



import 'react-loading-skeleton/dist/skeleton.css' ;

  const SkeletonCard =()=>{
    return (
        <div className='relative mb-[22px] mx-[7px]'>
            {/* CARD */}
            <div className={cn('flex-col w-[266px] h-[357px] pt-[15px] pl-[25px] ', styles.petcard)}>
            <div className={cn('relative  items-center justify-center mt-6 text-[13px]',  )} style={{color: '#71FFCF'}}>
                <SkeletonTheme  highlightColor="#ccc">
                <Skeleton className={cn(styles.loadingskeleton)} style={{ width: '90%', borderRadius:'7px', height: 20 }} />
                </SkeletonTheme>
            </div>
            <div className='relative mt-5 mx-auto' >
                <SkeletonTheme  highlightColor="#ccc">
                <Skeleton style={{ width: '90%', height: 170 , borderRadius:'7px'}} className={cn(styles.loadingskeleton)} />
                </SkeletonTheme>
            </div>
            <div className='grid grid-cols-4 gap-2 pt-[20px]' style={{ width: '90%'}}>
                <div className="">
                    <SkeletonTheme >
                        <Skeleton height={50}   className={cn(styles.loadingskeleton)}  />
                    </SkeletonTheme>
                </div><div className="">
                    <SkeletonTheme >
                        <Skeleton height={50}   className={cn(styles.loadingskeleton)}  />
                    </SkeletonTheme>
                </div><div className="">
                    <SkeletonTheme >
                        <Skeleton height={50}   className={cn(styles.loadingskeleton)}  />
                    </SkeletonTheme>
                </div><div className="">
                    <SkeletonTheme >
                        <Skeleton height={50}   className={cn(styles.loadingskeleton)}  />
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
const PetCard = ({ name, image, onClaim, enableClaim = false }) => {
    const wrapper = useRef(null) ;

    const [tooltip, setTooltip] = useState(null);
    const [tooltipImage, setTooltipImage] = useState('');
    const [tooltipTitle, setTooltipTitle] = useState('');
    const [showClaim, setShowClaim] = useState(false);

    const [isLoading , setLoading] = useState(false) ;

    useEffect(()=>{
        setTimeout(()=>(setLoading(true)),1500)
    },[]) ;
    const checkMinus =(val)=>{
        if(val < 0) val = val * (-1) ;
        return val ;
    }
    useEffect(() => {
        if(tooltip != null) 
            setTooltipImage(attributes[tooltip].image);
            let current_goldpet = goldypetspage_data.filter(ele=>{
                return ele.name === name ;
            });
            setTooltipTitle((current_goldpet[0].attributes[tooltipType[tooltip]] > 0 ? ("Increase ") : ("Decrease ")) +(goldypet_attribute_text[tooltipType[tooltip]] +" by " + checkMinus(current_goldpet[0].attributes[tooltipType[tooltip]]) +"%") );
            // setTooltipTitle((current_goldpet[0].attributes[tooltipType[tooltip]] > 0 ? ("Increase ") : ("Decrease ")) +(goldypet_attribute_text[tooltipType[tooltip]] +" by " + current_goldpet[0].attributes[tooltipType[tooltip]] +"%") );
    }, [tooltip])
    const handleClickOutside = (event) => {
        if ( (wrapper.current && !wrapper.current?.contains(event.target))) {
            setShowClaim(false);
            // console.log('close1');
        }
    }
    useEffect(()=>{
        document.addEventListener("mousedown",  handleClickOutside);
    },[wrapper]) ;

    return (
        !isLoading ?
        <SkeletonCard/>
        :
        <div className='relative mb-[22px] mx-[7px]'  ref={wrapper} 
            // onMouseLeave={() => enableClaim && setShowClaim(false)}
        >
            {/* CARD */}
            <div  className={cn('flex flex-col w-[266px] h-[357px] ', styles.petcard, enableClaim && showClaim && 'brightness-50')}
                onClick={() => enableClaim && setShowClaim(true)}
            >
                <div className={cn('flex items-center justify-center mt-[17px] mx-auto text-[13px]', styles.toppanel)} style={{color: '#71FFCF'}}>
                    {name}
                    {/* Pet #29192 */}
                </div>
                <div className='mx-auto mt-[7px]'>
                    <Image alt='' src={image} width='194' height='190' placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(194, 194))}`} />
                    {/* <YourSvg/> */}
                </div>
                <div className='text-[13px] text-[#E9E9E9] pl-[27px] pt-[7px] leading-none'>
                    Attributes
                </div>
                <div className='flex flex-row justify-between px-5 pt-[3px]'>
                    {
                        attributes.map((attr, key) => (
                            <div 
                                key={key} 
                                onMouseOver={() => !showClaim && setTooltip(key)} onMouseLeave={() => setTooltip(null)}
                                className='my-[7px] cursor-pointer -mx-[5px]'
                            >
                                <Image alt='' src={attr.image} width='150' height='150' placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(150, 150))}`} />
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* TOOLTIP */}
            <div className={cn('absolute z-10 flex flex-row -bottom-[66px] py-[5px] ml-[6px] w-[254px] h-[62px] bg-[#032330] border-[#067e93] border-[1px]', tooltip != null ? 'transition-opacity duration-300' : 'opacity-0 hidden')}>
                <div className='ml-[10px] shrink-0'> 
                    {tooltipImage && <Image width='50' height='50' alt='' src={tooltipImage} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(50, 50))}`} /> }
                </div>
                <div className='text-white px-[15px] pt-[5px] text-[13px]'>
                    {tooltipTitle}
                   
                </div>
            </div>

            {/* CLAIM Button */}
            <button className={cn('absolute w-[203px] h-[80px] top-[125px] left-[34px] text-[25px]	font-bold text-[white]', styles.claimbutton, (!enableClaim || !showClaim ) && 'hidden')}
                onClick={onClaim}
            >
                {/* claim */}
            </button>
        </div>
    )
}

export default PetCard;