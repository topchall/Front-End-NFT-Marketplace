import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image' ;
import Purchased from 'components/popups/Purchased';
import GenerateGoldy from 'components/popups/generateGoldy';
import GoBack from 'components/buttons/GoBack';

import Deailnote from './Deailnote' ;
import Starnote from './Starnote' ;
import { NodeNextRequest } from 'next/dist/server/base-http/node';

export default function Generator() {
    
    const [IsPurchaged , SetPopUpPurchaged] = useState(false) ;
    const [IsApprove , SetApprove] = useState(true) ;
    // const [isRandomDisplayed , setRandomDisplayed] = useState(false) ;
    const [IsProcessing , SetProcessing] = useState(false) ;
    const [IsSeletedOne , SetSelectedOne] = useState(false) ;
    const [IsWidth , SetWidth] = useState(0) ;
    const GeneratorRef = useRef(null) ;

    useEffect(() => {
        if(!GeneratorRef.current) return;
        const onResize = () => {
            SetWidth(GeneratorRef.current.clientWidth);
        }
        window.addEventListener('resize', onResize);
        onResize();
        return () => window.removeEventListener('resize', onResize);
      }, [GeneratorRef]) ;



    const generateFuc =()=>{
        SetPopUpPurchaged(true) ;
    }
    const onClosePurchaged = ()=>{
        SetPopUpPurchaged(false) ;
        SetApprove(false) ;
        SetProcessing(true) ;
        setTimeout(()=>{
            SetProcessing(false) ;
            SetSelectedOne(true) ;
        },1500) ;
    }

    const onApprove =()=>{

    }
    const onBuy =()=>{

    }
    const reback =()=>{

    }

    return(
        <div className={cn('relative h-full flex flex-col justify-center items-center overflow-hidden ' , styles.GeneratorMain)} ref={GeneratorRef}>
            <div className={cn("  z-[10] pt-[440px] sp746min:pt-[108px] " ,IsSeletedOne && 'sp640min:pt-[89px]')}>
                { IsApprove && <div className="text-[#FFFFFF] text-[26px] flex justify-center">Random Goldy Generator</div> } 
                { IsApprove && <img src={'/images/marketplace/ui/shadow1.png'} width={IsWidth > 769 ?  511 : 304} height={IsWidth > 769 ?  511 : 304}  className='diable-auto-width' />}
                { IsProcessing && <Image src={'/images/marketplace/ui/light1.png'} width='900px' height={'600'} />}
                { IsSeletedOne && 
                    <div className="pb-[80px]">
                        <div className="text-[#FFFFFF] text-[26px] flex justify-center">
                            Random Goldy Generator
                        </div>
                        <div className="text-[#1AFF6E] text-[49px] flex justify-center -mt-[17px] mb-[25px] ">
                            Success
                        </div>
                        <Image src={'/images/marketplace/parts/g7.png'} width={'400'} height={'400'} />
                    </div>
                }
            </div>
            <div className={cn("relative -mt-[100px] sp746min:-mt-[180px] ml-[45px] ")}>
                <img src={'/images/marketplace/ui/platform.png'} width={IsWidth > 769 ? 1631 : 871 } height={IsWidth > 769 ? 441 : 235 } className='diable-auto-width' />
                <div className={cn('absolute bottom-[15%] right-[51%] translate-x-1/2  cursor-pointer tracking-wider w-[231px] sp746min:w-[316px] h-[81px] sp746min:h-[111px] text-[21px] sp746min:text-[22px] font-bold flex flex-wrap justify-center items-center text-[black] ' , styles.randomBtn)}
                    onClick={generateFuc}
                >
                    GENERATE
                </div>
            </div>
            <GenerateGoldy isOpen={IsPurchaged} approved={true} balance={100} onClose={onClosePurchaged} onApprove={onApprove} onBuy={onBuy} approving={true} buying={false} />
            {/* <Starnote isShow={IsApprove}  /> */}
            <Deailnote isShow={IsSeletedOne} />
                

        </div>
    )

} 

