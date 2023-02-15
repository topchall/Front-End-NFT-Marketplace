import cn from 'classnames';
import styles from './index.module.scss';
import PetCard from 'components/cards/PetCard';
import PetCardMobile from 'components/cards/PetCardMobile';
import { useEffect, useRef, useState,Fragment } from 'react';
import Image from 'next/image';
import Carousel_simple from 'components/Carousel_simple';
import ReactSimplyCarousel from 'react-simply-carousel';

import Carousel from "react-multi-carousel" ;
import "react-multi-carousel/lib/styles.css" ;

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { BarLoader } from 'react-spinners' ;
import PotDetails from './details' ;
import Link from 'next/link'
import SlotMachine_main from '../SlotMachine_main' ;
import ViewSource from 'pages/viewSource' ;
import Axios from 'core/utils/axios';
import axios from 'core/utils/axios' ;
import { toast } from 'react-toastify' ;
// import RollingPan from 'pages/RollingPan';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css' ;

import Coming_soon from 'components/Coming_soon';
import { useRouter } from 'next/router';

import Horizontalscroll from 'components/Horizontalscroll';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
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



const ActivityTabs_Skeleton = ()=>{

    

    return (
        <>

            <div className={cn('mdmax:hidden boxShadow relative justify-center mdmin:mx-[10px] lgmin:mx-[10px] bg-[#1E474E] rounded-[46px] h-[386px] w-[422px] px-[1px] my-[10px]')}>
                    <Image
                        placeholder="blur"
                        src="/images/goldypot/activityBg.svg"
                        alt="Picture of the author"
                        width={420}
                        height={272}
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(420, 272))}`}
                        className={cn(styles.userDrag)}
                    />
                        
                <div className="absolute  items-center bottom-[26px] left-[25px]">
                    {/* <div className="tracking-wider	 font-bold text-[23px] text-[#FFFFFF] mt-[18px]"> */}
                        <SkeletonTheme  highlightColor="#ccc">
                            <Skeleton className={cn(styles.loadingskeleton)} style={{ width: '200px', borderRadius:'7px', height: 30 }} />
                        </SkeletonTheme>
                    {/* </div> */}
                    {/* <div className="tracking-wider	 text-[21px] text-[#FFFFFF]"> */}
                        <SkeletonTheme  highlightColor="#ccc">
                            <Skeleton className={cn(styles.loadingskeleton)} style={{ width: '150px', borderRadius:'7px', height: 30 }} />
                        </SkeletonTheme>
                    {/* </div> */}
                </div>
                <div className={cn('absolute  bottom-[35px] right-[24px]')}>
                    <SkeletonTheme  highlightColor="#ccc">
                        <Skeleton className={cn(styles.loadingskeleton)} style={{ width: '100px', borderRadius:'7px', height: 40 }} />
                    </SkeletonTheme>
                </div>
                <div className={cn('absolute  top-[19px] right-[21px] ')}>
                    {/* <SkeletonTheme  highlightColor="#ccc">
                        <Skeleton className={cn(styles.loadingskeleton)} style={{ width: '120px', borderRadius:'7px', height: 40 }} />
                    </SkeletonTheme> */}
                </div>
            </div>
            <div className={cn('mdmax:block hidden boxShadow relative justify-center mx-[20px] xsmax:mx-[6px] bg-[#1E474E] rounded-[25px] h-[155px] w-[172px] px-[1px] mb-[10px] my-[10px]')}>
                {/* <div className={cn('',styles.activityBgImgMobile)}></div> */}
                <Image
                        placeholder="blur"
                        src="/images/goldypot/activityBg.svg"
                        alt="Picture of the author"
                        width={172}
                        height={111}
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(172, 111))}`}
                        className={cn(styles.userDrag)}
                    />
                <div className="  items-center  p-[10]  ml-[15px]">
                    <div className="tracking-wider	 font-bold text-[9px] text-[#FFFFFF] mt-[1px]">
                        <SkeletonTheme  highlightColor="#ccc">
                            <Skeleton className={cn(styles.loadingskeleton_mobile)} style={{ width: '80px', borderRadius:'7px', height: 12 }} />
                        </SkeletonTheme>
                    </div>
                    <div className="tracking-wider	 text-[10px] text-[#FFFFFF]">
                        <SkeletonTheme  highlightColor="#ccc">
                            <Skeleton className={cn(styles.loadingskeleton_mobile)} style={{ width: '50px', borderRadius:'7px', height: 12 }} />
                        </SkeletonTheme>
                    </div>
                </div>
                <div className={cn('absolute  bottom-[15px] right-[12px]')}>
                    <SkeletonTheme  highlightColor="#ccc">
                        <Skeleton className={cn(styles.loadingskeleton_mobile)} style={{ width: '40px', borderRadius:'7px', height: 20 }} />
                    </SkeletonTheme>
                </div>
                
            </div>
        </>
    ) ;
}
    

const ActivityTabs = ({name , slot_number , current_number , _keyType , _buy , label, _buyVisible , onBuy , buyloading})=>{

    const [loading , setLoading] = useState(false) ;
    const token = localStorage.getItem('token');
    useEffect(()=>{
        // console.log(_buyVisible,'_buyVisible', _buy);
    },[]) ;

    return (
        <>

            <div className={cn('mdmax:hidden boxShadow relative justify-center mdmin:mx-[10px] lgmin:mx-[10px] bg-[#1E474E] rounded-[46px] h-[386px] w-[422px] px-[1px] my-[10px]', _buy == '1' && 'bg-[#367E8B]')}>
                    <Image
                        placeholder="blur"
                        src="/images/goldypot/activityBg.svg"
                        alt="Picture of the author"
                        width={420}
                        height={272}
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(420, 272))}`}
                        className={cn(styles.userDrag)}
                        />

                <div className="absolute  items-center bottom-[26px] left-[25px]">
                    <div className="tracking-wider	 font-bold text-[23px] text-[#FFFFFF] mt-[18px]">Goldypot {name}</div>
                    <div className="tracking-wider	 text-[21px] text-[#FFFFFF]">Slots: {current_number}/{slot_number}</div>
                </div>
                <div className={cn('absolute  bottom-[29px] right-[24px]' , !(token && _buyVisible && _buy == '1') && 'hidden')}>
                {/* <Link href="/SlotMachine_main"> */}
                    {/* <button   className=" bg-[#628B92] text-[#FFFFFF] w-[131px] h-[48px] rounded-[14px] font-[17px] ">BUY</button> */}
                {/* </Link> */}
                {/* <Link href="/goldypass"> */}
                <button  onClick={onBuy} className={cn("  bg-[#faed1a] hover:bg-[#bbb315] text-[black] w-[131px] font-semibold h-[48px] rounded-[14px] font-[17px] boxShadow" ,!_buyVisible && 'hover:bg-[grey] bg-[grey]'  )}  disabled={!_buyVisible} >
                        BUY
                    {
                        buyloading && <BarLoader 
                        className='left-1/2 -translate-x-1/2 bottom-[4px]' 
                        cssOverride={{position:'absolute'}}
                        color="#bbb315"
                        height={6}
                        width={80}
                    />
                    }
                </button>
                {/* </Link> */}
                </div>
                <div className={cn('absolute  top-[19px] right-[21px] ' ,styles.fullalarm , _keyType==='FULL' ? 'block' :"hidden")}>
                </div>
                <div className={cn('absolute  top-[19px] right-[21px] ' ,styles.openalram, _keyType==='OPEN' ? 'block' :"hidden")}>
                </div>
                <div className={cn('absolute  top-[19px] right-[21px] flex justify-center items-center' ,styles.lockalram , _keyType==='LOCK' ? 'block' :"hidden")}>
                    <div className={cn('',styles.Path)}></div>
                </div>
            </div>
            <div className={cn('mdmax:block hidden boxShadow relative justify-center mx-[5px] xsmax:mx-[6px] bg-[#1E474E] rounded-[25px] h-[155px] w-[172px] px-[1px] mb-[10px] my-[10px]', _buy == '1' && 'bg-[#367E8B]')} 
                onClick={()=> token && _buyVisible &&  _buy == '1' && onBuy()}
            >
                {/* <div className={cn('',styles.activityBgImgMobile)}></div> */}
                <Image
                        placeholder="blur"
                        src="/images/goldypot/activityBg.svg"
                        alt="Picture of the author"
                        width={172}
                        height={111}
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(172, 111))}`}
                        className={cn(styles.userDrag)}

                    />
                <div className="  items-center  p-[10]  ml-[15px]">
                    <div className="tracking-wider	 font-bold text-[9px] text-[#FFFFFF] mt-[1px]">Goldypot {name}</div>
                    <div className="tracking-wider	 text-[10px] text-[#FFFFFF]">Slots:{current_number}/{slot_number}</div>
                </div>
                <div className={cn('absolute  bottom-[11px] right-[10px]' , !(token && _buyVisible &&  _buy == '1') && 'hidden')}>
                {/* <Link href="/goldypass"> */}
                    <button  className={cn(" bg-[#faed1a]  text-[black] font-semibold w-[52px] h-[20px] rounded-[7px] text-[9px] boxShadow" ,!_buyVisible && 'hover:bg-[grey] bg-[grey]' )} disabled={!_buyVisible} >
                        BUY
                        {
                            buyloading && <BarLoader 
                                className='left-1/2 -translate-x-1/2 bottom-[2px]' 
                                cssOverride={{position:'absolute'}}
                                color="#bbb315"
                                height={3}
                                width={35}
                            />
                        }
                    </button>
                {/* </Link> */}
                </div>
                <div className={cn('absolute  top-[8px] right-[18px] ' ,styles.fullalarmMobile , _keyType==='FULL' ? 'block' :"hidden")}>
                </div>
                <div className={cn('absolute  top-[8px] right-[18px] rounded-[8px] flex flex-wrap justify-center items-center text-[white] text-[10px] font-semibold ' ,styles.openalramMobile, _keyType==='OPEN' ? 'block' :"hidden")}>OPEN
                </div>
                <div className={cn('absolute  top-[8px] right-[18px] flex justify-center items-center' ,styles.lockalramMobile , _keyType==='LOCK' ? 'block' :"hidden")}>
                    <div className={cn('',styles.PathMobile)}></div>
                </div>
            </div>
        </>
    ) ;
}

const UpcomingTabs =({price , url})=>{

    // Segoe UI
    return (
        <div className=''>
            <div className={cn('mdmax:hidden boxShadow relative justify-center  bg-[#1E474E] rounded-[35px] h-[210px] w-[236px] my-[10px] ml-[10px] ')}>
                {/* <div className={cn(`bg-[url('/images/goldypot/up1.png')] w-[236px] h-[153px]`)}></div> */}
                {/* <div className={cn(``,styles.upcomingcard)}></div> */}
                <Image
                    placeholder="blur"
                    src={`/images/goldypot/${url}`}
                    alt="Picture of the author"
                    width={236}
                    height={153}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(236, 153))}`}
                    className={cn(styles.userDrag)}

                />
                <div className="  items-center  p-[10] ml-[0px] flex justify-center flex-col ">
                    <div className="tracking-wider	 text-[14px] text-[#FFFFFF] mt-[0px]">Goldy NFT Pot</div>
                    <div className="tracking-wider	 text-[14px] text-[#FFFFFF]">Slots: {price < 1000 ? price+'K' : price/1000+'M'}USDT</div>
                </div>
                
                <div className={cn('absolute  top-[10px] right-[11px] ' ,styles.comingSoon)}>
                </div>
                
            </div>
            <div className={cn('mdmax:block hidden boxShadow relative justify-center bg-[#1E474E] rounded-[35px] h-[161px] w-[181px] m-[10px] xsmax:m-[0] mx-[10px] xsmax:mx-[2px] xsmax:my-[5px]  ')}>
                {/* <div className={cn(`bg-[url('/images/goldypot/mobile/up1.png')] w-[181px] h-[117px]`)}></div> */}
                {/* <div className={cn(``,styles.upcomingcardMobile)}></div> */}
                <Image
                    placeholder="blur"
                    src={`/images/goldypot/mobile/${url}`}
                    alt="Picture of the author"
                    width={181}
                    height={117}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(181, 117))}`}
                    className={cn(styles.userDrag)}
                />
                <div className="  items-center  p-[5] ml-[5px] flex justify-center flex-col ">
                    <div className="tracking-wider	 text-[10px] text-[#FFFFFF] mt-[0px]">Goldy NFT Pot</div>
                    <div className="tracking-wider	 text-[10px] text-[#FFFFFF]">Slots: {price < 1000 ? price+'K' : price/1000+'M'}USDT</div>
                </div>
                
                <div className={cn('absolute  top-[10px] right-[11px] ' ,styles.comingSoonMobile)}>
                </div>
                
            </div>
        </div>
    ) ;
}

const PastTabs_Skeleten =()=>{

    return (
        <>
            <div className={cn('mdmax:hidden relative boxShadow justify-center mx-[13px] bg-[#1E474E] rounded-[35px] h-[298px]  w-[338px] px-[1px]  my-[10px]')}>
                {/* <div className={cn(`bg-[url('/images/goldypot/pastpot.png')] w-[337px] h-[218px]`)}></div> */}
                {/* <div className={cn(`` , styles.pastcard)}></div> */}
                <Image
                    placeholder="blur"
                    src='/images/goldypot/pastpot.svg'
                    alt="Picture of the author"
                    width={337}
                    height={218}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(337, 218))}`}
                    className={cn(styles.userDrag)}
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

            <div className={cn('mdmax:block hidden boxShadow relative justify-center ssmax:mx-[5px]  mx-[13px] xsmax:mx-[10px] bg-[#1E474E] rounded-[20px] h-[152px] w-[171px] px-[1px] xsmax:my-[5px] my-[5px]')}>
                {/* <div className={cn(`bg-[url('/images/goldypot/mobile/pastpot.png')] w-[170px] h-[110px]`)}></div> */}
                {/* <div className={cn(`` , styles.pastcardMobile)}></div> */}
                <Image
                    placeholder="blur"
                    src='/images/goldypot/mobile/pastpot.svg'
                    alt="Picture of the author"
                    width={170}
                    height={110}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(170, 110))}`}
                    className={cn(styles.userDrag)}
                />
                <div className="  items-center  px-[10] ml-[0px] flex  justify-evenly	">
                    <div className="flex flex-col ">
                        <div className="tracking-wider	 text-[10px] text-[#FFFFFF] mt-[0px]">
                             <SkeletonTheme  highlightColor="#ccc">
                                <Skeleton className={cn(styles.loadingskeleton_mobile)} style={{ width: '70px', borderRadius:'7px', height: 12 }} />
                         </SkeletonTheme>
                        </div>
                        <div className="tracking-wider	 text-[10px] text-[#FFFFFF]">
                            <SkeletonTheme  highlightColor="#ccc">
                                    <Skeleton className={cn(styles.loadingskeleton_mobile)} style={{ width: '50px', borderRadius:'7px', height: 12 }} />
                            </SkeletonTheme>
                        </div>
                    </div>
                    <div className="">
                        <SkeletonTheme  highlightColor="#ccc">
                                <Skeleton className={cn(styles.loadingskeleton_mobile)} style={{ width: '50px', borderRadius:'7px', height: 20 }} />
                        </SkeletonTheme>
                    </div>
                </div>
                
                <div className={cn('absolute  top-[10px] right-[11px] ' ,styles.pastCloseMobile)}>
                </div>

            </div>
            
            {/* modal */}

            
        </>
    ) ;
}

const PastTabs =({title , saleAmount , show_modal  , set_modal})=>{

    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <div className={cn('mdmax:hidden relative boxShadow justify-center mx-[13px] bg-[#1E474E] rounded-[35px] h-[298px]  w-[338px] px-[1px]  my-[10px]', styles.userDrag)}>
                {/* <div className={cn(`bg-[url('/images/goldypot/pastpot.png')] w-[337px] h-[218px]`)}></div> */}
                {/* <div className={cn(`` , styles.pastcard)}></div> */}
                <Image
                    placeholder="blur"
                    src='/images/goldypot/pastpot.svg'
                    alt="Picture of the author"
                    width={337}
                    height={218}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(337, 218))}`}
                    className={cn(styles.userDrag)}
                    draggable={false}

                />
                {/* <img
                    src='/images/goldypot/pastpot.png'
                    alt="Picture of the author"
                    width={337}
                    height={218}
                    draggable={false}
                    className={cn(styles.userDrag)}
                /> */}
                <div className="  items-center  px-[10] ml-[0px] flex  justify-evenly	">
                    <div className="flex flex-col ">
                        <div className="tracking-wider	 text-[14px] text-[#FFFFFF] mt-[0px]">{title}</div>
                        <div className="tracking-wider	 text-[14px] text-[#FFFFFF]">Slots: {saleAmount}/1000</div>
                    </div>
                    <div className="">
                        <button onClick={() => set_modal(true)} className=" bg-[#1C1C1C] hover:bg-[#070707] boxShadow text-[#FFFFFF] t-[10] w-[120px] h-[36px] rounded-[14px] text-[14px] mt-[20px] ">DETAILS</button>
                    </div>
                </div>
                
                <div className={cn('absolute  top-[10px] right-[11px] ' ,styles.pastClose)}>
                </div>

            </div>

            <div className={cn('mdmax:block hidden boxShadow relative justify-center ssmax:mx-[5px]  mx-[13px] xsmax:mx-[10px] bg-[#1E474E] rounded-[20px] h-[152px] w-[171px] px-[1px] xsmax:my-[5px] my-[5px]')}>
                {/* <div className={cn(`bg-[url('/images/goldypot/mobile/pastpot.png')] w-[170px] h-[110px]`)}></div> */}
                {/* <div className={cn(`` , styles.pastcardMobile)}></div> */}
                <Image
                    placeholder="blur"
                    src='/images/goldypot/mobile/pastpot.svg'
                    alt="Picture of the author"
                    width={170}
                    height={110}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(170, 110))}`}
                    draggable={false}
                    className={cn(styles.userDrag)}
                />
                <div className="  items-center  px-[10] ml-[0px] flex  justify-evenly	">
                    <div className="flex flex-col ">
                        <div className="tracking-wider	 text-[8px] text-[#FFFFFF] mt-[0px]">{title}</div>
                        <div className="tracking-wider	 text-[8px] text-[#FFFFFF]">Slots: {saleAmount}/1000</div>
                    </div>
                    <div className="">
                        <button onClick={() => set_modal(true)} className=" bg-[#1C1C1C] hover:bg-[#070707] boxShadow text-[#FFFFFF] w-[62px] h-[22px] rounded-[9px] text-[9px] mt-[6px] ">DETAILS</button>
                    </div>
                </div>
                
                <div className={cn('absolute  top-[10px] right-[11px] ' ,styles.pastCloseMobile)}>
                </div>

            </div>
            
            {/* modal */}

            
        </>
    ) ;
}


export default function GoldyPots() {

    // let GOldypotActive ;
    const GOldypotActive_lazy = [
        {_id:'2A',slots:1000 , keyType:'FULL' , _buy:0},
        {_id:'2B',slots:1000 , keyType:'FULL' , _buy:0},
        {_id:'2C',slots:738 , keyType:'OPEN' , _buy:1},
        {_id:'2D',slots:0 , keyType:'LOCK' , _buy:0},
    ]
    const PotUpcoming = [
        {_id:'1' , _price:'100' , _url:'up1.png' },
        {_id:'2' , _price:'300' , _url:'up2.png' },
        {_id:'3' , _price:'1300' , _url:'up3.png' },
        {_id:'4' , _price:'100' , _url:'up1.png' },
        {_id:'5' , _price:'300' , _url:'up2.png' },
        {_id:'6' , _price:'1300' , _url:'up3.png' },
        {_id:'7' , _price:'100' , _url:'up1.png' },   
    ]
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

  
    const wrapper = useRef<HTMLDivElement>();
    const [width, setWidth] = useState(0);
    const [showModalMain, setShowModalMain] = useState(false);
    const [isShowSlotMachine , setShowSlotMachine] = useState(false) ;
    const [isBuyBtnVisible , setBuyButtonVisible] = useState(true) ;
    const [GOldypotActive , setGoldypotActive] = useState([]) ;
    const [roundNumber , setRoundNumber] = useState() ;
    const [loading , setLoading] = useState(true) ;
    const [buyLoading , setBuyLoading] = useState(false) ;
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [searchValue , setSearchValue] = useState("") ;
    const router = useRouter();

    let activeBtn ;

    
    const checkIncentive =()=>{
        // console.log(window.location.href) ;
        let url_incentive = window.location.href.split('/') ;
        console.log(window.location.href.includes('/')) ;
        if(window.location.href.includes("?path=") && url_incentive[url_incentive.length-1].length == 10) localStorage.setItem('IncentiveLink' ,url_incentive[url_incentive.length-1]) ;
    }


    const getRoundData = async () =>{
        try{
			const resp = await axios.post('goldypot/get-round') as any;
			if(resp.error_code == 0) {
                setRoundNumber(resp.data.round_number) ;
			} 
		} catch({response}) {
		}
    }


    const setActiveData = (data)=>{
        let buy_flg = false ;
        let tmp = data ;
        // tmp.buyVisible = activeBtn ;
        for(var i = 0 ; i < data.length ; i ++ ) {
            if(!buy_flg && data[i].slot_number == data[i].current_number) {
                tmp[i].keyType = 'FULL' ;
                tmp[i]._buy = '0' ;
            }
            else if( data[i].slot_number != data[i].current_number && !buy_flg) {
                tmp[i].keyType = 'OPEN' ;
                tmp[i]._buy = '1' ;
                buy_flg = true ;
            }
            else if(data[i].slot_number != data[i].current_number && buy_flg) {
                tmp[i].keyType = 'LOCK' ;
                tmp[i]._buy = '0' ;
            }
        }
        setGoldypotActive(tmp) ;
    }

    const getActiveGoldypot = async () =>{
      
        try{
            const token = localStorage.getItem('token') ;
            // if(token)   {
            //     const resp_buy = await axios.post('goldypot/check-goldypot-buy-enable') as any;
            //     setBuyButtonVisible(resp_buy.data.buy_enable) ;
            //     activeBtn = resp_buy.data.buy_enable ;
            // }else {
            //     activeBtn = false ;
            //     // setBuyButtonVisible(false) ;
            // }
            const resp = await axios.post('goldypot/get-active-goldypots') as any;
            if(resp.error_code == 0) {
                setActiveData(resp.data) ;
            } 
  
        } catch({response}) {
        }
        setLoading(false) ;
      }

    const onBuy = async ()=> {
            setBuyLoading(true) ;
            router.push({
                pathname :'/goldypass',
            }) ;
            setBuyLoading(false) ;
                
           
    }

    const searchFinishedPart = (e)=>{
        setSearchValue(e.target.value) ;
    }

    useEffect(()=>{
        getActiveGoldypot() ;
        getRoundData() ;
        checkIncentive() ;
    },[]) ;

    useEffect(() => {
      if(!wrapper.current) return;
      const onResize = () => {
          setWidth(wrapper.current.clientWidth);
      }
      window.addEventListener('resize', onResize);
      onResize();
      return () => window.removeEventListener('resize', onResize);
    }, [wrapper]) ;

    let loadinggifOld=require('./cup_old.gif');
    let loadinggif=require('./cup.gif');

    
    const past_skellton =  PastPot?.filter((data)=> (data._id.includes(searchValue) || data._title.includes(searchValue))).map((data ,inx)=>(
        <div className="w-[180px] h-[160px] mdmin:w-[350px] mdmin:h-[310px]" key={`pastDone${inx}`}>
            <PastTabs_Skeleten key={`past_Skeleton${inx}`}/>
        </div>
    )) ;

    const past_data = PastPot?.filter((data)=> (data._id.includes(searchValue) || data._title.includes(searchValue))).map((data ,inx)=>(
        <div className="w-[180px] h-[160px] mdmin:w-[350px] mdmin:h-[310px]" key={`pastDone${inx}`}>
            <PastTabs title={data._title} saleAmount ={data._saleAmount} show_modal={showModalMain} set_modal = {setShowModalMain} key={`pastDone${inx}`}/>
        </div>
    )) ;

    const past_skellton_mobile = PastPot?.filter((data)=> (data._id.includes(searchValue) || data._title.includes(searchValue))).map((data ,inx)=>(
        <div className="w-[180px] h-[160px] mdmin:w-[350px] mdmin:h-[310px]" key={`pastDone${inx}`}>
            <PastTabs_Skeleten key={`past_Skeleton${inx}`}/>
        </div>
    ))

    const past_data_mobile = PastPot?.filter((data)=> (data._id.includes(searchValue) || data._title.includes(searchValue))).map((data ,inx)=>(
        <div className="w-[180px] h-[160px] mdmin:w-[350px] mdmin:h-[310px]" key={`pastDone${inx}`}>
            <PastTabs title={data._title} saleAmount ={data._saleAmount} show_modal={showModalMain} set_modal = {setShowModalMain} key={`pastDone${inx}`}/>
        </div>
    ))

    const activity_data_lazy = GOldypotActive_lazy?.map((data ,inx)=>(
        <ActivityTabs_Skeleton  key={inx} />
    ))

    const activity_data = GOldypotActive?.map((data ,inx)=>(
        <ActivityTabs name={data.name}  slot_number={data.slot_number} current_number={data.current_number} _keyType={data.keyType} _buy={data._buy} label={data.label} key={inx} _buyVisible={isBuyBtnVisible} onBuy={onBuy} buyloading = {buyLoading} />
    ))

    return (
        <div className='static' ref={wrapper}>
            <div className='bg-[black] lgmax:px-[20px] xsmaxsmmin:px-[60px] lgmin:px-[100px] border-gray-900' >
                <div className={cn("lgmin:text-[70px] xsmaxsmmingoldypot:text-[50px] lsmaxssmingoldypot:text-[40px] xsmaxgoldy:text-[23px] pt-[30px] smmax:pt-[10px]  text-[#FFE434] " )}> <p className="font-extra-bold font-['SegoeUIBold']">Goldypot</p> </div>
                <div className={cn("font-extra-bold	 lgmin:text-[24px]  xsmaxsmmingoldypot:text-[20px] lsmaxssmingoldypot:text-[15px]   xsmaxgoldy:text-[8px] text-[#C36FEF]" , width >= 500 && '-mt-[10px]' , width >= 500 && 'mb-[10px]' , width < 500 && '-mt-[5px]' , width < 500 && 'mb-[5px]')}>Lucky Number Providers</div>
                {/* <div className={cn("xlmin:hidden text-[24px] text-[white]  max-w-[350px]"  ,width <=508 && 'text-[9px]' ,width >=420  && width <=508 &&  'max-w-[145px]' ,width <=745 && 'text-[15px]' ,width <=745 &&  'max-w-[220px]' ,width > 745 && width <=1280 && 'text-[20px]' ,width <421  && 'max-w-[380px]')}>Take part in the weekly competitions and get lucky. You will be given a chance to win a prize. New NFT tickets are issued every week.</div> */}
                <div className="relative flex mt-[24px] xlmax:mt-[0px]">
                    <div className={cn('z-[10] xlmax:hidden' , styles.ellipse)}>
                        <div className="flex justify-center  items-center text-[85px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">7</div>
                        <div className={cn(' -mt-[27px] ml-[20px] flex justify-center  items-center text-[42px] text-[#FFFFFF] font-extrabold tracking-widest font-Roboto	' ,styles.subtitle)}>#4</div>
                    </div>
                    <div className={cn('xlmax:hidden mx-[14px] z-[10]', styles.ellipse)}>
                        <div className="flex justify-center  items-center text-[85px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">7</div>
                        <div className={cn('-mt-[27px] ml-[20px] flex justify-center  items-center text-[42px] text-[#FFFFFF] font-extrabold tracking-widest font-Roboto	' ,styles.subtitle)}>#4</div>
                    </div>
                    <div className={cn('xlmax:hidden z-[10]',styles.ellipse)}>
                        <div className="flex justify-center  items-center text-[85px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">3</div>
                        <div className={cn('-mt-[27px] ml-[20px] flex justify-center  items-center text-[42px] text-[#FFFFFF] font-extrabold tracking-widest font-Roboto	' ,styles.subtitle)}>#4</div>
                    </div>

                    {/* desk - start */}

                    <div className={cn('z-[10] xlmin:hidden smmax:hidden block' , styles.ellipse_desk)}>
                        <div className="z-[10] flex justify-center  items-center text-[62px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">7</div>
                        <div className={cn('z-20 -mt-[14px] ml-[14px] flex justify-center  items-center text-[26px] text-[#FFFFFF] font-extrabold tracking-widest font-Roboto	' ,styles.subtitle_desk)}>#4</div>
                    </div>
                    <div className={cn('xlmin:hidden smmax:hidden block mx-[7px] z-[10]', styles.ellipse_desk)}>
                        <div className="flex justify-center  items-center text-[62px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">7</div>
                        <div className={cn('-mt-[14px] ml-[14px] flex justify-center  items-center text-[26px] text-[#FFFFFF] font-extrabold tracking-widest font-Roboto	' ,styles.subtitle_desk)}>#4</div>
                    </div>
                    <div className={cn('xlmin:hidden smmax:hidden block z-[10]',styles.ellipse_desk)}>
                        <div className="flex justify-center  items-center text-[62px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">3</div>
                        <div className={cn('-mt-[14px] ml-[14px] flex justify-center  items-center text-[26px] text-[#FFFFFF] font-extrabold tracking-widest font-Roboto	' ,styles.subtitle_desk)}>#4</div>
                    </div>

                    {/* desk - end */}

                    {/* mobile - start */}

                    <div className={cn('z-[10]  smmax:block hidden' , styles.ellipse_mobile)}>
                        <div className="flex justify-center  items-center text-[30px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">7</div>
                        <div className={cn(' -mt-[3px] ml-[10px] flex justify-center  items-center text-[14px] text-[#FFFFFF] font-bold tracking-widest font-Roboto	' ,styles.subtitle_mobile)}>#4</div>
                    </div>
                    <div className={cn(' smmax:block hidden mx-[4px] z-[10]', styles.ellipse_mobile)}>
                        <div className="flex justify-center  items-center text-[30px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">7</div>
                        <div className={cn('-mt-[3px] ml-[10px] flex justify-center  items-center text-[14px] text-[#FFFFFF] font-bold tracking-widest font-Roboto	' ,styles.subtitle_mobile)}>#4</div>
                    </div>
                    <div className={cn(' smmax:block hidden z-[10]',styles.ellipse_mobile)}>
                        <div className="flex justify-center  items-center text-[30px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">3</div>
                        <div className={cn('-mt-[3px] ml-[10px] flex justify-center  items-center text-[14px] text-[#FFFFFF] font-bold tracking-widest font-Roboto	' ,styles.subtitle_mobile)}>#4</div>
                    </div>

                    {/* mobile - end */}
                    
                    
                    <div className={cn('absolute top-[45px] left-[0px] z-0  hidden sp1600min:block', styles.bar900)}></div>
                    <div className={cn('absolute top-[45px] left-[0px] z-0  hidden  semin:block sp1600min:hidden', styles.bar)}></div>
                    <div className={cn('absolute top-[45px] left-[0px] z-0  hidden  xlmin:block  semin:hidden', styles.bar450)}></div>
                    <div className={cn('absolute top-[45px] right-[400px] z-0 xlmax:hidden block',styles.nftbar , width< 2000 && 'hidden')}></div>
                    <div className={cn('absolute top-[45px] right-[400px] z-0  hidden semin:block  spmin:hidden ',styles.nftbar700  )}></div> 
                    <div className={cn('absolute top-[45px] right-[390px] z-0  hidden xlmin:block semin:hidden ',styles.nftbar400  )}></div> 
                    
                    
                    {/* desk - bar */}
                        <div className={cn('absolute top-[35px]  left-[10px] z-0  hidden  mdmin:block xlmin:hidden ', styles.bar430_desk)}></div>
                        <div className={cn('absolute top-[35px]  right-[180px] z-0 hidden  mdmin:block xlmin:hidden ',styles.nftbar480_desk)}></div>
                        
                        <div className={cn('absolute top-[35px]  left-[10px] z-0  hidden  sp640min:block mdmin:hidden ', styles.bar263_desk)}></div>
                        <div className={cn('absolute top-[35px]  right-[100px] sp746min:right-[120px] z-0 hidden  sp640min:block mdmin:hidden ',styles.nftbar242_desk)}></div>
                        

                    {/* desk - bar */}

                    {/* mobile bar */}

                    <div className={cn('absolute top-[18px] left-[4px] z-0  hidden sp460min:block sp640min:hidden ',styles.bar250_mobile  )}></div>
                    <div className={cn('absolute top-[18px] right-[77px] z-0 hidden sp460min:block  sp640min:hidden ',styles.nftbar326_mobile  )}></div>

                    <div className={cn('absolute top-[18px] left-[0px] z-0  hidden ssmin:block sp460min:hidden ',styles.bar150_mobile  )}></div>
                    <div className={cn('absolute top-[18px] right-[90px] z-0 hidden  ssmin:block sp460min:hidden ',styles.nftbar156_mobile  )}></div>


                    {/* mobile bar */}

                    
                    {/* <div className={cn('absolute  top-[101px] right-[0]  z-0 block '  , width> 400 && 'hidden' )}>
                            <Image className="" src={loadinggif} width={160} height={150} alt="loading..." />
                    </div> */}
                    <div className={cn('absolute z-[10] top-[0px]  flex justify-center  items-center text-[23px] text-[#FFFFFF] xlmax:hidden',styles.round ,width <=1580 && 'right-[550px]', width < 1490 && 'hidden',  width > 1580 &&  width < 1800 && 'right-[600px]' , width >= 1800 && 'right-[40%]')}>
                        ROUND {roundNumber}
                    </div>

                    {/*  */}

                    <div className={cn('absolute z-[10] top-[20px]  right-[40%] flex justify-center  items-center text-[17px] text-[#FFFFFF] ',styles.round_desk  , width >= 1264 && 'hidden' , width <= 1024  && 'hidden'  )}>
                        ROUND {roundNumber}
                    </div>
                    <div className={cn('absolute z-[10] top-[20px]  right-[38%] flex justify-center  items-center text-[17px] text-[#FFFFFF] ',styles.round_desk  , width > 1024 && 'hidden' , width < 790  && 'hidden'  )}>
                        ROUND {roundNumber}
                    </div>
                    <div className={cn('absolute z-[10] top-[20px]  right-[30%] flex justify-center  items-center text-[17px] text-[#FFFFFF] ',styles.round_desk  , width >= 768 && 'hidden' , width < 720  && 'hidden'  )}>
                        ROUND {roundNumber}
                    </div>

                    {/* <div className={cn('absolute z-[10] top-[3px]  right-[38%] flex justify-center  items-center text-[7px] text-[#FFFFFF] ',styles.round_mobile  , width >= 640 && 'hidden' , width <= 632  && 'hidden'  )}>
                        ROUND {roundNumber}
                    </div> */}
                    <div className={cn('absolute z-[10] top-[3px]  right-[38%] flex justify-center  items-center text-[7px] text-[#FFFFFF] ',styles.round_mobile  , width > 623 && 'hidden' , width < 501  && 'hidden'  )}>
                        ROUND {roundNumber}
                    </div>

                    <div className={cn('absolute z-[10] top-[3px]  right-[38%] flex justify-center  items-center text-[7px] text-[#FFFFFF] ',styles.round_mobile  , width >= 501 && 'hidden' , width < 426  && 'hidden'  )}>
                        ROUND {roundNumber}
                    </div>
                    <div className={cn('absolute z-[10] top-[3px]  right-[36%]  justify-center  items-center text-[7px] text-[#FFFFFF] hidden sp385min:flex xsmin:hidden ',styles.round_mobile  )}>
                        ROUND {roundNumber}
                    </div>

                    {/*  */}
                </div>
                <div className={cn('absolute semax:hidden top-[100px] right-[2%] z-0')}>
                        <Image className="" src={loadinggifOld} width={700} height={400} alt="loading..."   />
                </div>
                <div className={cn('absolute  top-[100px] right-[0] z-0 block'  , width>1460  && 'hidden' , width <=1280 && 'hidden')}>
                        <Image className="" src={loadinggifOld} width={700} height={400} alt="loading..." />
                </div>
                <div className={cn('absolute  top-[100px] right-[0] z-0 block'  , width> 1280 && 'hidden' , width <=1024 && 'hidden')}>
                        <Image className="" src={loadinggifOld} width={450} height={300} alt="loading..." />
                </div>
                <div className={cn('absolute  top-[80px] right-[0] z-0 block'  , width> 1024 && 'hidden' , width <=900 && 'hidden')}>
                        <Image className="" src={loadinggifOld} width={450} height={300} alt="loading..." />
                </div>
                <div className={cn('absolute  top-[80px] right-[0]  z-0 block '  , width> 900 && 'hidden' , width <=768 && 'hidden')}>
                        <Image className="" src={loadinggifOld} width={400} height={280} alt="loading..." />
                </div>
                <div className={cn('absolute  top-[100px] right-[0]  z-0 block '  , width> 768 && 'hidden' , width <=745 && 'hidden')}>
                        <Image className="" src={loadinggif} width={300} height={250} alt="loading..." />
                </div>
                <div className={cn('absolute  top-[110px] right-[0]  z-0 block '  , width> 745 && 'hidden' , width <=623 && 'hidden')}>
                        <Image className="" src={loadinggif} width={300} height={230} alt="loading..." />
                </div>
                {/* <div className={cn('absolute  top-[90px] right-[0]  z-0 block '  , width> 630 && 'hidden' , width <=580 && 'hidden')}>
                        <Image className="" src={loadinggif} width={250} height={200} alt="loading..." />
                </div> */}
                <div className={cn('absolute  top-[60px] right-[0]  z-0 block '  , width> 623 && 'hidden' , width <=483 && 'hidden' )}>
                        <Image className="" src={loadinggif} width={260} height={200} alt="loading..." />
                </div>
                <div className={cn('absolute  top-[60px] right-[0]  z-0 block '  , width> 483 && 'hidden', width <=374 && 'hidden' )}>
                        <Image className="" src={loadinggif} width={205} height={150} alt="loading..." />
                </div>
                <div className="pb-[34px]  xlmax:-mt-[20px]  xsmax:pb-[10px] z-[30]">
                    <Link href="/goldypots/howhelp">
                        {/* <button  type='button' className="mt-[63px] xsmax:mt-[50px] z-30 flex justify-center  items-center  w-[289px] h-[42px] xlmin:w-[289px] xlmax:h-[35px] smmax:w-[180px] xsmax:h-[30px] bg-[#0DA0A9] text-[11px] xlmin:text-[13px]  xsmax:text-[9px] rounded-[14px] font-bold text-[#FFFFFF]">
                            <Image src='/images/goldypot/info.svg' className='pr-[10px] z-40' width='17' height='17' alt='' /> 
                            &nbsp; HOW TO DRAW GOLDYPOT
                        </button> */}
                        <button  type='button' className="mt-[40px] sp640min:mt-[60px] xlmin:mt-[40px] w-[150px] sp640min:w-[250px] h-[22px] sp640min:h-[45px] z-[30] flex justify-center  items-center   bg-[#0DA0A9] text-[8px] sp640min:text-[14px] rounded-[11px] sp640min:rounded-[16px] font-bold text-[#FFFFFF]">
                            <div className="flex sp640min:hidden flex-wrap justify-center items-center">
                                <Image src='/images/goldypot/info.svg' className='pr-[10px] z-40' width='14' height='14' alt='' /> 
                            </div>
                            <div className="hidden sp640min:flex  flex-wrap justify-center items-center">
                                <Image src='/images/goldypot/info.svg' className='pr-[10px] z-40' width='17' height='17' alt='' /> 
                            </div>
                            &nbsp; HOW TO DRAW GOLDYPOT
                        </button>
                    </Link>
                </div>
            </div>
            <div className='bg-[#090B0C] border-[#090B0C] solidblack'>
                <div className="text-[29px] xsmax:text-[15px] text-[white] flex flex-wrap   font-semibold items-center h-[60px] xsmax:h-[44px] xsmax:ml-[30px] ml-[89px] mdminactive:justify-start tracking-wider	">Goldypot (Active)</div>
                <div className="text-[white] font-[25px] font-semibold flex justify-center wrap ">
                    
                    {/* <Link href="/goldypots/howhelp">
                        <button  type='button' className="ml-[44px] flex justify-center  items-center w-[114px] h-[38px] bg-[#0DA0A9] font-[17px] rounded-[14px] font-semibold text-[#FFFFFF]	">
                            HELP                        
                        </button>
                    </Link> */}
                </div>
            </div>
            {/* <div className={cn('flex flex-wrap justify-start   bg-[#102529] p-[20px] xsmax:p-[0px]   pt-[25px] mdminactive:justify-center' , width <= 1425 && width > 768 &&  'justify-center')}> */}
            <div className={cn('bg-[#102529]  py-[10px]  border-solid border-b-1 border-b-[#102529] activity_card' )}>
                {
                    loading ? 
                        <Horizontalscroll scrollData={activity_data_lazy} />
                    :
                        <Horizontalscroll scrollData={activity_data} />
                }
            </div>
            <div className='bg-[#0C1C1E] border-t-4  border-t-[#0C1C1E] pb-[55px] relative'>
                <div className=" flex-wrap h-[90px] flex items-center text-[25px] xsmax:text-[15px] text-[white] font-extrabold  ml-[89px] xsmax:ml-[30px] tracking-wider	">Upcoming</div>
                {/* <div className=" bg-[rgb(12,27,29)]  pt-[25px] ml-[31px] xsmax:ml-[0px] xsmax:mx-[10px] ssmax:mx-[0px] "> */}
                   
                <Carousel_simple />

            </div>
            <div className="static flex items-center justify-between  xsmax:text-[15px] text-[25px] text-[white] font-extrabold  pl-[89px] xsmax:min-h-[40px] min-h-[65px] bg-[#090B0C] pr-[50px] xsmax:pl-[30px] ">
                <div className="tracking-wider	">Finished</div> 
                <div className="flex flex-wrap">
                    <input  type="text" placeholder='Search' className="placeholder:font-Chancery searchInput -mr-[15px] placeholder:tracking-tight	 placeholder:text-[#585858] placeholder:text-['Segoe UI'] placeholder:italic placeholder:text-[14px]  ssmin:placeholder:text-[15px] text-[16px] xsmin:text-[20px]  font-thin	 bg-[#090B0C]  w-[180px]  ssmin:w-[230px] h-[30px] border-b-[1px] border-[#43F3FF]"  
                        onChange={(e)=>{searchFinishedPart(e)}}
                    />
                    <div className="flex flex-wrap justify-center items-center ">
                        <Image src='/images/goldypot/search.svg' className='p-b-[10px]' width='15' height='15' alt='' /> 
                    </div>
                </div>
            </div>
            {/* <div className="flex items-center xsmax:text-[15px] text-[29px] text-[white] font-extrabold  pl-[89px] xsmax:min-h-[40px] min-h-[65px] bg-[#090B0C] xsmax:pl-[30px]">Past</div> */}
            <div className={cn('  bg-[#0C1C1E] py-[20px] pb-[150px] mdmin:pb-[250px]')}>
                {/* <div className={cn('flex flex-wrap justify-start  bg-[#0C1C1E]  pb-[20px] pt-[25px]  xsmin:ml-[30px] xsmax:justify-between  ssmax:justify-start ssmax:mx-[0px] ' , width < 370 && 'justify-center' ,width > 402 && width <= 422 && 'mx-[10px]' , width >422 && width < 425 && 'mx-[20px]'  )}> */}
                       <div className="relative hidden mdmin:block">
                            {   
                                loading ? 
                                    <Horizontalscroll scrollData={past_skellton} />
                                :
                                    <Horizontalscroll scrollData={past_data} />
                            }
                        </div> 

                        <div className="relative block mdmin:hidden">
                            {   
                                loading ? 
                                    <Horizontalscroll scrollData={past_skellton_mobile} />
                                :
                                    <Horizontalscroll scrollData={past_data_mobile} />
                            }
                        </div> 
                
            
            </div>
   
            {/*   modal part   */}

                {showModalMain ? (
                    <PotDetails showModalflg={showModalMain} setModalflg={setShowModalMain}/>
                ) : null}
                
            {/*  modal part */}
            
         

        </div>
    );
} 