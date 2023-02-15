import cn from 'classnames';
import styles from './index.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router' ;
import StarLevel from 'components/StarLevel' ;


const SupplymentCardInventory =({ id, image, rTime })=>{
    return(
        <div key={id} className={cn('relative flex flex-col w-[160px] h-[215px] mx-[7px]', styles.card)} >
            <div className={cn('relative mx-auto flex items-center justify-center mt-3 text-[11px]', styles.toppanel)} style={{color: '#71FFCF'}}>
                Goldy#{id}
                
            </div>
            <div className='mx-auto mt-3 '>
                <Image width='68' height='122' alt='' src={image} />
            </div>
            
            <div className='flex justify-center px-[12px]  '>
                <div className='text-[9px] text-[#44B8D2] mt-0'>Hatching in:</div>
                
            </div>
            
            <div className={cn('flex items-center justify-center pl-[12px] pr-[12px] text-white')}>
                <div className='text-[12px] text-white font-bold '>{rTime}</div>
                
            </div>
        </div>
    )
}

export default SupplymentCardInventory ;