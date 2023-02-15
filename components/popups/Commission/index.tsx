import cn from "classnames"
import { BeatLoader, BarLoader } from 'react-spinners'


export default function Commission({ balance, isOpen = true, onClose}) {
    return (
        <div className={cn('fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[30]', !isOpen && 'hidden')}>
            <div className='w-[480px] xsmax:w-[300px] border border-[#025962] rounded-[16px] bg-[#02222A] text-white text-[21px] xsmax:text-[18px]'>
                <div className='h-[70px] flex justify-between items-center pl-[40px] pr-[38px] border-b border-[#025962]'>
                    COMMISSION REBATE
                    <button className='text-[#025962] text-[18px] font-euro font-bold'
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>
                <div className='px-[50px] pt-[13px] pb-[20px] text-[16px] xsmax:text-[14px] text-[#586A7D]   border-[#025962]'>
                    You are about to claim your commission rebate.
                </div>
                <div className='w-[420px] h-[60px] xsmax:w-[280px] xsmax:text-[16px] mt-[0px] mx-auto flex flex-wrap items-center justify-between px-[20px] rounded-[10px] bg-[#01171D]'>
                    <div className="text-[12px] text-[white] w-[100px]">
                        REBATE AMOUNT EARNED
                    </div>
                    <div className="font-semibold text-[white] text-[20px]">
                        <span className="text-[#CE454F]">{balance}</span> USDT
                    </div>
                </div>
                {
                    balance >= 0 && balance < 100 &&
                    <div className='w-[420px] h-[70px] xsmax:w-[280px] xsmax:text-[16px] mt-[40px] mx-auto flex flex-col items-center justify-center rounded-[10px] bg-[#CE454F]'>
                        <span className='text-[15px] xsmax:pt-[5px]  xsmax:px-[20px] text-center'>
                            You must exceed 100 USDT to claim the balance.
                        </span>
                    </div>
                }
                <div className='pb-[36px] pt-[25px] flex justify-between px-[44px]'>
                    <button className='bg-[#01171D] w-[189px] h-[53px] xsmax:w-[100px] xsmax:h-[38px] rounded-[10px] text-[17px] xsmax:text-[13px]'
                        onClick={onClose}
                    >
                        CANCEL
                    </button>

                    <button className={cn('relative w-[189px] h-[53px] xsmax:w-[100px] xsmax:h-[38px] rounded-[10px] text-[17px] xsmax:text-[13px] text-black bg-[#949494]'
                        )}
                        
                        disabled={balance < 100 }
                    >
                        CLAIM
                        {/* {
                            buying &&
                            <BarLoader 
                                className='left-1/2 -translate-x-1/2 bottom-[4px]' 
                                cssOverride={{position:'absolute'}}
                                height={6}
                                width={80}
                            />
                        } */}
                    </button> 
                </div>
            </div>
        </div>
    )
}