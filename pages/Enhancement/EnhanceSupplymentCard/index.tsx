import cn from 'classnames';
import styles from './index.module.scss';
import Image from 'next/image';
import StarLevel from 'components/StarLevel';
import { useRouter } from 'next/router';


const EnhanceSupplymentCard = ({ id, image = "/images/charAvartar/g8.png", label = "OXIL", breed, sWidth , sHeight }) => {
    const router = useRouter();

    const ToBuyPass = () => {
        router.replace('/marketplace/MarketPlaceBuyDetailPass');
    }

    return (
        <div key={id} className={cn('relative flex flex-col w-[144px] h-[194px] mx-[2px]', styles.card)} onClick={ToBuyPass}>
            <div className={cn('relative mx-auto flex items-center justify-center mt-3 text-[10px]', styles.toppanel)} style={{ color: '#71FFCF' }}>
                Goldy#{id}
                <div className='absolute text-white text-[11px] left-[2px] bottom-[0px]'>
                    {label}
                </div>
            </div>
            <div className='mx-auto mt-[15px] mb-[10px] '>
                <Image width={sWidth} height={sHeight} alt='' src={image} />
            </div>
            <div className='text-[9px] text-[white] px-[16px] text-center '>
                {breed}
            </div>


        </div>
    )
}

export default EnhanceSupplymentCard;