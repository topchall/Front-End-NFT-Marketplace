import cn from 'classnames';
import styles from './index.module.scss';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Axios from 'core/utils/axios';
import { hideSpinner, showSpinner } from 'slices/utilSlice';
import { useDispatch } from 'react-redux';
import SlotMachine_main from 'pages/SlotMachine_main';
import { useRouter } from 'next/router';
import Purchased from 'components/popups/Purchased' ;
import ErrorPopup from 'components/popups/ErrorPopup';

const GoldyPassCard = ({ id, image, stone, stone_image ,onClaim,enabled }) => {

    const [showClaim, setShowClaim] = useState(false);
    const wrapper = useRef(null) ;
   

    const router = useRouter();

  
    useEffect(()=>{
        // console.log(id , stone_image , enabled) ;
    },[]) ;

    const calc = async()=>{
        localStorage.setItem('passId' , id) ;
        onClaim() ;
    }
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
        <div ref={wrapper} className="relative"
            // onMouseLeave={() => enabled && setShowClaim(false)}
        >
        <div key={id} className={cn(' flex flex-col items-center w-[160px] mr-[7px] h-[215px] mb-[22px]', styles.card, enabled && showClaim && 'brightness-50')}
                onClick={() => enabled && setShowClaim(true)}
        >
            <div className={cn('relative flex items-center justify-center mt-3 text-[11px]', styles.toppanel)} style={{color: '#71FFCF'}}>
                Goldy#{id}
                <div className={styles.stone}>
                    <Image alt='' src={stone_image} width='16' height='16'/>
                    <div className='absolute text-white text-[8px] -bottom-[8px] mt'>
                        { stone }
                    </div>
                </div>
            </div>
            <div className='relative mt-5 mx-auto'>
                <Image alt='' src={image} width='110' height='110' />
            </div>
            <div className='mt-[10px] text-[15px] text-white'>
                GOLDY PASS
            </div>
           
        </div>
            <button className={cn('absolute w-[130px] h-[50px] top-[90px] left-[17px] hover:brightness-110 text-[16px]	font-bold text-[white]', styles.claimbutton, ( !showClaim ) && 'hidden')}
                    onClick={calc}
                >select
                </button>
        </div>
    )
}

export default GoldyPassCard;