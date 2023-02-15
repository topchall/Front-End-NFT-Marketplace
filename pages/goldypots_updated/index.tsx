import cn from 'classnames';
import styles from './index.module.scss';
import PetCard from 'components/cards/PetCard';
import PetCardMobile from 'components/cards/PetCardMobile';
import { useEffect, useRef, useState,Fragment } from 'react';
import Image from 'next/image';
import { BackgroundImage } from "react-image-and-background-image-fade";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import PotDetails from './details';
import Link from 'next/link'
import { url } from 'inspector';
import Slider from "react-slick";
import SlotMachine_main from '../SlotMachine_main' ;

const ActivityTabs = ({_activeID , _slots , _keyType , _buy})=>{

    const [loading , setLoading] = useState(false) ;
    
    useEffect(()=>{

    },[loading]) ;

    return (
        <>

           
                {/* {console.log(loading ,'loading')} */}
            <div className={cn('mdmax:hidden relative justify-center mx-[20px] bg-[#1E474E] rounded-[46px] h-[386px] w-[422px] px-[1px] my-[10px]', _buy == '1' && 'bg-[#367E8B]')}>
                <div className={cn('',styles.activityBgImg)}></div>
             
                {/* <LazyLoadimage image='/images/goldypot/activityBg.png' /> */}


                <div className="absolute  items-center bottom-[26px] left-[25px]">
                    <div className="tracking-wider	 font-bold text-[23px] text-[#FFFFFF] mt-[18px]">Goldypot Round 2A</div>
                    <div className="tracking-wider	 text-[21px] text-[#FFFFFF]">Slots: {_slots}/1000</div>
                </div>
                <div className={cn('absolute  bottom-[29px] right-[24px]' , _buy!='1' && 'hidden')}>
                {/* <Link href="/SlotMachine_main"> */}
                    {/* <button   className=" bg-[#628B92] text-[#FFFFFF] w-[131px] h-[48px] rounded-[14px] font-[17px] ">BUY</button> */}
                {/* </Link> */}
                <Link href="/goldypets">
                    <button  className=" bg-[#628B92] text-[#FFFFFF] w-[131px] h-[48px] rounded-[14px] font-[17px] ">BUY</button>
                </Link>
                </div>
                <div className={cn('absolute  top-[19px] right-[21px] ' ,styles.fullalarm , _keyType==='FULL' ? 'block' :"hidden")}>
                </div>
                <div className={cn('absolute  top-[19px] right-[21px] ' ,styles.openalram, _keyType==='OPEN' ? 'block' :"hidden")}>
                </div>
                <div className={cn('absolute  top-[19px] right-[21px] flex justify-center items-center' ,styles.lockalram , _keyType==='LOCK' ? 'block' :"hidden")}>
                    <div className={cn('',styles.Path)}></div>
                </div>
            </div>
            <div className={cn('mdmax:block hidden relative justify-center mx-[20px] xsmax:mx-[6px] bg-[#1E474E] rounded-[25px] h-[166px] w-[172px] px-[1px] mb-[10px] my-[10px]', _buy == '1' && 'bg-[#367E8B]')}>
                <div className={cn('',styles.activityBgImgMobile)}></div>
                <div className="  items-center  p-[10]  ml-[20px]">
                    <div className="tracking-wider	 font-bold text-[9px] text-[#FFFFFF] mt-[18px]">Goldypot Round 2A</div>
                    <div className="tracking-wider	 text-[10px] text-[#FFFFFF]">Slots: {_slots}/1000</div>
                </div>
                <div className={cn('absolute  bottom-[11px] right-[10px]' , _buy!='1' && 'hidden')}>
                <Link href="/goldypets">
                    <button className=" bg-[#628B92] text-[#FFFFFF] w-[52px] h-[20px] rounded-[14px] text-[10px] ">BUY</button>
                </Link>
                </div>
                <div className={cn('absolute  top-[8px] right-[18px] ' ,styles.fullalarmMobile , _keyType==='FULL' ? 'block' :"hidden")}>
                </div>
                <div className={cn('absolute  top-[8px] right-[18px] ' ,styles.openalramMobile, _keyType==='OPEN' ? 'block' :"hidden")}>
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
        <div className='mx-[30px] min-w-[238px]'>
            <div className={cn('mdmax:hidden relative justify-center  bg-[#1E474E] rounded-[35px] h-[210px] w-[238px] m-[10px] mx-[10px] ')}>
                <div className={cn(`bg-[url('/images/goldypot/up1.png')] w-[236px] h-[153px]`)}></div>
                {/* <div className={cn(` w-[236px] h-[153px]`)}> */}
                    {/* <img src='/images/goldypot/up1.pmg' className={cn('w-[236px] h-[153px]')} alt="" /> */}
                {/* </div> */}
                <div className="  items-center  p-[10] ml-[0px] flex justify-center flex-col ">
                    <div className="tracking-wider	 text-[14px] text-[#FFFFFF] mt-[10px]">Goldy NFT Pot</div>
                    <div className="tracking-wider	 text-[14px] text-[#FFFFFF]">Slots: {price < 1000 ? price+'K' : price/1000+'M'}USDT</div>
                </div>
                
                <div className={cn('absolute  top-[10px] right-[11px] ' ,styles.comingSoon)}>
                </div>
                
            </div>
            <div className={cn('mdmax:block hidden relative justify-center bg-[#1E474E] rounded-[35px] h-[161px] w-[182px] m-[10px] xsmax:m-[0] mx-[10px] xsmax:mx-[2px] xsmax:my-[5px]  ')}>
                <div className={cn(`bg-[url('/images/goldypot/mobile/up1.png')] w-[181px] h-[117px]`)}></div>
                <div className="  items-center  p-[5] ml-[5px] flex justify-center flex-col ">
                    <div className="tracking-wider	 text-[10px] text-[#FFFFFF] mt-[5px]">Goldy NFT Pot</div>
                    <div className="tracking-wider	 text-[10px] text-[#FFFFFF]">Slots: {price < 1000 ? price+'K' : price/1000+'M'}USDT</div>
                </div>
                
                <div className={cn('absolute  top-[10px] right-[11px] ' ,styles.comingSoonMobile)}>
                </div>
                
            </div>
        </div>
    ) ;
}
const PastTabs =({title , saleAmount , show_modal  , set_modal})=>{

    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <div className={cn('mdmax:hidden relative justify-center mx-[13px] bg-[#1E474E] rounded-[35px] h-[298px]  w-[338px] px-[1px]  my-[10px]')}>
                <div className={cn(`bg-[url('/images/goldypot/pastpot.png')] w-[337px] h-[218px]`)}></div>
                <div className="  items-center  px-[10] ml-[0px] flex  justify-evenly	">
                    <div className="flex flex-col ">
                        <div className="tracking-wider	 text-[14px] text-[#FFFFFF] mt-[10px]">{title}</div>
                        <div className="tracking-wider	 text-[14px] text-[#FFFFFF]">Slots: {saleAmount}/1000</div>
                    </div>
                    <div className="">
                        <button onClick={() => set_modal(true)} className=" bg-[#1C1C1C] text-[#FFFFFF] t-[10] w-[120px] h-[36px] rounded-[14px] text-[14px] mt-[20px] ">DETAILS</button>
                    </div>
                </div>
                
                <div className={cn('absolute  top-[10px] right-[11px] ' ,styles.pastClose)}>
                </div>

            </div>

            <div className={cn('mdmax:block hidden relative justify-center ssmax:mx-[5px]  mx-[13px] xsmax:mx-[10px] bg-[#1E474E] rounded-[20px] h-[152px] w-[171px] px-[1px] xsmax:my-[5px] my-[5px]')}>
                <div className={cn(`bg-[url('/images/goldypot/mobile/pastpot.png')] w-[170px] h-[110px]`)}></div>
                <div className="  items-center  px-[10] ml-[0px] flex  justify-evenly	">
                    <div className="flex flex-col ">
                        <div className="tracking-wider	 text-[10px] text-[#FFFFFF] mt-[5px]">{title}</div>
                        <div className="tracking-wider	 text-[10px] text-[#FFFFFF]">Slots: {saleAmount}/1000</div>
                    </div>
                    <div className="">
                        <button onClick={() => set_modal(true)} className=" bg-[#1C1C1C] text-[#FFFFFF] t-[5] w-[60px] h-[20px] rounded-[10px] text-[10px] mt-[10px] ">DETAILS</button>
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

    const GOldypotActive = [
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
        {_id:'8' , _price:'300' , _url:'up2.png' },
    ]
    const PastPot = [
        {_id:'1' , _title:'Goldypot Round 1A' , _saleAmount:'1000' },
        {_id:'2' , _title:'Goldypot Round 1B' , _saleAmount:'1000' },
        {_id:'3' , _title:'Goldypot Round 1C' , _saleAmount:'1000' },
        {_id:'1' , _title:'Goldypot Round 1A' , _saleAmount:'1000' },
        {_id:'2' , _title:'Goldypot Round 1B' , _saleAmount:'1000' },
        {_id:'3' , _title:'Goldypot Round 1C' , _saleAmount:'1000' },
        {_id:'1' , _title:'Goldypot Round 1A' , _saleAmount:'1000' },
        {_id:'2' , _title:'Goldypot Round 1B' , _saleAmount:'1000' },
        {_id:'3' , _title:'Goldypot Round 1C' , _saleAmount:'1000' },
        {_id:'1' , _title:'Goldypot Round 1A' , _saleAmount:'1000' },
        {_id:'2' , _title:'Goldypot Round 1B' , _saleAmount:'1000' },
        {_id:'3' , _title:'Goldypot Round 1C' , _saleAmount:'1000' },
        
    ]

    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
    };

    const wrapper = useRef<HTMLDivElement>();
    const [width, setWidth] = useState(0);
    const [showModalMain, setShowModalMain] = useState(false);
    const [isShowSlotMachine , setShowSlotMachine] = useState(false) ;

    const showingSlot =()=>{
        // <SlotMachine_main/>
        setShowSlotMachine((isShowSlotMachine)=>!isShowSlotMachine) ;
    }
    useEffect(() => {
      if(!wrapper.current) return;
      const onResize = () => {
          setWidth(wrapper.current.clientWidth);
      }
      window.addEventListener('resize', onResize);
      onResize();
      return () => window.removeEventListener('resize', onResize);
  }, [wrapper]) ;

    let loadinggif=require('./cup.gif');

    const responsiveUpcoming = {
        
        // LatestsuperLargeDesktopTitan: {
        //     breakpoint: { max: 3000, min: 2000 },
        //     items: 20
        // },
        // LatestsuperLargeDesktop: {
        //     breakpoint: { max: 2000, min: 1700 },
        //     items: 10
        // },
        // TopsuperLargeDesktop: {
        //     breakpoint: { max: 1700, min: 1470 },
        //     items: 9
        //   },
        // superLargeDesktop: {
        //   breakpoint: { max: 1470, min: 1210 },
        //   items: 12
        // },z
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1210 },
            items: 8 , 
          //   slidesToSlide: 2,
          //   partialVisibilityGutter :1000
          },
        desktop: {
          breakpoint: { max: 1210, min: 970 },
          items: 8 , 
        //   slidesToSlide: 2,
        //   partialVisibilityGutter :1000
        },
        tablet: {
          breakpoint: { max: 970, min: 769 },
          items: 6
        },
        tablet_mobile: {
            breakpoint: { max: 769, min: 739 },
            items: 7
          },
        mobile: {
          breakpoint: { max: 739, min: 557 },
          items: 9
        },
        mobile_respo: {
            breakpoint: { max: 557, min: 320 },
            items: 6
          }
      };

      const responsiveFinished = {
        
        LatestsuperLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 2050 },
            items: 12
          },
        TopsuperLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 2050, min: 1720 },
            items: 7
          },
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1720, min: 1370 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 1370, min: 1024 },
          items: 5 , 
          partialVisibilityGutter :1000
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 4
          },
        tablet_mobile: {
          breakpoint: { max: 768, min: 580 },
          items: 7
        },
        mobile: {
          breakpoint: { max: 580, min: 360 },
          items: 5
        }
      };

    return (
        <div className='static' ref={wrapper}>
            <div className='bg-[black] lgmax:px-[20px] xsmaxsmmin:px-[60px] lgmin:px-[100px]  ' >
                <div className={cn("lgmin:text-[70px] xsmaxsmmingoldypot:text-[50px] lsmaxssmingoldypot:text-[40px] xsmaxgoldy:text-[23px] pt-[30px] smmax:pt-[10px] font-bold text-[#FFE434] " )}>Goldypot</div>
                <div className={cn("lgmin:text-[24px]  xsmaxsmmingoldypot:text-[20px] lsmaxssmingoldypot:text-[15px]   xsmaxgoldy:text-[8px] text-[#C36FEF]" , width >= 500 && '-mt-[10px]' , width >= 500 && 'mb-[10px]' , width < 500 && '-mt-[5px]' , width < 500 && 'mb-[5px]')}>Lucky Number Providers</div>
                {/* <div className={cn("xlmin:hidden text-[24px] text-[white]  max-w-[350px]"  ,width <=508 && 'text-[9px]' ,width >=420  && width <=508 &&  'max-w-[145px]' ,width <=745 && 'text-[15px]' ,width <=745 &&  'max-w-[220px]' ,width > 745 && width <=1280 && 'text-[20px]' ,width <421  && 'max-w-[380px]')}>Take part in the weekly competitions and get lucky. You will be given a chance to win a prize. New NFT tickets are issued every week.</div> */}
                <div className="flex mt-[24px] xlmax:mt-[0px]">
                    <div className={cn('z-[10] xlmax:hidden' , styles.ellipse)}>
                        <div className="flex justify-center  items-center text-[85px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">7</div>
                        <div className={cn(' -mt-[27px] ml-[20px] flex justify-center  items-center text-[42px] text-[#FFFFFF] font-bold tracking-widest font-Roboto	' ,styles.subtitle)}>#4</div>
                    </div>
                    <div className={cn('xlmax:hidden mx-[14px] z-[10]', styles.ellipse)}>
                        <div className="flex justify-center  items-center text-[85px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">7</div>
                        <div className={cn('-mt-[27px] ml-[20px] flex justify-center  items-center text-[42px] text-[#FFFFFF] font-bold tracking-widest font-Roboto	' ,styles.subtitle)}>#4</div>
                    </div>
                    <div className={cn('xlmax:hidden z-[10]',styles.ellipse)}>
                        <div className="flex justify-center  items-center text-[85px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">3</div>
                        <div className={cn('-mt-[27px] ml-[20px] flex justify-center  items-center text-[42px] text-[#FFFFFF] font-bold tracking-widest font-Roboto	' ,styles.subtitle)}>#4</div>
                    </div>

                    {/* desk - start */}

                    <div className={cn('z-[10] xlmin:hidden smmax:hidden block' , styles.ellipse_desk)}>
                        <div className="z-[10] flex justify-center  items-center text-[62px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">7</div>
                        <div className={cn('z-20 -mt-[14px] ml-[14px] flex justify-center  items-center text-[26px] text-[#FFFFFF] font-bold tracking-widest font-Roboto	' ,styles.subtitle_desk)}>#4</div>
                    </div>
                    <div className={cn('xlmin:hidden smmax:hidden block mx-[7px] z-[10]', styles.ellipse_desk)}>
                        <div className="flex justify-center  items-center text-[62px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">7</div>
                        <div className={cn('-mt-[14px] ml-[14px] flex justify-center  items-center text-[26px] text-[#FFFFFF] font-bold tracking-widest font-Roboto	' ,styles.subtitle_desk)}>#4</div>
                    </div>
                    <div className={cn('xlmin:hidden smmax:hidden block z-[10]',styles.ellipse_desk)}>
                        <div className="flex justify-center  items-center text-[62px] text-[#FFFFFF] p-[10] font-extrabold font-Roboto">3</div>
                        <div className={cn('-mt-[14px] ml-[14px] flex justify-center  items-center text-[26px] text-[#FFFFFF] font-bold tracking-widest font-Roboto	' ,styles.subtitle_desk)}>#4</div>
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
                    <div className={cn('absolute top-[291px] left-[120px] z-0 xlmax:hidden',styles.bar)}></div>
                    <div className={cn('absolute top-[291px] right-[550px] z-0 xlmax:hidden block',styles.nftbar , width< 2100 && 'hidden')}></div>
                    <div className={cn('absolute top-[291px] right-[550px] z-0 xlmax:hidden block',styles.nftbar2 , width< 1600 && 'hidden' ,  width>= 2100 && 'hidden')}></div>
                    <div className={cn('absolute top-[291px] right-[550px] z-0 xlmax:hidden block',styles.nftbar1 , width < 1320 && 'hidden' ,  width>= 1600 && 'hidden')}></div>
                    <div className={cn('absolute top-[291px] right-[500px] z-0 xlmax:hidden block',styles.nftbar3 , width>= 1320 && 'hidden')}></div>
                    
                    {/* desk - bar */}
                        <div className={cn('absolute top-[265px] left-[110px] z-0  block ',styles.bar_desk, width > 1280 && 'hidden' , width <= 1024 && 'hidden'  )}></div>
                        <div className={cn('absolute top-[230px] left-[60px] z-0  block ',styles.bar_desk, width > 1024 && 'hidden' , width < 900 && 'hidden'  )}></div>
                        <div className={cn('absolute top-[265px] right-[30%] z-0 block ',styles.nftbar_desk , width<= 1024 && 'hidden' ,  width>= 1281 && 'hidden' )}></div>
                        <div className={cn('absolute top-[230px] right-[25%] z-0 block ',styles.nftbar_desk , width< 746 && 'hidden' ,  width> 800 && 'hidden' )}></div>
                        <div className={cn('absolute top-[230px] right-[30%] z-0 block ',styles.nftbar_desk , width< 800 && 'hidden' ,  width> 1024 && 'hidden' )}></div>
                        
                    
                        <div className={cn('absolute top-[235px] right-[22%] z-0 block ',styles.nftbar_desk , width< 720 && 'hidden' ,  width>= 746 && 'hidden' )}></div>
                        
                        <div className={cn('absolute top-[235px] left-[155px] z-0  block ',styles.bar_desk2, width <= 640 && 'hidden' , width >= 720 && 'hidden'  )}></div>
                        <div className={cn('absolute top-[235px] right-[30%] z-0 block ',styles.nftbar_desk2 , width<= 640 && 'hidden' ,  width>= 720 && 'hidden' )}></div>


                    {/* desk - bar */}

                    {/* mobile bar */}

                    <div className={cn('absolute top-[128px] left-[40px] z-0  block ',styles.bar_mobile, width < 426 && 'hidden' , width >= 501 && 'hidden'  )}></div>
                    <div className={cn('absolute top-[128px] right-[30%] z-0 block ',styles.nftbar_mobile , width< 426 && 'hidden' ,  width>= 501 && 'hidden' )}></div>

                    <div className={cn('absolute top-[122px] left-[40px] z-0  block ',styles.bar_mobile, width < 360 && 'hidden' , width >= 426 && 'hidden'  )}></div>
                    <div className={cn('absolute top-[122px] right-[28%] z-0 block ',styles.nftbar_mobile , width< 360 && 'hidden' ,  width>= 426 && 'hidden' )}></div>

                    <div className={cn('absolute top-[161px] right-[30%] z-0 block ',styles.nftbar_mobile2 , width< 501 && 'hidden' ,  width> 632 && 'hidden' )}></div>
                    <div className={cn('absolute top-[161px] left-[40px] z-0  block ',styles.bar_mobile, width< 501 && 'hidden' ,  width> 632 && 'hidden'  )}></div>

                    <div className={cn('absolute top-[185px] right-[30%] z-0 block ',styles.nftbar_mobile2 , width<= 632 && 'hidden' ,  width> 640 && 'hidden' )}></div>
                    <div className={cn('absolute top-[185px] left-[115px] z-0  block ',styles.bar_mobile, width<= 632 && 'hidden' ,  width> 640 && 'hidden'  )}></div>

                    {/* mobile bar */}

                    <div className={cn('absolute xlmax:hidden top-[100px] right-[5%] z-0')}>
                            <Image className="" src={loadinggif} width={700} height={400} alt="loading..."   />
                    </div>
                    <div className={cn('absolute  top-[100px] right-[0] z-0 block'  , width> 1280 && 'hidden' , width <=1024 && 'hidden')}>
                            <Image className="" src={loadinggif} width={450} height={300} alt="loading..." />
                    </div>
                    <div className={cn('absolute  top-[80px] right-[0] z-0 block'  , width> 1024 && 'hidden' , width <=900 && 'hidden')}>
                            <Image className="" src={loadinggif} width={450} height={300} alt="loading..." />
                    </div>
                    <div className={cn('absolute  top-[100px] right-[0]  z-0 block '  , width> 900 && 'hidden' , width <=745 && 'hidden')}>
                            <Image className="" src={loadinggif} width={300} height={250} alt="loading..." />
                    </div>
                    <div className={cn('absolute  top-[130px] right-[0]  z-0 block '  , width> 745 && 'hidden' , width <=640 && 'hidden')}>
                            <Image className="" src={loadinggif} width={250} height={200} alt="loading..." />
                    </div>
                    <div className={cn('absolute  top-[90px] right-[0]  z-0 block '  , width> 640 && 'hidden' , width <=580 && 'hidden')}>
                            <Image className="" src={loadinggif} width={250} height={200} alt="loading..." />
                    </div>
                    <div className={cn('absolute  top-[101px] right-[0]  z-0 block '  , width> 580 && 'hidden' , width <=500 && 'hidden' )}>
                            <Image className="" src={loadinggif} width={160} height={150} alt="loading..." />
                    </div>
                    <div className={cn('absolute  top-[60px] right-[0]  z-0 block '  , width> 500 && 'hidden', width <=360 && 'hidden' )}>
                            <Image className="" src={loadinggif} width={160} height={150} alt="loading..." />
                    </div>
                    {/* <div className={cn('absolute  top-[101px] right-[0]  z-0 block '  , width> 400 && 'hidden' )}>
                            <Image className="" src={loadinggif} width={160} height={150} alt="loading..." />
                    </div> */}
                    <div className={cn('absolute top-[217px]  flex justify-center  items-center text-[23px] text-[#FFFFFF] xlmax:hidden',styles.round ,width <=1580 && 'right-[650px]', width < 1490 && 'hidden',  width > 1580 &&  width < 1800 && 'right-[700px]' , width >= 1800 && 'right-[813px]')}>
                        ROUND 1
                    </div>

                    {/*  */}

                    <div className={cn('absolute top-[240px]  right-[35%] flex justify-center  items-center text-[17px] text-[#FFFFFF] ',styles.round_desk  , width >= 1280 && 'hidden' , width <= 1024  && 'hidden'  )}>
                        ROUND 1
                    </div>
                    <div className={cn('absolute top-[210px]  right-[35%] flex justify-center  items-center text-[17px] text-[#FFFFFF] ',styles.round_desk  , width > 1024 && 'hidden' , width < 746  && 'hidden'  )}>
                        ROUND 1
                    </div>
                    <div className={cn('absolute top-[210px]  right-[30%] flex justify-center  items-center text-[17px] text-[#FFFFFF] ',styles.round_desk  , width >= 746 && 'hidden' , width < 720  && 'hidden'  )}>
                        ROUND 1
                    </div>

                    <div className={cn('absolute top-[170px]  right-[38%] flex justify-center  items-center text-[7px] text-[#FFFFFF] ',styles.round_mobile  , width >= 640 && 'hidden' , width <= 632  && 'hidden'  )}>
                        ROUND 1
                    </div>
                    <div className={cn('absolute top-[145px]  right-[38%] flex justify-center  items-center text-[7px] text-[#FFFFFF] ',styles.round_mobile  , width > 632 && 'hidden' , width < 501  && 'hidden'  )}>
                        ROUND 1
                    </div>

                    <div className={cn('absolute top-[115px]  right-[38%] flex justify-center  items-center text-[7px] text-[#FFFFFF] ',styles.round_mobile  , width >= 501 && 'hidden' , width < 426  && 'hidden'  )}>
                        ROUND 1
                    </div>
                    <div className={cn('absolute top-[105px]  right-[36%] flex justify-center  items-center text-[7px] text-[#FFFFFF] ',styles.round_mobile  , width >= 426 && 'hidden' , width < 380  && 'hidden'  )}>
                        ROUND 1
                    </div>

                    {/*  */}
                </div>
                <div className="pb-[64px]  xlmax:-mt-[20px]  xsmax:pb-[20px] z-20">
                <Link href="/goldypots/howhelp">
                    <button  type='button' className="mt-[63px] xsmax:mt-[50px] z-30 flex justify-center  items-center  w-[289px] h-[42px] xlmin:w-[289px] xlmax:h-[35px] smmax:w-[180px] xsmax:h-[30px] bg-[#0DA0A9] text-[11px] xlmin:text-[13px]  xsmax:text-[9px] rounded-[14px] font-semibold text-[#FFFFFF]">
                        <Image src='/images/goldypot/info.svg' className='pr-[10px] z-40' width='17' height='17' alt='' /> 
                        &nbsp; HOW TO DRAW GOLDYPOT
                    </button>
                </Link>
                </div>
            </div>
            <div className='bg-[black] '>
                <div className="text-[29px] xsmax:text-[15px] text-[white] font-[25px] font-semibold items-center h-[60px] xsmax:h-[44px] xsmax:ml-[30px] ml-[89px] mdminactive:justify-center">Goldypot (Active)</div>
                <div className="text-[white] font-[25px] font-semibold flex justify-center wrap ">
                    
                    {/* <Link href="/goldypots/howhelp">
                        <button  type='button' className="ml-[44px] flex justify-center  items-center w-[114px] h-[38px] bg-[#0DA0A9] font-[17px] rounded-[14px] font-semibold text-[#FFFFFF]	">
                            HELP                        
                        </button>
                    </Link> */}
                </div>
            </div>
            <div className={cn('flex flex-wrap justify-start   bg-[#102529] p-[20px] xsmax:p-[0px]   pt-[25px] mdminactive:justify-center' , width <= 1425 && width > 768 &&  'justify-center')}>
                {
                    GOldypotActive?.map((data ,inx)=>(
                        <ActivityTabs _activeID={data._id} _slots={data.slots} _keyType={data.keyType} _buy={data._buy} key={inx}/>
                    ))
                }
            </div>
            <div className='bg-[#0C1C1E]  pb-[55px]'>
                <div className="h-[90px] flex items-center text-[25px] xsmax:text-[15px] text-[white] font-extrabold  ml-[89px] xsmax:ml-[30px] ">Upcoming</div>
                {/* <div className=" bg-[rgb(12,27,29)]  pt-[25px] ml-[31px] xsmax:ml-[0px] xsmax:mx-[10px] ssmax:mx-[0px] "> */}
                    <Carousel responsive={responsiveUpcoming}
                        infinite={true}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px min-width-upcoming"
                        containerClass="carousel-container"
                        // removeArrowOnDeviceType={["mobile"]}
                        keyBoardControl={true}
                        

                        transitionDuration={500}                
                    >
                    {
                        PotUpcoming?.map((data ,inx)=>(
                            <UpcomingTabs price={data._price} url ={data._url} key={inx}/>
                        ))
                    }
                    </Carousel>
                   
                {/* </div> */}
            </div>
            <div className="static flex items-center justify-between  xsmax:text-[15px] text-[25px] text-[white] font-extrabold  pl-[89px] xsmax:min-h-[40px] min-h-[65px] bg-[#090B0C] pr-[50px] xsmax:pl-[30px] ">
                <div className="">Finished</div> 
                <div className="">
                    <input type="text" placeholder='search' className="placeholder:font-Chancery searchInput -mr-[15px] placeholder:text-gray-500 placeholder:text-[20px] text-[20px] font-thin	 bg-[#090B0C] w-[230px] h-[30px] border-b-[1px] border-[#43F3FF]"  />
                    <Image src='/images/goldypot/search.svg' className='' width='12' height='12' alt='' /> 
                </div>
            </div>
            {/* <div className="flex items-center xsmax:text-[15px] text-[29px] text-[white] font-extrabold  pl-[89px] xsmax:min-h-[40px] min-h-[65px] bg-[#090B0C] xsmax:pl-[30px]">Past</div> */}
            <div className='bg-[#0C1C1E] py-[20px]'>
                {/* <div className={cn('flex flex-wrap justify-start  bg-[#0C1C1E]  pb-[20px] pt-[25px]  xsmin:ml-[30px] xsmax:justify-between  ssmax:justify-start ssmax:mx-[0px] ' , width < 370 && 'justify-center' ,width > 402 && width <= 422 && 'mx-[10px]' , width >422 && width < 425 && 'mx-[20px]'  )}> */}
                <Carousel responsive={responsiveFinished} 
                      infinite={true}
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px min-width-finished"
                      containerClass="carousel-container"
                      keyBoardControl={true}
                      transitionDuration={500}                
                >
                    {
                        PastPot?.map((data ,inx)=>(
                                <PastTabs title={data._title} saleAmount ={data._saleAmount} show_modal={showModalMain} set_modal = {setShowModalMain} key={inx}/>
                        ))
                    }
                {/* </div> */}
                </Carousel>
            </div>
            {/* <button onClick={showingSlot}  className=" bg-[#628B92] text-[#FFFFFF] w-[131px] h-[48px] rounded-[14px] font-[17px] ">BUY</button> */}

            {/*   modal part   */}

                {showModalMain ? (
                    <PotDetails showModalflg={showModalMain} setModalflg={setShowModalMain}/>
                ) : null}
                
                {/*  modal part */}

        </div>
    );
} 