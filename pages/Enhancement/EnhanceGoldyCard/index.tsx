import cn from 'classnames';
import styles from './index.module.scss';
import Image from 'next/image';
import StarLevel from 'components/StarLevel';
import { useRouter } from 'next/router';


const EnhanceGoldyCard = ({ id, image="/images/charAvartar/g8.png", stone="OXIL", stone_image="/images/goldypass/OXIL.png", breed, grade }) => {
    const router = useRouter();

    const ToBuyPass =()=>{
        router.replace('/Enhancement/EnhanceBreed') ;
    }

    return (
        <div key={id} className={cn('relative flex flex-col w-[144px] h-[194px] mx-[2px]', styles.card)} onClick={ToBuyPass}>
            <div className={cn('relative mx-auto flex items-center justify-center mt-3 text-[10px]', styles.toppanel)} style={{color: '#71FFCF'}}>
                Goldy#{id}
                <div className={cn('flex items-center' , styles.stone)}>
                    <Image width='20' height='16' alt='' src={stone_image} />
                    <div className='absolute text-white text-[8px] -bottom-[10px]'>
                        { stone }
                    </div>
                </div>
            </div>
            <div className='mx-auto mt-[15px]'>
                <Image width='98' height='92' alt='' src={image} />
            </div>
            {/* <div className='mt-[3px] ml-4 w-[233px] h-[6px] relative'>
                <Image 
                    layout='fill' alt='' 
                    src='/images/connectDivider.png' 
                />
            </div> */}
            <div className='flex justify-between px-[15px]'>
                <div className='text-[9px] text-white mt-2'>Grade:</div>
                <div className='flex items-end w-[55px] '>
                    <StarLevel star_num={grade} />
                </div>
            </div>
            <div className='flex items-center justify-between px-[15px] text-[9px]  text-white mt-[5px]'>
                <div>Breed Count:</div>
                <div>{ breed }</div>
            </div>
            
        </div>
    )
}

export default EnhanceGoldyCard ;