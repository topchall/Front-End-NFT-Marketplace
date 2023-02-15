import cn from "classnames"
import { BeatLoader, BarLoader } from 'react-spinners'
import Image from 'next/image' ;
import {copy2Clipboard } from 'utils';
import Link from 'next/link'
import { toast } from 'react-toastify';


export default function Incentive({isOpen , onClose,incentiveLink=''}) {
    
    const copyPast =(wallet)=>{
        toast.success('Copied to clipboard');
        copy2Clipboard(wallet)
      }
    return (
        <div className="relative z-[3000]">
            <div className={cn('fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[30]', !isOpen && 'hidden')}>
            
                <div className='w-[480px] h-[300px] xsmax:w-[300px] xsmax:h-[250px] border border-[#025962] rounded-[16px] bg-[#02222A] text-white text-[25px] xsmax:text-[16px]'>
                    <div className='h-[70px] xsmax:h-[45px]  flex justify-between items-center mt-[25px] xsmax:mt-[10px] xsmax:pl-[90px]  pl-[150px] pr-[38px]  '>
                        INCENTIVE LINK
                        <Link href="/account/inventory/goldypot">
                        
                            <button className='text-[#025962] text-[25px] xsmax:text-[18px] font-euro font-bold -mt-[50px] xsmax:-mt-[25px]'
                                onClick={onClose}
                            >
                                X
                            </button>
                        </Link>
                    </div>
                    <div className="flex justify-center flex-col items-center w-full ">
                        <div className={cn("relative bg-[#141414] border border-[#44B8D2] rounded-[10px] xsmax:rounded-[7px] w-[400px] xsmax:w-[270px] h-[58px] xsmax:h-[40px] text-[16px] xsmax:text-[11px] flex items-center  justify-center" , !incentiveLink && 'text-[#555555]')}>
                            {incentiveLink ? incentiveLink : "there is no Incentive link" }
                            <div className="absolute right-[0px] top-4 pr-[15px] xsmax:hidden">
                                <Image alt='' width='15px' height='20px' className='cursor-pointer  '
                                    src='/images/copy.png'
                                    onClick={() => copyPast(incentiveLink)}
                                />
                            </div>
                            <div className="absolute right-[0px] top-3 pr-[5px] block xsmin:hidden">
                                <Image alt='' width='10px' height='15px' className='cursor-pointer  '
                                    src='/images/copy.png'
                                    onClick={() => copyPast(incentiveLink)}
                                />
                            </div>
                        </div>
                        
                        <div className='pt-[20px] xsmax:pt-[15px]   px-[100px]  xsmax:px-[40px]  text-[15px]  xsmax:text-[12px] text-[#BEBEBE] '>
                                    Share this link to get a 10% incentive for
                        </div>
                        <div className='px-[100px]  xsmax:px-[40px]  text-[15px]  xsmax:text-[12px] text-[#BEBEBE] '>
                                    other members purchases.  
                        </div>
                        <div className="flex flex-wrap pt-[17px]  xsmin:pt-[5px]   ">
                            <div className=' cursor-pointer xsmax:hidden px-[5px]'>
                                <a href={``} target="_blank" rel='noreferrer'>
                                    <Image src='/images/incentive/discord.svg' className=' px-[5px] z-40' width='25' height='25' alt='' />
                                </a>
                            </div>
                            <div className=' cursor-pointer xsmax:hidden px-[5px]'>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${incentiveLink}`} target="_blank" rel='noreferrer'>
                                    <Image src='/images/incentive/facebook.svg' className=' px-[5px] z-40' width='25' height='25' alt='' />
                                </a>
                            </div>
                            <div className=' cursor-pointer xsmax:hidden px-[5px]'>
                                <a href={`https://twitter.com/share/?url=${incentiveLink}`} target="_blank" rel='noreferrer'>
                                    <Image src='/images/incentive/twitter.svg' className=' px-[5px] z-40' width='25' height='25' alt='' />
                                </a>
                            </div>
                            <div className=' cursor-pointer xsmax:hidden px-[5px]'>
                                <a href={`https://telegram.me/share/?url=${incentiveLink}`} target="_blank" rel='noreferrer'>
                                    <Image src='/images/incentive/telegram.svg' className=' px-[5px] z-40' width='25' height='25' alt='' />
                                </a>
                            </div>
                            <div className=' cursor-pointer xsmax:hidden px-[5px]'>
                                <a href="" target="_blank" rel='noreferrer'>
                                    <Image src='/images/incentive/kakao.svg' className=' px-[5px] z-40' width='25' height='25' alt='' />
                                </a>
                            </div>


                    {/*  */}

                            <div className=' cursor-pointer hidden xsmax:block px-[5px]'>
                                <a href="" target="_blank" rel='noreferrer'>
                                    <Image src='/images/incentive/discord.svg' className=' px-[5px] z-40' width='40' height='40' alt='' />
                                </a>
                            </div>
                            <div className=' cursor-pointer hidden xsmax:block px-[5px]'>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${incentiveLink}`} target="_blank" rel='noreferrer'>
                                    <Image src='/images/incentive/facebook.svg' className=' px-[5px] z-40' width='40' height='40' alt='' />
                                </a>
                            </div>
                            <div className=' cursor-pointer hidden xsmax:block px-[5px]'>
                                <a href={`https://telegram.me/share/?url=${incentiveLink}`} target="_blank" rel='noreferrer'>
                                    <Image src='/images/incentive/telegram.svg' className=' px-[5px] z-40' width='40' height='40' alt='' />
                                </a>
                            </div>
                            <div className=' cursor-pointer hidden xsmax:block px-[5px]'>
                                <a href={`https://twitter.com/share/?url=${incentiveLink}`} target="_blank" rel='noreferrer'>
                                    <Image src='/images/incentive/twitter.svg' className=' px-[5px] z-40' width='40' height='40' alt='' />
                                </a>
                            </div>
                            <div className=' cursor-pointer hidden xsmax:block px-[5px]'>
                                <a href={``} target="_blank" rel='noreferrer'>
                                    <Image src='/images/incentive/kakao.svg' className=' px-[5px] z-40' width='40' height='40' alt='' />
                                </a>
                            </div>
                        </div>
                        <div  className='mt-[0px] px-[20px] xsmax:pt-[2px] text-[#43F3FF] sp640min:px-[85px] xsmax:py-[0px] pt-[5px] pb-[0px] text-[15px] xsmax:text-[12px] '>
                            <Link href="/account/inventory/goldypot">
                                OPEN INVENTORY
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}