import { useRouter } from 'next/router';
import AccountLayout from 'components/layout/Account';
import Image from 'next/image';
import TokenTooltip from 'components/tooltips/TokenTooltip';
import { useState ,useEffect ,useRef} from 'react';
import cn from 'classnames';

const Info = ({className, tooltipClassName, children}) => {

  const [isVisible, setVisible] = useState(false);
  return (
    <div className={cn('relative cursor-pointer', className)}
      onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <Image src='/images/account/wallet/info.svg' width='13' height='13' alt='' />
      <TokenTooltip isVisible={isVisible} className={cn('left-[20px] top-0', tooltipClassName)}>
        { children }
      </TokenTooltip>
    </div>
  );
}

export default function Wallet() {
  
  const router = useRouter();
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

  return (
    <AccountLayout title='Wallet' submenu={[]} >
      <div ref={wrapper} className={cn('lgmin:flex lgmin:justify-start ' , width < 1024 && width >=425 && 'grid  justify-items-center' )}>
        
        <div className='pl-[10px] xsmax:pl-[0px]'>
          <div className='text-white text-[15px] mt-[36px] flex items-center xsmax:pl-[25px]'>
            <div className='ml-[10px] mr-[16px]'>
              <Image src='/images/account/wallet/wallet.svg' width='30' height='30' alt='' />
            </div>
            <span className='xsmax:text-[13px] text-[15px]'>Blockchain Wallet</span>
            <Info className='ml-2' tooltipClassName='w-[205px]'>
              God token is a token that is listed on the exchange and can be deposited and withdrawn
            </Info>
          </div>
          <div className={cn('flex flex-col w-[434px] xsmax:w-[350px]  ssmax:w-[350px] xsmax:ml-[5px] mt-[14px] pb-[19px] bg-[#051e24] rounded-[15px]', width <470 && width> 425 && 'max-w-[370px]' , width <411 && 'w-[350px]')}>
            <div className='text-white text-[15px] pl-[19px] py-[12px] border-[#0C3A46] border-b'>
            <span className='xsmax:text-[13px] text-[15px]'>Total Balance</span>
            </div>
            <div className='flex pt-[6px]'>
              <div className='pt-[10px] pl-[15px] pr-[6px]'>
                <Image src='/images/account/wallet/god-token.png' width='21' height='21' alt=''/>
              </div>
              <div className='text-[#43F3FF] text-[20px]'>
                <span className='text-white text-[25px] xsmax:text-[22px]'>13,552.9724</span> <span className='text-[25px] xsmax:text-[22px]'>GOD Token</span>
                <div className='text-[#43A9C1] text-[15px] xsmax:text-[13px] '>0.35 USD</div>
              </div>
            </div>
            <button className='outline-none grow h-[40px] mt-[12px] mx-[16px] bg-[#43C5FF] text-[#060606] text-[14px] xsmax:text-[12px]  font-segoe-bold rounded-[9px]'>
              CLAIM
            </button>
          </div>
          <div className='text-white text-[15px] mt-[36px] flex items-center xsmax:pl-[25px]'>
            <div className='ml-[10px] mr-[16px]'>
              <Image src='/images/account/wallet/crystal.svg' width='30' height='30' alt='' />
            </div>
            <span className='xsmax:text-[13px] text-[15px]'>Ingame Currency</span>
            <Info className='ml-2' tooltipClassName='w-[260px]'>
                G-token is the in-game currency. When conditions are met in a certain percentage it can be exchanged for GOD tokens.
            </Info>
          </div>
          <div className={cn('flex flex-col w-[434px] xsmax:w-[350px]  ssmax:w-[350px] xsmax:ml-[5px] mt-[14px] pb-[19px] bg-[#051e24] rounded-[15px]', width <470 && width> 425 && 'max-w-[370px]', width <411 && 'w-[350px]')}>
          {/* <div className='flex flex-col w-[434px] xsmax:w-[390px]  ssmax:w-[350px] xsmax:ml-[5px] mt-[14px] pb-[19px] bg-[#051e24] rounded-[15px]'> */}
            <div className='flex items-center text-white text-[15px] pl-[16px] py-[12px] border-[#0C3A46] border-b'>
              <div className='flex pr-[6px]'>
                <Image src='/images/account/wallet/gtoken.png' width='21' height='16' alt=''/>
              </div>
              <span className='xsmax:text-[13px] text-[15px]'>G Token</span>
            </div>
            <div className='flex pt-[6px]'>
              <div className='pl-[23px] text-[#43F3FF] text-[20px] '>
                <span className='text-white text-[25px] xsmax:text-[22px]'>13,552.9724</span> <span className='text-[25px] xsmax:text-[22px]'>G Token</span>
              </div>
            </div>
            <button className='outline-none grow h-[40px] mt-[12px] mx-[16px] bg-[#FFD343] text-[#060606] text-[14px] xsmax:text-[12px] font-segoe-bold rounded-[9px]'>
              CONVERT
            </button>
          </div>
        </div>

      </div>
    </AccountLayout>
  )
}
