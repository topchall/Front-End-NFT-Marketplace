import cn from 'classnames';
import styles from './index.module.scss';
import PetCard from 'components/cards/PetCard';
import PetCardMobile from 'components/cards/PetCardMobile';
import { useEffect, useRef, useState } from 'react';
import { goldypetspage_data } from 'utils/data';
import SuccessPopup from 'components/popups/SuccessPopup';
import ErrorPopup from 'components/popups/ErrorPopup';
import { goldefy_ABI, goldefy_Address } from 'utils/contracts';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import { useRouter } from 'next/router';
import Axios from 'core/utils/axios';
import { hideSpinner, showSpinner } from 'slices/utilSlice';
import { useDispatch } from 'react-redux';

export default function GoldyPets() {

    const wrapper = useRef<HTMLDivElement>();
    const [width, setWidth] = useState(0);
    const colCount = Math.floor(width / 280);
    let divCount = 0;
    if(goldypetspage_data.length >= colCount && goldypetspage_data.length % colCount > 0)
        divCount = colCount - goldypetspage_data.length % colCount

    useEffect(() => {
        if(!wrapper.current) return;
        const onResize = () => {
            setWidth(wrapper.current.clientWidth);
        }
        window.addEventListener('resize', onResize);
        onResize();
        return () => window.removeEventListener('resize', onResize);
    }, [wrapper])

    const [isSuccessVisible, showSuccessPopup] = useState(false);

    const onSuccessClose = () => {
        showSuccessPopup(false);
        router.replace('/account/inventory/pets');
    };

    const [isErrorVisible, showErrorPopup] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const onErrorClose = () => {
        showErrorPopup(false);
    };

    const {account, library} = useWeb3React();

    const router = useRouter();
    const dispatch = useDispatch();

    const onClaim = async (petType) => {
        if(!library?.provider || !account) {            
            router.replace('/auth/wallet');
            return;
        }
        
        dispatch(showSpinner());
        const web3 = new Web3(library.provider) ;
        const contract = new web3.eth.Contract(goldefy_ABI as any, goldefy_Address) ;
        const resp = await Axios.post('pet/get-merkle-path') as any ;
        if(resp.error_code != 0) return
        if(!resp.data.merkleLeaf){
            dispatch(hideSpinner());
            setErrorMsg('Not Pet NFT event winner');
            showErrorPopup(true);
            return;
        }
        const {index, proof} = resp.data.merkleLeaf;
        try{
            const txrlt = await contract.methods.claimFirstWhitelist(petType, index, proof).send({from: account}) ;
            if(txrlt && txrlt.status == true ) {
                try{
                    await Axios.post('pet/register-claimed-txhash', {
                        transaction_hash: txrlt.transactionHash
                    }) as any ;
                }catch(e){
                    setErrorMsg('txn hash is invalid');
                    showErrorPopup(true);
                }
            }
            dispatch(hideSpinner());
            showSuccessPopup(true);
        } catch(e) {
            dispatch(hideSpinner());
            if(e.code == 4001) {
                return;
            }
            setErrorMsg('');
            showErrorPopup(true);
        }
    }

    return (
        <div className={cn('flex justify-center 2xl:pb-[195px] xl:pb-[150px] pb-[100px] semin:h-full', styles.container)}>
            <div className='2xl:w-[1400px] lg-mx-[100px] mx-[30px] xsmax:mx-[0px]'>
                <div className={cn('flex justify-left semax:ml-[10%] ')}>
                    <div className={cn('pt-[100px] pb-[50px] text-[83px] smmaxpet:text-[70px] smminpet:text-[48px] xsmax:mb-[0px] xsmax:pl-[20%] pl-[12px] font-euro font-bold  xsmax:pb-[10px]  xsmax:pt-[24px] ssmaxpet364:pl-[10%]  ')}>
                        Goldy Pets
                    </div>
                </div>
                <div className='flex justify-center' ref={wrapper}>
                    <div className={cn("flex flex-wrap  " , width > 1180 && 'justify-start'   ,width<=1180 &&  width> 425 && 'justify-center', width < 364 && 'justify-center' , width <= 425 && width>364 && 'justify-between' ,width <= 425 && width>=404 &&   'px-[20px]' , width< 404 && width >= 384 && 'px-[10px]',width<384 &&   'px-[0px]'  )} >
                        {
                            width> 425?
                            goldypetspage_data.map((pet, key) => (
                                <PetCard key={key} {...pet} onClaim={() => onClaim(pet.type)} enableClaim={account ? true : false}/>
                            ))
                            :
                            goldypetspage_data.map((pet, key) => (
                                <PetCardMobile key={key} {...pet} onClaim={() => onClaim(pet.type)} enableClaim={account ? true : false}/>
                            ))
                        }
                        {
                            divCount > 0 && (new Array(divCount)).fill(0).map((value, key) => (
                                <div className='w-[280px]' key={key}>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <SuccessPopup onClose={onSuccessClose} visible={isSuccessVisible}/>
            <ErrorPopup onClose={onErrorClose} visible={isErrorVisible} msg={errorMsg}/>
        </div>
    )
} 