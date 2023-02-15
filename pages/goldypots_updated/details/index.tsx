import cn from 'classnames';
import styles from './index.module.scss';
import PetCard from 'components/cards/PetCard';
import PetCardMobile from 'components/cards/PetCardMobile';
import { useEffect, useRef, useState,Fragment } from 'react';
import { goldypetspage_data } from 'utils/data';
import SuccessPopup from 'components/popups/SuccessPopup';
import ErrorPopup from 'components/popups/ErrorPopup';
import { goldefy_ABI, goldefy_Address } from 'utils/contracts';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import { useRouter } from 'next/router';
import Axios from 'core/utils/axios';
import { hideSpinner, showSpinner } from 'slices/utilSlice';
import TokenTooltip from 'components/tooltips/TokenTooltip';
import Image from 'next/image';
import ReactCountryFlag from "react-country-flag" ;



export default function PotDetails({showModalflg,setModalflg }) {
    const [showModal, setShowModal] = useState(showModalflg);
    const ref = useRef(null) ;

    const WinnerGoldypot = [
        {_No:'1' , _country:'JP' , _email:'A2*sk*g*00@mail.com' , _address:'0x95e23f9e002...55e1a3' },
        {_No:'2' , _country:'AI' , _email:'Joe*b_1**0@mail.com' , _address:'0x95e23f9e002...55e1a3' },
        {_No:'3' , _country:'BR' , _email:'M**Da*@mail.com' , _address:'0x95e23f9e002...55e1a3' },
        {_No:'4' , _country:'ES' , _email:'Lar**y*x@mail.com' , _address:'0x95e23f9e002...55e1a3' },
        {_No:'5' , _country:'SE' , _email:'M**Da*@mail.com' , _address:'0x95e23f9e002...55e1a3' },
        {_No:'6' , _country:'CH' , _email:'A2*sk*g*00@mail.com' , _address:'0x95e23f9e002...55e1a3' },
        {_No:'7' , _country:'ES' , _email:'Lar**y*x@mail.com' , _address:'0x95e23f9e002...55e1a3' },
        {_No:'8' , _country:'SE' , _email:'M**Da*@mail.com' , _address:'0x95e23f9e002...55e1a3' },
        {_No:'9' , _country:'CH' , _email:'A2*sk*g*00@mail.com' , _address:'0x95e23f9e002...55e1a3' },
        
    ]
    

    const handleClickOutside = (event) => {
        if ((ref.current && !ref.current?.contains(event.target))) {
            setModalflg(false);
            // console.log('close');
        }
    }
    useEffect(()=>{
        document.addEventListener("mousedown",  handleClickOutside);
    },[ref]) ;

   return(
    <>
     <div  className="justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none z-[3000]">
            <div className="relative w-auto my-6 xsmax:my-[0px] mx-auto max-w-[480px] top-[60px] xsmax:top-[0px] ">
              {/*content*/}
              <div ref={ref} className="border-0 rounded-[16px] xsmax:rounded-[0] shadow-lg relative flex flex-col w-full xsmax:min-h-screen	 bg-[#02222A] outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 text-[white] ">
                  <h3 className="text-[21px] xsmax:text-[18px] font-semibold">
                    Goldypot Round 1A
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-[#025962]  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModalflg(false)}
                  >
                    <span className="bg-transparent text-[#025962] h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative pt-2 flex-auto pb-[20px]">
                    <div className="flex justify-between items-center pl-[40px] pr-[30px] xsmax:hidden">
                        <div className="text-[16px] mt-[12px] text-[white]">
                            <div className="text-[16px]">Winning</div>
                            <div className="text-[16px]">Lucky Number</div>
                            <div className="text-[16px]">Providers</div>
                        </div>
                        <div className="flex justify-around mt-[3px]">
                            <div className={cn('z-10' , styles.ellipse)}>
                                <div className="flex justify-center h-full items-center text-[45px] text-[#FFFFFF] p-[10] font-extrabold">7</div>
                                <div className={cn('-mt-[19px] ml-[13px] flex justify-center h-full items-center text-[22px] text-[#FFFFFF] font-bold tracking-widest	' ,styles.subtitle)}>#4</div>
                            </div>
                            <div className={cn('mx-[3px] z-10', styles.ellipse)}>
                            <div className="flex justify-center h-full items-center text-[45px] text-[#FFFFFF] p-[10] font-extrabold">7</div>
                                <div className={cn('-mt-[19px] ml-[13px] flex justify-center h-full items-center text-[22px] text-[#FFFFFF] font-bold tracking-widest	' ,styles.subtitle)}>#4</div>
                            </div>
                            <div className={cn('z-10',styles.ellipse)}>
                            <div className="flex justify-center h-full items-center text-[45px] text-[#FFFFFF] p-[10] font-extrabold">3</div>
                                <div className={cn('-mt-[19px] ml-[13px] flex justify-center h-full items-center text-[22px] text-[#FFFFFF] font-bold tracking-widest	' ,styles.subtitle)}>#4</div>
                            </div>
                        </div>

                    </div>
                    <div className="bg-[#025962] mt-6 py-2 pl-[39px] pr-[37px]" >
                        <div className="flex justify-between">
                            <div className="text-[white] text-[16px] xsmax:text-[14px] ">Status:</div>
                            <div className="text-[white] text-[16px] xsmax:text-[14px] ">Closed</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-[white] text-[16px] xsmax:text-[14px] ">Slots:</div>
                            <div className="text-[white] text-[16px] xsmax:text-[14px] ">1000/1000</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-[white] text-[16px] xsmax:text-[14px] ">Dated Ended:</div>
                            <div className="text-[white] text-[16px] xsmax:text-[14px] ">06/15/2022</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-[white] text-[16px] xsmax:text-[14px]">Total Winners:</div>
                            <div className="text-[white] text-[16px] xsmax:text-[14px]">9 Winners</div>
                        </div>
                    </div>
                    <div className="pt-3">
                        <div className="pl-[39px]">
                            <span className="text-[white] text-[20px] xsmax:text-[23px] xsmax:pb-[50px]">Winners:</span>
                            <span className="text-[#FFFF0D] text-[20px] xsmax:hidden">Goldypot</span>
                        </div>
                        <div className="pl-[43px] pr-[35px] mt-[5px]">
                            
                            {
                                WinnerGoldypot?.slice(0,6).map((data,inx)=>(
                                    <div className="flex  mb-[6px] xsmax:mb-[10px]" key={inx}>
                                        <div className="text-[#43F3FF] text-[19px] xsmax:text-[15px] pr-[20px]">{data._No}</div>
                                        <div className="text-[#43F3FF] text-[19px] xsmax:text-[15px] pr-[20px]"> <ReactCountryFlag countryCode={data._country} style={{width:'36px'}} svg /></div>
                                        <div className="flex justify-between items-center w-[330px]">
                                            <div className="text-[white] text-[14px] xsmax:text-[13px]">{data._email}</div>
                                            <div className="text-[white] text-[14px] xsmax:text-[13px]">{data._address}</div>
                                        </div>
                                    </div>
                                ))
                               }
                                    
                        </div>

                        <div className="pl-[39px] pt-[4px] xsmax:pt-[0px]">
                            <span className="text-[white] text-[20px] xsmax:hidden">Winners:</span>
                            <span className="text-[#C36FEF] text-[20px] xsmax:hidden">Lucky Number Provider</span>
                        </div>
                        <div className="pl-[43px] pr-[35px] mt-[10px]">
                            
                            {
                                WinnerGoldypot?.slice(6,10).map((data,inx)=>(
                                    <div className="flex  mb-[6px] xsmax:mb-[10px]" key={inx}>
                                        <div className="text-[#43F3FF] text-[19px] xsmax:text-[15px]  pr-[20px]">{data._No}</div>
                                        <div className="text-[#43F3FF] text-[19px] xsmax:text-[15px] pr-[20px]"> <ReactCountryFlag countryCode={data._country} style={{width:'36px'}} svg /></div>
                                        <div className="flex justify-between items-center w-[330px]">
                                            <div className="text-[white] text-[14px] xsmax:text-[13px]">{data._email}</div>
                                            <div className="text-[white] text-[14px] xsmax:text-[13px]">{data._address}</div>
                                        </div>
                                    </div>
                                ))
                               }
                                    
                        </div>
                    </div>
                </div>
                {/*footer*/}
                
              </div>
            </div>
          </div>
        
    </>
   )
} 