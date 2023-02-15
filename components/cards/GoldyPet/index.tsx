import cn from 'classnames';
import styles from './index.module.scss';
import Image from 'next/image';
import StarLevel from 'components/StarLevel';
import { useRouter } from 'next/router' ;

const GoldyPet = ({ id, image,  price }) => {
    const router = useRouter();

    const ToBuyPet =()=>{
        router.replace('/marketplace/MarketPlaceBuyDetailPet') ;
    }

    return (
        <div key={id} className={cn('relative flex flex-col w-[266px] h-[357px] mx-[7px]', styles.card)} onClick={ToBuyPet} >
            <div className={cn('relative mx-auto flex items-center justify-center mt-6 text-[13px]', styles.toppanel)} style={{color: '#71FFCF'}}>
                Goldy#{id}
                {/* <div className={styles.stone}>
                    <Image width='21' height='21' alt='' src={stone_image} />
                    <div className='absolute text-white text-[10px] -bottom-[12px]'>
                        { stone }
                    </div>
                </div> */}
            </div>
            <div className='mx-auto mt-[6px] mb-[23px]'>
                <Image width='180' height='180' alt='' src={image} />
            </div>
            
            <div className={cn('flex items-center justify-between pl-[22px] pr-[20px]  text-white', styles.price)}>
                <div className='text-[14px]'>Price:</div>
                <div className='text-[17px]'>
                    {price} BUSD
                </div>
            </div>
        </div>
    )
}

export default GoldyPet;