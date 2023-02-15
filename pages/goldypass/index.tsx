import cn from 'classnames';
import styles from './index.module.scss';
import GoldyPassBuyCard from 'components/cards/GoldyPassBuyCard';
import GoldyPassBuyCardMobile from 'components/cards/GoldyPassBuyCardMobile' ;
import { goldypasspage_data } from 'utils/data'
import { useEffect, useRef, useState } from 'react';
import BuyGoldy from 'components/popups/BuyGoldy';
import { hideOverlay, showOverlay } from 'slices/utilSlice';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import { marketplace_ABI, marketplace_Address, usdt_ABI, usdt_address } from 'utils/contracts';
import { useRouter } from 'next/router';
import SuccessPopup from 'components/popups/SuccessPopup' ;
import Purchased from 'components/popups/Purchased' ;
import ErrorPopup from 'components/popups/ErrorPopup' ;
import Axios from 'core/utils/axios';
import SlotMachine_main from 'pages/SlotMachine_main';
import Incentive from 'components/popups/Incentive';

export default function GoldyPass() {

    const wrapper = useRef<HTMLDivElement>();
    const [width, setWidth] = useState(0);
    const colCount = Math.floor(width / 278);

    const [isBuyGoldyOpen, openBuyGoldy] = useState(false);
    const dispatch = useDispatch();
    const [goldyPass, setGoldyPass] = useState({name: '', type: 0});
    const [balance, setBalance] = useState(-1);
    const [approved, setApproved] = useState(false);
    const [approving, setApproving] = useState(false);
    const [buying, setBuying] = useState(false);
    const [isDiableSlot , setDiableSlot] = useState() ;
    const [isIncentive , setIncentiveLink] = useState() ;

    const { library, account } = useWeb3React();
    const router = useRouter();

    useEffect(() => {
        if(!isBuyGoldyOpen || !library) return;
        setBalance(-1);
        const web3 = new Web3(library.provider);
        const usdt = new web3.eth.Contract(usdt_ABI as any, usdt_address);
        usdt.methods.balanceOf(account).call()
            .then(ret => {
                const balance = web3.utils.fromWei(ret, 'mwei');
                setBalance(Number(balance));
            })
    }, [isBuyGoldyOpen, library])

    const openPopup = (pet) => {
        if(!account) {
            router.replace('/auth/wallet') ;
            return;
        }
        setGoldyPass(pet) ;
        // dispatch(showOverlay()) ;
        openBuyGoldy(true) ;
    }

    const closePopup = () => {
        // dispatch(hideOverlay()) ;
        openBuyGoldy(false) ;
    }

    useEffect(() => {
        setApproved(false);
        if(!account) return;
        const web3 = new Web3(library.provider);
        const usdt = new web3.eth.Contract(usdt_ABI as any, usdt_address);  
        usdt.methods.allowance(account, marketplace_Address).call()
            .then((allowance) => {
                allowance = web3.utils.fromWei(allowance, 'mwei');
                if(allowance >= 20) 
                    setApproved(true);
            })
            .catch((e) => {

            })
    }, [account])

    const onApprove = () => {
        setApproving(true)
        const web3 = new Web3(library.provider);
        const usdt = new web3.eth.Contract(usdt_ABI as any, usdt_address);  
        usdt.methods.approve(marketplace_Address, web3.utils.toWei('1000', 'mwei')).send({ from: account })
            .then(() => {
                setApproving(false);
                setApproved(true);
            })
            .catch(() => {
                setApproving(false);
            })
    }

    const onBuy = async () => {
       
        setBuying(true) ;
        const web3 = new Web3(library.provider) ;
        const marketplace = new web3.eth.Contract(marketplace_ABI as any, marketplace_Address);  
        
        try{
            const txrlt = await marketplace.methods.buyGoldyPass(goldyPass.type).send({ from: account }) ;
            // await txrlt.wait() ;
            if(txrlt && txrlt.status == true ) {
                try{
                    const resp = await Axios.post('pass/register-purchased-txhash/', {
                        transaction_hash: txrlt.transactionHash
                    }) as any;
                    setDiableSlot(resp.data.lucky_number) ;
                    setIncentiveLink(resp.data.incentive) ;
                    
                }catch(e){
                    setBuying(false);
                    closePopup();
                    setErrormsg('txn hash is invalid')
                    showErrorPopup(true);
                }
            }
            setBuying(false);
            closePopup();
            showSuccessPopup(true) ;
        }catch(e){
            setBuying(false);
            if(e.code == 4001) return;
            closePopup();
            showErrorPopup(true);
        }
    }

    const [isSuccessVisible, showSuccessPopup] = useState(false) ;
    const [isSlotVisivle , showSlotPopup] = useState(false) ;
    const [isIncentiveVisible , showIncentive] = useState(false) ;
    const [lucky1 , setLuck1] = useState() ;
    const [lucky2 , setLuck2] = useState() ;
    const [lucky3 , setLuck3] = useState() ;

    useEffect(()=>{
       
    },[]) ;

    const onSuccessClose = () => {
        showSuccessPopup(false) ;
        
        if(isDiableSlot != '') {

            var luck1 , luck2 , luck3 ;
            luck1= parseInt(isDiableSlot) / 100 ;
            luck1= parseInt(luck1) ;
            luck2= (parseInt(isDiableSlot) % 100 ) / 10;
            luck2= parseInt(luck2) ;
            luck3= parseInt(isDiableSlot) % 10 ;
            // console.log(luck1 , luck2 , luck3) ;
            
            localStorage.setItem('lucky1' , luck1) ;
            localStorage.setItem('lucky2' , luck2) ;
            localStorage.setItem('lucky3' , luck3) ;
            setLuck1(luck1) ;
            setLuck2(luck2) ;
            setLuck3(luck3) ;
            showSlotPopup(true) ;
        }
        else router.replace('/account/inventory/goldypass') ;
    };

    const slotClose =() =>{
        showSlotPopup(false) ;
        if(isIncentive != '') showIncentive(true) ;
        else router.replace('/account/inventory/goldypot') ;
        // showIncentive(true) ;
    }

    const onIncentiveClose = ()=>{
        showIncentive(false) ;
        router.replace('/account/inventory/goldypot') ;
    }
        


    const [isErrorVisible, showErrorPopup] = useState(false);
    const [ErrorMsg , setErrormsg] = useState('') ;
    const ref = useRef(null) ;
    const onErrorClose = () => {
        showErrorPopup(false);
    };


    useEffect(() => {
        if(!wrapper.current) return;
        const onResize = () => {
            setWidth(wrapper.current.clientWidth);
        }
        window.addEventListener('resize', onResize);
        onResize();
        // console.log(wrapper.current.clientWidth) ;
        return () => window.removeEventListener('resize', onResize);
    }, [wrapper]) ;

    return (
        <div className={cn('pb-[195px] xsmax:pb-[5px] w-full text-white flex justify-center', styles.container)}>
            <div className='2xl:w-[1400px] mx-[30px] xsmax:mx-[0px]'>
                <div className='xsmax:pl-[20px] xsmax:pr-[20px]'>
                    <div className='pt-[52px] text-[83px] xsmax:text-[46px] pl-[12px] font-euro font-bold xsmax:text-center'>
                        Goldy Pass
                    </div>
                    <div className='text-[14px] pl-[12px] pt-[14px] pb-[40px] xsmax:text-[13px] xsmax:pl-[2px] xsmax:pb-[17px]'>
                        The Goldy pass grants players access to play on the metaverse by giving out one of our 12 kinds of Goldy. 
                        <br/>
                        Goldy pass&apos;s Goldy is different from our generated Goldy in the Marketplaces.
                    </div>
                </div>
                <div className={cn('flex flex-wrap justify-left' , width <=425 && 'justify-center')} ref={wrapper}>
                    {
                        width > 428 ? 
                        goldypasspage_data.map((pet, key) => (
                            <GoldyPassBuyCard key={key} {...pet} onBuy={() => openPopup(pet)}/>
                        ))
                        :
                        goldypasspage_data.map((pet, key) => (
                            <GoldyPassBuyCardMobile key={key} {...pet} onBuy={() => openPopup(pet)}/>
                        ))
                    }
                    {
                        [0,0,0,0,0].map((value, key) => (
                            <div key={key} className='w-[266px] mx-[6px]'>
                            </div>
                        ))
                    }
                </div>
            </div>
            <BuyGoldy 
                name={goldyPass.name}
                balance={balance}
                approved={approved}
                buying={buying}
                onBuy={onBuy}
                approving={approving}
                onApprove={onApprove}
                isOpen={isBuyGoldyOpen} 
                onClose={closePopup}
            />
            {/* <SuccessPopup onClose={onSuccessClose} visible={isSuccessVisible} msg={`Buy GoldyPass ${goldyPass.name.toUpperCase()} successful`} /> */}
            <Purchased onClose={onSuccessClose} isOpen={isSuccessVisible} />
            <Incentive onClose={onIncentiveClose} isOpen={isIncentiveVisible} incentiveLink={isIncentive} />
            <ErrorPopup onClose={onErrorClose} visible={isErrorVisible} msg={ErrorMsg} />
            {
                isSlotVisivle ? <SlotMachine_main  num1={lucky1} num2={lucky2} num3={lucky3} setModalflg={slotClose}/> : <></>
            }
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
            {
                    (isSuccessVisible || isErrorVisible || isIncentiveVisible || isBuyGoldyOpen) 
                &&
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            }
        </div>
    )
} 