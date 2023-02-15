import { useEffect, useRef, useState,Fragment } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import Horizontalscroll from 'components/Horizontalscroll' ;
import 'react-loading-skeleton/dist/skeleton.css' ;
import ReactSimplyCarousel from 'react-simply-carousel';
import { RotateLoader } from 'react-spinners';

const shimmer = (w, h) => `
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
                    draggable={false}

                />
                <div className="  items-center  p-[10] ml-[0px] flex justify-center flex-col ">
                    <div className="tracking-wider	font-semibold text-[14px] text-[#FFFFFF] mt-[0px]">Goldy NFT Pot</div>
                    <div className="tracking-wider	font-semibold text-[14px] text-[#FFFFFF]">{price < 1000 ? price+'K' : price/1000+'M'}USDT</div>
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
                    draggable={false}
                />
                <div className="  items-center  p-[5] ml-[5px] flex justify-center flex-col ">
                    <div className="tracking-wider	font-semibold text-[10px] text-[#FFFFFF] mt-[0px]">Goldy NFT Pot</div>
                    <div className="tracking-wider	font-semibold text-[10px] text-[#FFFFFF]">{price < 1000 ? price+'K' : price/1000+'M'}USDT</div>
                </div>
                
                <div className={cn('absolute  top-[10px] right-[11px] ' ,styles.comingSoonMobile)}>
                </div>
                
            </div>
        </div>
    ) ;
}
const PotUpcoming = [
    {_id:'1' , _price:'100' , _url:'up1.svg' },
    {_id:'2' , _price:'300' , _url:'up2.svg' },
    {_id:'3' , _price:'1300' , _url:'up3.svg' },
    {_id:'4' , _price:'100' , _url:'up1.svg' },
    {_id:'5' , _price:'300' , _url:'up2.svg' },
    {_id:'6' , _price:'1300' , _url:'up3.svg' },
    {_id:'7' , _price:'300' , _url:'up1.svg' },
    {_id:'8' , _price:'500' , _url:'up2.svg' },
    {_id:'9' , _price:'1300' , _url:'up3.svg' },
    {_id:'10' , _price:'300' , _url:'up1.svg' },
    {_id:'11' , _price:'500' , _url:'up2.svg' },
    {_id:'12' , _price:'1300' , _url:'up3.svg' },
     
]

export default function Carousel_simple() {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
    const upcoming_data = PotUpcoming.map((data ,inx)=>(
        <div className="w-[190px] h-[175px] mdmin:w-[250px] mdmin:h-[220px]" key={`pastDone${inx}`}>
            <UpcomingTabs price={data._price} url ={data._url} key={`coming${inx}`}/>
        </div>
    )) ;
  
return (
    <div className="">
        <Horizontalscroll scrollData={upcoming_data} />    
    </div> 
  );
}
