import React, { useEffect, useState,useRef } from "react";
import Image from "next/image";
import Link from 'next/link';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { useAuth } from "store/hook";
import DropdownMenu from './DropdownMenu';
import { nav_menu } from "./data";
import { copy2Clipboard, truncateAddressHeader } from 'utils';

const Header = ({}) => {
    const router = useRouter();
    const { logined, user_email ,wallet} = useAuth();
    const [dropdownOpened, setDropdownOpened] = useState(false);
    const [menuOpened, openMenu] = useState(true);
    
    const catMenu = useRef(null) ;

    const closeOpenMenu =(e)=>{
        if(catMenu.current && !catMenu.current.contains(e.target) || !menuOpened)
        
        openMenu(true);
    }

    const userEmailEd=(e) =>{
        if(e.length > 15) return e.slice(0,3)+'...'+e.slice(e.length-6 , e.length);
        return e ;
    }

    useEffect(()=>{
        document.addEventListener("mousedown", closeOpenMenu );
    },[catMenu]) ;

    return (
    <header className={cn('xsmax:h-[48px]',styles.header)}>
        <nav className="relative flex  text-center	top-nav px-1  h-full items-center pl-[29px]">
        {/* <span className=" inset-x-0 pl-4 visible xl:invisible "  ><Image alt='' src='/images/logo.png' width='118' height='37'/></span>  */}
        <div className="absolute  top-[10px] xsmin:top-[17px] block xl:hidden right-[50%] translate-x-1/2 ">
            <span className=""  ><Image alt='' src='/images/logo.png' width='94px' height='29px'/></span> 
        </div>
        <div className="absolute top-[15px] hidden xl:block x-0 pl-4  ">
            <span className=""  ><Image alt='' src='/images/logo.png' width='118px' height='37px'/></span> 
        </div>
        <div className="hidden  xl:flex items-center justify-between pl-[220px]">
            {
                nav_menu.map(item => (
                <Link href={item.path} key={item.path} >
                    <button className={cn('outline-none px-3 w-[144px] h-[67px] text-[18px] pb-[8px] font-euro-normal 2xlmax:w-[140px] xlmax:w-[144px] ' ,item.path == router.pathname ? styles.active_menu : 'pt-3')}>
                        { item.text }
                    </button>
                </Link>
                ))
            }
        </div>
        <div className='flex justify-end grow px-0 pr-[20px] xl:px-8  ssmax:pr-[0px]'>
            <div className={cn('flex pr-2 cursor-pointer shrink-0', !logined && 'hidden')}
                onClick={() => setDropdownOpened(true)}
            >
                <div className='lgmax:hidden'>
                    <Image  alt='' src='/images/charAvartar/c1.png' width='45' height='40'/>
                </div>
                {/* <Image className='xsmin:hidden' alt='' src='/images/charAvartar/c1.png' width='45' height='40'/> */}
                <div className='flex items-center px-3 xsmax:pr-[0] text-[12px] xsmax:text-[11px]'>
                    { user_email? userEmailEd(user_email) : truncateAddressHeader(wallet)}
                    
                    <div className='relative ml-[11px] -mt-[3px]'>
                        <Image alt='' src='/images/arrow-down.png' width='9' height='6'/>
                    </div>
                </div>
            </div>
            <Link href='/auth/wallet'>
                <button className={cn('text-[16px] cursor-pointer w-[213px] h-[61px]', logined ? 'hidden': 'hidden xl:block', styles.connect_wallet)}>
                    Connect Wallet
                </button>
            </Link>
            
            <Link href='/auth/wallet'>
                <button className={cn('text-[14px] cursor-pointer  xsmax:text-[13px] w-[120px] h-[40px]  ', logined ? 'hidden' : 'block xl:hidden')}>
                    Connect Wallet
                </button>
            </Link>
            <button className='fixed block xl:hidden left-5 top-[24px] xsmax:top-[13px] '
                onClick={() => openMenu(!menuOpened)}
            >
                <Image src='/images/components/lines.svg' width="20" height="20" />
            </button>
            <div ref={catMenu} className={cn('block xl:hidden fixed w-[220px] h-screen left-0 top-[0px] bg-[#08222a] ease-in-out duration-300' , menuOpened ? "-translate-x-full" : "translate-x-0")}>
                <div className='flex flex-col items-center mt-[35px]'>
                <Image src='/images/logo_header.png' width='162' height='67' className={cn(styles.headerimgLogo)}/>

                <div className="mt-[20px]">
                    {
                        nav_menu.map(item => (
                        <Link href={item.path} key={item.path}>
                            <button className={cn('outline-none px-3 w-full h-[40px] text-[17px] font-euro-normal', item.path == router.pathname ? 'bg-[#0C4E53]' : 'pt-2')}
                                onClick={(e) => closeOpenMenu(e)}
                            >
                                { item.text }
                            </button>
                        </Link>
                        ))
                    }
                </div>

                </div>
            </div>
        </div>
        </nav>
        <DropdownMenu opened={dropdownOpened} onClose={() => setDropdownOpened(false)} />
    </header>
  );
}

export default Header