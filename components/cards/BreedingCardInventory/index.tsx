import cn from 'classnames';
import styles from './index.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router' ;
import StarLevel from 'components/StarLevel' ;

const BreedingCardInventory =({ id, image, stone, stone_image, breed }) =>{

    return (
        <div key={id} className={cn('relative flex flex-col w-[160px] h-[215px] mx-[7px]', styles.card)} >
            <div className={cn('relative mx-auto flex items-center justify-center mt-3 text-[11px]', styles.toppanel)} style={{color: '#71FFCF'}}>
                Goldy#{id}
                <div className={styles.stone}>
                    <Image width='13' height='13' alt='' src={stone_image} />
                    <div className='absolute text-white text-[8px] -bottom-[7px]'>
                        { stone }
                    </div>
                </div>
            </div>
            <div className='mx-auto mt-1 '>
                <Image width='102' height='100' alt='' src={image} />
            </div>
            <div className='ml-2 w-[145px] h-[6px] -mt-[10px] mb-[5px] relative'>
                <Image 
                    layout='fill' alt='' 
                    src='/images/connectDivider.png' 
                />
            </div>
            <div className='flex justify-between px-[12px]'>
                <div className='text-[8px] text-white mt-0'>Grade:</div>
                <div className='text-[3px]  '>
                    <StarLevel star_num={breed} star_size='12' />
                </div>
            </div>
            <div className='flex items-center justify-between px-[12px] text-[8px]  text-white mt-[0px]'>
                <div>Breed Count:</div>
                <div> {breed}</div>
            </div>
            <div className={cn('flex items-center justify-center pl-[12px] pr-[12px] text-white', styles.price)}>
                <div className='text-[8px] font-bold '>BREEDING</div>
                
            </div>
        </div>
    )
}

export default BreedingCardInventory ;