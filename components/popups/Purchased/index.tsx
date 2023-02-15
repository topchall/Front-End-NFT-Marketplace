import cn from "classnames"
import { BeatLoader, BarLoader } from 'react-spinners'


export default function Purchased({isOpen , onClose}) {
    return (
        <div className={cn('absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 z-[30]', !isOpen && 'hidden')}>
            <div className='w-[480px] xsmax:w-[300px] border border-[#025962] rounded-[16px] bg-[#02222A] text-white text-[21px] xsmax:text-[16px]'>
                <div className='h-[70px] xsmax:h-[50px] flex justify-between items-center pl-[40px] pr-[38px] border-b border-[#025962]'>
                GOLDY PASS PURCHASED
                    <button className='text-[#025962] text-[18px] font-euro font-bold'
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>
                <div className='px-[20px] sp640min:px-[85px] xsmax:py-[10px] pt-[20px] pb-[20px] text-[14px] xsmax:text-[12px] '>
                    You can view your activity from History section of the Profile page after the process has finished.
                   
                </div>
           
                <div className='pb-[36px] pt-[15px] xsmax:pb-[20px] xsmax:pt-[10px] px-[44px]  flex justify-center'>
                    <button className='bg-[#44B8D2] w-[300px] h-[53px] xsmax:w-[150px] xsmax:h-[35px] rounded-[10px] text-[17px] xsmax:text-[13px]'
                        onClick={onClose}
                    >
                        I UNDERSTAND
                    </button>
                   
                </div>
            </div>
        </div>
    )
}