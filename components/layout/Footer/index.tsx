import styles from './index.module.scss'
import cn from 'classnames'
import ChatButton from 'components/buttons/ChatButton';
import Image from 'next/image';
import { useEffect, useState } from "react";

const Footer = ({visible}) => {

  useEffect(()=>{
    console.log(visible , 'visible') ;
  },[]) ;

  return (
    <div className={cn("flex flex-col sm:flex-row grow-0 justify-between z-10	pt-6 pb-[41px] px-[20px] 2xl:px-[207px] xl:px-[124px] sm:pr-[40px]", styles.Footer ,!visible && 'hidden')}>
      <div className='flex flex-col items-center sm:items-start grow'>
        <Image width='389' height='97' alt='' src='/images/logoFooter.png' />
        <div className='text-xs pt-2 sm:pl-[92px]'>
          @ 2022 Goldefy. All rights reserved. &nbsp;
          Privacy Policy | Terms &amp; Conditons
        </div>
      </div>
      <div className='flex flex-col items-center pt-[35px]'>
        <div className='flex space-x-[5px]'>
          <a href="https://discord.com/invite/4eVxZP4He4" target="_blank" rel='noreferrer'>
            <ChatButton imagePath='/images/discord.png' bgColor='#9076E9' text='Join Discord' />
          </a>
          <a href="https://t.me/GoldeFy_Announcement" target="_blank" rel='noreferrer'>
            <ChatButton imagePath='/images/telegram.png' bgColor='#478AFF' text='Join Telegram' />
          </a>
        </div>
        <div className='text-[12px] pt-[9px] pl-[2px] w-[344px] text-center sm:text-left' style={{color: '#AAAAAA'}}>
          Chat with the community, ask questions, get involved in 
          competitions and more!
        </div>
      </div>
    </div>
  );
}
export default Footer