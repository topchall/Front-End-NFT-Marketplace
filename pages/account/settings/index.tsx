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
import { truncateAddress, copy2Clipboard } from 'utils';
import { getEnvironmentData } from 'worker_threads';
import { useRouter } from 'next/router';

const Settings = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const { user_name, user_email } = auth;
  
  const [name, setName] = useState('') ;
  // const [incentive, setIncentive] = useState('https://marketplace.goldefy.com/testname') ;
  const [email, setEmail] = useState('') ;

  const [incentiveLink , setIncentiveLink] = useState() ;
  const [friendsReferred , setFrendReferred] = useState() ;
  const [purchasedAmount , setPurchagedAmount] = useState() ;
  const [incentive , setIncentive] = useState() ;
  const [totalEarned , setTotalEarned] = useState() ;

  const [isChanging, setChanging] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setName(user_name ?? '');
    setEmail(user_email ?? '');
  }, [user_name, user_email]);

  useEffect(()=>{
    getData() ;
  },[]) ;

  const getData = async ()=>{
    try{
      const res = await axios.post('user/account-setting') as any ;
      if(res.error_code == 0) {
        setIncentiveLink(res.data.incentive_link) ;
        setFrendReferred(res.data.friends_referred) ;
        setPurchagedAmount(res.data.purchased_amount) ;
        setIncentive(res.data.incentive) ;
        setTotalEarned(res.data.total_earned) ;
      }
      console.log(res);
    } catch(e) {
      if(e.response.status == 400) {
        // console.log (e.response.data.msg);
      }
    }
  }

  const changeName = async () => {
    setChanging(true);
    try{
      const res = await axios.post('user/update-username', {
        username: name
      }) as any;
      if(res.error_code == 0) {
        dispatch(login({ ...auth, user_name: name}));
        toast.success('Successfully changed');
      }
      console.log(res);
    } catch(e) {
      if(e.response.status == 400) {
        toast.error(e.response.data.msg);
      }
    }
    setChanging(false);
  }

  const wrapper = useRef<HTMLDivElement>();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if(!wrapper.current) return;
    const onResize = () => {
        setWidth(wrapper.current.clientWidth);
    }
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
}, [wrapper]) ;

const RedirectDashboard =()=>{
  router.push({
    pathname :'/account/dashboard',
    query:{incentivelink : incentiveLink , friendsRef : friendsReferred , purchaged : purchasedAmount , incentive : incentive , earned : totalEarned}
}) ;
}

const copyPast =(wallet)=>{
  toast.success('Copied to clipboard');
  copy2Clipboard(wallet)
}

  return (
    <AccountLayout title='Account Settings' submenu={[]} >
    
      <div ref={wrapper} className={cn('ml-[0px] ssmax:ml-[0px] xsmax:ml-[0px]  lgmin:justify-start',width < 1024 && width >=425 && ' justify-items-center')}>
        <div className={cn('flex flex-wrap w-[100%] lgmin:pl-[0] lgmin:-ml-[0%] lgmin:mt-[10%]  ', width > 1024 && 'hidden')}>
          <div className=' flex ml-[3px] lgmax:mt-[34px] lgmin:mt-[64px] text-white text-20px items-center'>
            <Image src='/images/account/settings/share-link.svg' width='33' height='33' />
            <span className='pl-[17px] font-segoe-bold xsmax:text-[15px]'>Incentive Link</span>
          </div> 
          <div className={cn('flex  mt-[18px] items-center h-[43px] w-[100%] rounded-[9px] text-white')} >
            <div className="relative  w-[100%] text-[15px] h-[43px] max-w-[450px]">
              <input className={cn('outline-none  px-[21px] w-[100%] text-[15px] h-[43px] bg-[#051E24] rounded-[9px]')}
                value={incentiveLink}
                readOnly
              />
              <div className="absolute right-[4px] top-[10px] ">
                <Image alt='' width='15px' height='20px' className='cursor-pointer '
                  src='/images/copy.png'
                  onClick={() => copyPast(incentiveLink)}
                />
              </div>

            </div>
            <div className=' ml-[7px]'>
              {/* <Link href='/account/dashboard'> */}
                <button 
                  className={cn('w-[138px]  xsmax:w-[100px]  h-[43px] bg-[#FFD343] rounded-[9px] text-black text-[14px] hover:bg-[#a08222]')}
                  onClick ={RedirectDashboard}
                >
                    Dashboard
                </button>
              {/* </Link> */}
          </div>
          </div>
        </div>
        
        <div className={cn('   lgmin:pl-[0] lgmin:-ml-[0%]   ', width > 1024 && 'hidden')}>
          <div className=' flex ml-[3px] lgmax:mt-[34px] lgmin:mt-[64px] text-white text-20px items-center'>
            <Image src='/images/account/settings/email.svg' width='33' height='33' />
            <span className='pl-[17px] font-segoe-bold xsmax:text-[15px]'>Email Address</span>
          </div> 
          <div className={cn('flex mt-[18px] items-center h-[43px] w-[100%] rounded-[9px] text-white', auth.is_verify ? 'bg-[#051E24] w-[100%] max-w-[600px] xsmax:h-[42px] justify-between ': '')} >
            <input className={cn('outline-none px-[21px] w-[100%] text-[17px] h-[43px] max-w-[450px]', auth.is_verify ? 'grow bg-transparent' : '  bg-[#051E24] rounded-[9px]')}
              value={email}
              onChange={e => setEmail(e.target.value)}            
              readOnly
            />
            {
              auth.is_verify 
                ?
                <div className='flex items-center text-white text-[12px] pr-[22px] '>
                  <div className="hidden lgmin:block  flex-wrap">
                    <Image  src='/images/account/settings/verified.svg' width='18' height='18' />
                  </div>
                  <div className="block lgmin:hidden ">
                    <Image  src='/images/account/settings/verified.svg' width='40' height='40' />
                  </div>

                  <span className='pl-[12px]'>Verified</span>
                </div>
                :
                <div className='relative ml-[7px]'>
                  <Link href='/auth/email'>
                    <button 
                      className={cn('w-[138px]  xsmax:w-[100px]  h-[43px] bg-[#ce454f] rounded-[9px] text-white text-[14px]')}
                    >
                        Link Email
                    </button>
                  </Link>
              </div>
            }
          </div>
        </div>
      </div>
    </AccountLayout>
  )
}

export default Settings;