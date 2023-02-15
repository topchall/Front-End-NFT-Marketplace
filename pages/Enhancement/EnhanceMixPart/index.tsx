import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import EnhanceError from 'components/popups/EnhanceError' ;


const EnhanceMixPart =()=>{
    
    const [gradeFlg , setGradeFlg] = useState(2) ;
    const [errorAlert , setErrorAlert] = useState(false) ;

    const closeAlert =()=>{
        setErrorAlert(false) ;
    }
    return(
        <div className={cn(' flex justify-center' , styles.bg)}>
            <div className='w-screen pb-[100px] '>
                <div className=' text-[#FFFFFF] text-[41px] flex justify-center pt-[64px] pb-[7px] '>
                    Goldy Enhancement
                </div>
                <div className='text-[#44B8D2] text-[11px] flex justify-center text-center	mx-[22%] '>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                </div>
                <div className=' pt-[77px] '>
                    <div className={cn('flex justify-center items-center' , gradeFlg !=0 && 'pl-[57px] ')}>
                        <div className={cn('flex flex-cols items-center justify-center', gradeFlg != 0 && 'hidden' )}>
                            <div className={cn('flex items-center' )}>
                                <div className='relative w-[146px] h-[194px] rounded-[12px] bg-[#00252A] border-[#44B8D2] active:border-[#0CFF2C] border-[1px] flex items-center justify-center '>
                                    <div className={cn( 'flex items-center justify-center ' , styles.grade_desktop_goldy_0)}>
                                        <div className='text-center max-w-[60px]'>
                                            <div className=' text-[#43F3FF] text-[10px] leading-3	'>SELECT</div>
                                            <div className=' text-[#43F3FF] text-[10px] leading-3	'>SAME GRADE GOLDY</div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' border-[1px] border-[#44B8D2] w-[49px] h-[1px] '></div>
                            </div>
                        </div>
                        <div className={cn('flex flex-col items-center justify-center', gradeFlg != 1 && 'hidden' )}>
                            <div className={cn('flex items-center pb-[9px]' )}>
                                <div className='relative w-[99px] h-[132px] rounded-[12px] bg-[#00252A] border-[#44B8D2] active:border-[#0CFF2C] border-[1px] flex items-center justify-center '>
                                    <div className={cn( 'flex items-center justify-center ' , styles.grade_desktop_goldy_1)}>
                                        <div className='text-center max-w-[48px]'>
                                            <div className=' text-[#43F3FF] text-[8px] leading-[8px]	'>SELECT</div>
                                            <div className=' text-[#43F3FF] text-[8px] leading-[8px]	'>SAME GRADE GOLDY</div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' border-[1px] border-[#44B8D2] w-[49px] h-[1px] '></div>
                            </div>
                            <div className={cn('flex items-center' )}>
                                <div className='relative w-[99px] h-[132px] rounded-[12px] bg-[#00252A] border-[#44B8D2] active:border-[#0CFF2C] border-[1px] flex items-center justify-center '>
                                    <div className={cn( 'flex items-center justify-center ' , styles.grade_desktop_goldy_1)}>
                                        <div className='text-center max-w-[48px]'>
                                            <div className=' text-[#43F3FF] text-[8px] leading-[8px] '>SELECT</div>
                                            <div className=' text-[#43F3FF] text-[8px] leading-[8px] '>SAME GRADE GOLDY</div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' border-[1px] border-[#44B8D2] w-[49px] h-[1px] '></div>
                            </div>
                        </div>
                        <div className={cn('flex flex-col items-center justify-center', gradeFlg != 2 && 'hidden' )}>
                            <div className={cn('flex items-center pb-[9px]' )}>
                                <div className='relative w-[99px] h-[132px] rounded-[12px] bg-[#00252A] border-[#44B8D2] active:border-[#0CFF2C] border-[1px] flex items-center justify-center '>
                                    <div className={cn( 'flex items-center justify-center ' , styles.grade_desktop_goldy_1)}>
                                        <div className='text-center max-w-[48px]'>
                                            <div className=' text-[#43F3FF] text-[8px] leading-[8px]	'>SELECT</div>
                                            <div className=' text-[#43F3FF] text-[8px] leading-[8px]	'>SAME GRADE GOLDY</div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' border-[1px] border-[#44B8D2] w-[49px] h-[1px] '></div>
                            </div>
                            <div className={cn('flex items-center pb-[9px]' )}>
                                <div className='relative w-[99px] h-[132px] rounded-[12px] bg-[#00252A] border-[#44B8D2] active:border-[#0CFF2C] border-[1px] flex items-center justify-center '>
                                    <div className={cn( 'flex items-center justify-center ' , styles.grade_desktop_goldy_1)}>
                                        <div className='text-center max-w-[48px]'>
                                            <div className=' text-[#43F3FF] text-[8px] leading-[8px] '>SELECT</div>
                                            <div className=' text-[#43F3FF] text-[8px] leading-[8px] '>SAME GRADE GOLDY</div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' border-[1px] border-[#44B8D2] w-[49px] h-[1px] '></div>
                            </div>
                            <div className={cn('flex items-center' )}>
                                <div className='relative w-[99px] h-[132px] rounded-[12px] bg-[#00252A] border-[#44B8D2] active:border-[#0CFF2C] border-[1px] flex items-center justify-center '>
                                    <div className={cn( 'flex items-center justify-center ' , styles.grade_desktop_goldy_1)}>
                                        <div className='text-center max-w-[48px]'>
                                            <div className=' text-[#43F3FF] text-[8px] leading-[8px] '>SELECT</div>
                                            <div className=' text-[#43F3FF] text-[8px] leading-[8px] '>SAME GRADE GOLDY</div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' border-[1px] border-[#44B8D2] w-[49px] h-[1px] '></div>
                            </div>
                        </div>
                        
                        <div className=''>
                            <div className='relative w-[289px] h-[421px] rounded-[21px] bg-[#00252A] border-[#44B8D2] active:border-[#0CFF2C] border-[1px] flex items-center justify-center '>
                                <div className={cn( 'flex items-center justify-center ' , styles.main_desktop_goldy)}>
                                    <div className='text-center'>
                                        <div className=' text-[#43F3FF] text-[14px] '>SELECT</div>
                                        <div className=' text-[#43F3FF] text-[10px] '>GOLDY TO ENHANCE</div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center absolute bottom-[14px] left-[50%] -translate-x-1/2 w-[258px] h-[32px] rounded-[14px] bg-[#011B1E] border-[1px] border-[#44B8D2] '>
                                    <div className='flex items-center pr-[6px] text-[12px] text-[white] '>Probability</div>
                                    <div className='border-[1px] border-[#083B43] bg-[#000000] rounded-[8px] w-[169px] h-[22px] '></div>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                        <div className={cn('flex flex-cols items-center justify-center' )}>
                            <div className={cn('flex items-center' )}>
                                <div className=' border-[1px] border-[#44B8D2] w-[49px] h-[1px] '></div>
                                <div className='relative w-[146px] h-[194px] rounded-[12px] bg-[#00252A] border-[#44B8D2] active:border-[#0CFF2C] border-[1px] flex items-center justify-center '>
                                    <div className={cn( 'flex items-center justify-center ' , styles.grade_desktop_goldy_0)}>
                                        <div className='text-center max-w-[60px]'>
                                            <div className=' text-[#43F3FF] text-[10px] leading-3	'>SELECT</div>
                                            <div className=' text-[#43F3FF] text-[10px] leading-3	'>GOLDY PASS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className={cn('flex flex-col justify-center items-center pr-[62px] ' )}>
                            <div className=' border-[1px] border-[#44B8D2] w-[1px] h-[26px] '></div>
                            <div className='relative w-[146px] h-[194px] rounded-[12px] bg-[#00252A] border-[#44B8D2] active:border-[#0CFF2C] border-[1px] flex items-center justify-center '>
                                <div className={cn( 'flex items-center justify-center ' , styles.supplement_desktop)}></div>
                                <div className='absolute bottom-[8px] left-[50%] -translate-x-1/2 text-center max-w-[60px]'>
                                    <div className=' text-[#43F3FF] text-[10px] leading-3	'>SELECT</div>
                                    <div className=' text-[#43F3FF] text-[10px] leading-3	'>SUPPLEMENTS</div>
                                </div>
                            </div>
                        </div>
                        <div className={cn('flex flex-col justify-center items-center' )}>
                            <div className=' border-[1px] border-[#44B8D2] w-[1px] h-[26px] '></div>
                            <div className='relative w-[146px] h-[194px] rounded-[12px] bg-[#00252A] border-[#44B8D2] active:border-[#0CFF2C] border-[1px] flex items-center justify-center '>
                                <div className={cn( 'flex items-center justify-center ' , styles.pet_desktop)}></div>
                                <div className='absolute bottom-[8px] left-[50%] -translate-x-1/2 text-center max-w-[60px]'>
                                    <div className=' text-[#43F3FF] text-[10px] leading-3	'>SELECT</div>
                                    <div className=' text-[#43F3FF] text-[10px] leading-3	'>GOLDY PET</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EnhanceError onClose={closeAlert} visible={errorAlert} />
            {
                errorAlert && <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            }
        </div>
    )
}

export default EnhanceMixPart ;