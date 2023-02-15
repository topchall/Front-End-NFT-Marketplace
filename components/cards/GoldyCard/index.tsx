import cn from 'classnames';
import styles from './index.module.scss';
import Image from 'next/image';
import StarLevel from 'components/StarLevel';
import { useRouter } from 'next/router';


const GoldyCard = ({ id, image, stone, stone_image, breed, price }) => {
    const router = useRouter();

    const ToBuyPass =()=>{
        router.replace('/marketplace/MarketPlaceBuyDetailPass') ;
    }

    return (
        <div key={id} className={cn('relative flex flex-col w-[266px] h-[357px] mx-[7px]', styles.card)} onClick={ToBuyPass}>
            <div className={cn('relative mx-auto flex items-center justify-center mt-6 text-[13px]', styles.toppanel)} style={{color: '#71FFCF'}}>
                Goldy#{id}
                <div className={styles.stone}>
                    <Image width='21' height='21' alt='' src={stone_image} />
                    <div className='absolute text-white text-[10px] -bottom-[12px]'>
                        { stone }
                    </div>
                </div>
            </div>
            <div className='mx-auto mt-[6px]'>
                <Image width='150' height='150' alt='' src={image} />
            </div>
            <div className='mt-[3px] ml-4 w-[233px] h-[6px] relative'>
                <Image 
                    layout='fill' alt='' 
                    src='/images/connectDivider.png' 
                />
            </div>
            <div className='flex justify-between px-[22px]'>
                <div className='text-[14px] text-white mt-2'>Grade:</div>
                <div className='flex items-end'>
                    <StarLevel star_num={breed} />
                </div>
            </div>
            <div className='flex items-center justify-between px-[22px] text-[14px]  text-white mt-[5px]'>
                <div>Breed Count:</div>
                <div>{ breed }</div>
            </div>
            <div className={cn('flex items-center justify-between pl-[22px] pr-[20px] text-white', styles.price)}>
                <div className='text-[14px]'>Price:</div>
                <div className='text-[17px]'>
                    {price} BUSD
                </div>
            </div>
        </div>
    )
}

export default GoldyCard;