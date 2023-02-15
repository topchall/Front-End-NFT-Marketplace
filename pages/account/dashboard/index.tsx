import { useEffect, useState,useRef } from 'react';
import AccountLayout from 'components/layout/Account';
import Image from 'next/image';
import { useAuth } from 'store/hook';
import axios from 'core/utils/axios';
import { useDispatch } from 'react-redux';
import { login } from 'slices/authSlice';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';
import cn from 'classnames';
import Link from 'next/link';
import Commission from 'components/popups/Commission';
import { truncateAddress, copy2Clipboard } from 'utils';
import { useRouter } from 'next/router';


const Dashboard = () => {
  
  const router = useRouter() ;

  const wrapper = useRef<HTMLDivElement>();
  const [width, setWidth] = useState(0);
  const [isCommissionOpen , CommissionOpen]   = useState(false) ;
  const [incentive, setIncentive] = useState('https://marketplace.goldefy.com/testname') ;

  useEffect(() => {
    if(!wrapper.current) return;
    const onResize = () => {
        setWidth(wrapper.current.clientWidth);
    }
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, [wrapper]) ;
  const closePopup = ()=> {
    CommissionOpen(false) ;
  }
  const openPopup = ()=>{
    CommissionOpen(true) ;
  }
  const copyPast =(wallet)=>{
    toast.success('Copied to clipboard');
    copy2Clipboard(wallet)
  }

  return (
    <AccountLayout title='Account Settings' submenu={[]} >
    
      <div ref={wrapper} className={cn('')}>
        <div className="flex flex-wrap justify-between  sp746max:flex-col px-[0] sp405min:px-[20px]">
            <div className=' flex ml-[3px] lgmax:mt-[34px] lgmin:mt-[64px] text-white text-20px items-center'>
                <Image src='/images/account/settings/dashboard.svg' width='28' height='28' /> 
                <span className='pl-[17px] font-segoe-bold xsmax:text-[15px] '>dashboard</span>            
            </div>
            <div className=' flex relative ml-[3px] lgmax:mt-[34px] lgmin:mt-[64px] text-white text-20px items-center'>
                <Image src='/images/account/settings/share-link.svg' width='28' height='28' /> 
                <input className={cn('outline-none text-[12px] ml-[17px] px-[21px] w-[300px]  h-[31px]  bg-[#051E24] rounded-[9px]')} 
                    value={router.query.incentivelink && router.query.incentivelink  }
                    // onChange={e => setIncentive(e.target.value)}            
                    readOnly 
                />
                <div className="absolute right-[5px] ">
                  <Image alt='' width='10px' height='15px' className='cursor-pointer  '
                      src='/images/copy.png'
                      onClick={() => copyPast(router.query.incentivelink && router.query.incentivelink  )}
                  />
                </div>
            </div>
        </div>
        <div className="rounded-[10px] sp405min:rounded-[15px] sp746min:rounded-[20px] bg-[#155C67] h-[75px] sp405min:h-[75px] sp746min:h-[110px] xlmin:h-[146px] flex flex-wrap justify-around my-[20px] p-[10px] xlmin:p-[18px] max-w-[360px] sp405min:max-w-[390px] sp746min:max-w-[1115px]">
            <div className="rounded-[10px] sp405min:rounded-[15px] sp746min:rounded-[20px] bg-[#145560] px-[5px] sp405min:px-[10px] sp746min:px-[20px] xlmin:px-[35px] pt-[15px] pb-[0px] mr-[10px]  flex items-center flex-col">
                <div className="text-[18px] sp405min:text-[20px] sp746min:text-[30px] xlmin:text-[42px] text-[white] font-[sans-serif]  font-semibold ">{router.query.friendsRef && router.query.friendsRef  }</div>
                <div className="text-[6px] sp405min:text-[6px] sp746min:text-[10px] xlmin:text-[12px] text-[#cfcfcf] -mt-[5px]">Friends Referred</div>
            </div>
            
            <div className="rounded-[10px] sp405min:rounded-[15px] sp746min:rounded-[20px] bg-[#145560] px-[5px] sp405min:px-[10px] sp746min:px-[20px] xlmin:px-[35px] pt-[15px] pb-[0px] flex ">
                <div className="flex items-center flex-col">
                    <div className="text-[18px] sp405min:text-[20px] sp746min:text-[30px] xlmin:text-[42px] text-[white] font-[sans-serif]  font-semibold	">{router.query.purchaged && router.query.purchaged  }</div>
                    <div className="text-[6px] sp405min:text-[6px] sp746min:text-[10px] xlmin:text-[12px] text-[#cfcfcf] -mt-[5px] sp746min:-mt-[10px] ">Purchased Amount</div>
                    <div className="text-[6px] sp405min:text-[6px] sp746min:text-[10px] xlmin:text-[12px] text-[#cfcfcf] ">USDT</div>
                </div>
                <div className="px-[5px] sp405min:px-[10px] sp746min:px-[15px] xlmin:px-[25px] flex items-center flex-col">
                    <div className="text-[18px] sp405min:text-[20px] sp746min:text-[30px] xlmin:text-[42px] text-[white] font-[sans-serif]  font-semibold	">{router.query.incentive && router.query.incentive  } %</div>
                    <div className="text-[6px] sp405min:text-[6px] sp746min:text-[10px] xlmin:text-[12px] text-[#cfcfcf] -mt-[3px] sp746min:-mt-[5px]">Incentive</div>
                </div>
                <div className="pr-[5px] sp405min:pr-[10px] sp746min:pr-[15px] xlmin:pr-[25px] flex items-center flex-col">
                    <div className="text-[18px] sp405min:text-[20px] sp746min:text-[30px] xlmin:text-[42px] text-[white] font-[sans-serif]  font-semibold	">{router.query.earned && router.query.earned  }</div>
                    <div className="text-[6px] sp405min:text-[6px] sp746min:text-[10px] xlmin:text-[12px] text-[#cfcfcf] -mt-[5px] sp746min:-mt-[10px]">Total Earned</div>
                    <div className="text-[6px] sp405min:text-[6px] sp746min:text-[10px] xlmin:text-[12px] text-[#cfcfcf] ">USDT</div>
                </div>
                <div className="pl-[5px] sp405min:pl-[10px] sp746min:pl-[15px] xlmin:pl-[25px] flex items-center flex-col justify-center">
                        <button onClick={openPopup} className='bg-[#44B8D2] rounded-[5px] sp405min:rounded-[10px] sp746min:rounded-[15px] w-[85px] sp405min:w-[100px] h-[25px] sp405min:h-[30px] text-[9px] sp405min:text-[10px] sp746min:w-[182px] sp746min:h-[45px] sp746min:text-[14px] flex items-center  flex-col justify-center  text-[white] '>
                            Commission Rebate
                        </button>

                </div>
            </div>
        </div>
      </div>
      <Commission 
        balance={router.query.earned ? router.query.earned : 0 }
        isOpen={isCommissionOpen} 
        onClose={closePopup}
      />
    </AccountLayout>
  )
}

export default Dashboard ;