import cn from 'classnames';
import styles from './index.module.scss';
import Image from 'next/image';
import StarLevel from 'components/StarLevel';
import { useRouter } from 'next/router';


const EnhanceGoldyPotCard = ({ id, image="/images/charAvartar/g8.png", stone="OXIL", stone_image="/images/goldypass/OXIL.png", breed, grade }) => {
    const router = useRouter();

    const ToBuyPass =()=>{
        router.replace('/marketplace/MarketPlaceBuyDetailPass') ;
    }

    return (
        <div key={id} className={cn('relative flex flex-col w-[144px] h-[194px] mx-[2px]', styles.card)} onClick={ToBuyPass}>
            <div className={cn('relative mx-auto flex items-center justify-center mt-3 text-[10px]', styles.toppanel)} style={{color: '#71FFCF'}}>
                Goldy#{id}
            </div>
            <div className='mx-auto mt-[25px]'>
                <Image width='98' height='92' alt='' src={image} />
            </div>

           
            
        </div>
    )
}

export default EnhanceGoldyPotCard ;