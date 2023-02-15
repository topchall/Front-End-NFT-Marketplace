import styles from './index.module.scss';
import cn from 'classnames';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useAuth } from 'store/hook';
import { truncateAddress, copy2Clipboard } from 'utils';
import { dropdown_menu } from './data';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton' ;
import { BounceLoader } from 'react-spinners' ;
import { toast } from 'react-toastify';

import 'react-loading-skeleton/dist/skeleton.css' ;
import { useEffect, useState ,useRef } from 'react';
// import { setTimeout } from 'timers/promises';

const SkeletonTim =()=>{
  
  return (
    <div>
      <SkeletonTheme >
        <Skeleton height={100} width ={100} circle={true} />
      </SkeletonTheme>
    </div>
  )
}

const AccountLayout = ({ title, submenu, children }) => {
  
  // const { logined, user_email } = useAuth();
  const wrapper = useRef<HTMLDivElement>();
  const [width, setWidth] = useState(0);
  const router = useRouter();
  const [isLoading , setLoading] = useState(true) ;
  useEffect(()=>{
    
    setTimeout(() => {
      setLoading(false) ;
    }, 1500);
    
  },[]) ;

  useEffect(() => {
    if(!wrapper.current) return;
    const onResize = () => {
        setWidth(wrapper.current.clientWidth);
    }
    window.addEventListener('resize', onResize);
    onResize();
    // console.log(wrapper.current.clientWidth)  ;
    return () => window.removeEventListener('resize', onResize) ;
}, [wrapper]) ;

  const copyPast =(wallet)=>{
    toast.success('Copied to clipboard');
    copy2Clipboard(wallet)
  }

  const { user_email, wallet } = useAuth();
  return (
    <div className='h-full'>
      <div className={cn('flex h-full	', styles.container)} ref = {wrapper}>
        <div className={cn('flex flex-row mt-[145px]  xsmax:mt-[70px]  justify-center grow bg-[#032C32] border-t-[2px] border-[#43F3FF] ' ,title == 'Goldy Pass' && width < 426 && 'h-[110%]' )}>
          <div className={cn('-mt-[102px] h-[671px]  flex-col justify-center items-center hidden lgmin:flex')}>
            <div className='text-[30px] text-white mb-[15px] font-bold'>
              { title }
            </div>
            
            <div className='w-[297px] h-[611px] bg-[#0A414E] rounded-[21px] px-[24px]'>
              <div className='flex items-center justify-center w-[248px] h-[207px] bg-[#032C32] rounded-[20px] mt-[29px]'>
                {
                  !isLoading ?
                    <Image alt='' src='/images/charAvartar/c1.png' width='171px' height='157px' />
                    :
                    <Image alt='' src='/images/charAvartar/c1.png' width='171px' height='157px' />
                    // <BounceLoader color='rgb(10 65 78)' loading={isLoading} size='100' />
                }

              </div>
              <div className='text-[#43F3FF] mt-6 ml-[10px]'>
                { user_email ? user_email : 'No email' }
              </div>
              <div className='flex items-center justify-between text-[#DBDBDB] text-[11px] ml-[10px] mt-1'>
                { truncateAddress(wallet) }
                  <Image alt='' width='11px' height='13px' className='cursor-pointer'
                    src='/images/copy.png'
                    onClick={() =>copyPast(wallet) }
                  />
              </div>
              <div className='flex flex-col mt-[45px]'>
                {
                  dropdown_menu.map((menu, key) => (
                    <Link href={menu.path} key={key}>
                      <button className={cn('text-white text-[18px] bg-[#052D37] rounded-[4px] h-[39px] mb-[7px]', router.pathname.includes(menu.path) && 'bg-[#176578]')}
                      >
                        { menu.title }
                      </button>
                      </Link>
                  ))
                }
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-[26px] xsmax:ml-[0px]  lgmax:w-[95%] lgmin:min-w-[700px] lgmin:max-w-[700px] xlmin:min-w-[950px]'>
            <div className='-mt-[50px] mb-[20px] ml-[30px] text-[white]  text-[20px] xsmin:hidden'>
              {title}
            </div>
            <div className={cn('flex wrap lgmin:hidden' , width > 600 && 'px-[20%]')}>
              <div className='flex mt-[20px] bg-[#025962] rounded-lg m-[10px] p-[4px] pl-[30px] pr-[30px] w-full'>
                  <div className='flex-initial w-30 ...'>
                    <Image alt='' src='/images/charAvartar/c1.png' width='60px' height='60px' />
                  </div>
                  <div className='-mt-[15px] flex-initial w-60 ...'>
                    <div className='text-[#43F3FF] text-[20px]  mt-4 ml-[10px]'>
                      { user_email ? user_email : 'No email' }
                      {/* User */}
                    </div>
                    <div className=' flex text-[12px] items-center justify-between text-[#DBDBDB] ml-[10px] mt-1'>
                      {/* { wallet ? wallet : 'No email' } */}
                      { truncateAddress(wallet) }
                        
                        <Image alt='' width='11px' height='13px' className='cursor-pointer'
                          src='/images/copy.png'
                          onClick={() =>copyPast(wallet) }
                    />
                    </div>
                  </div>
              </div>
              
            </div>
            <div className={cn('lgmin:-mt-[40px] flex flex-row h-[39px] mdmax:h-[30px] justify-around	  space-x-[20px] w-[100%]    border-b-[1px] border-[#43F3FF]', width <= 375 && 'px-[0px]' , submenu && submenu.length == 0 && 'hidden')}>
              {
                submenu.map((menu, key) => (
                  <div key={key} 
                    className={cn('text-[#43F3FF] text-[15px] mdmax:text-[12px] ssmax:text-[10px]  h-[38px] mdmax:h-[30px] min-w-[116px] lgmax:min-w-[30px] flex justify-center', router.asPath == menu.path && 'border-b-[5px] border-[#43F3FF]', menu.path == router.asPath.split("?")[0] && 'border-b-[5px] border-[#43F3FF]')}>
                    <Link href={menu.path}>
                      { menu.title }
                    </Link>
                  </div>
                ))
              }
            </div>
            <div className='min-h-[683px] lgmax:flex lgmax:justify-center '>
              { 
                children
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AccountLayout;