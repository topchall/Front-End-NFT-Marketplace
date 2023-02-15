import Image from "next/image"

export default function WalletErrorPopup({ onClose, visible, msg = '' }) {
    if(!visible) return (<></>);
    return (
        <div className="z-[3000]">
            <div className='fixed w-screen h-screen left-0 top-0 bg-transparent'
                onClick={onClose}
            ></div>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-[345px] bg-white text-[black] rounded-[10px] px-[24px] pb-[34px]'>
                <div className='flex items-center justify-between h-[78px] w-full text-[20px]'>
                    Wallet Error
                    <button onClick={onClose}>x</button>
                </div>
                <div className='flex flex-col items-center justify-between text-[20px] pt-[10px] pb-[30px]'>
                    <Image src='/images/components/alert.svg' width='64' height='64' />
                    <div className='pt-[25px] text-center pb-[30px]'>
                        Please install wallet!  
                        To install wallet , please click below url...

                    </div>
                    <div className="text-center " >
                        {/* <a className='text-[red] text-[13px] font-bold' href={msg} target="_blank" >
                            {msg}
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}