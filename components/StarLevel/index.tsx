import cn from 'classnames';
import styles from './index.module.scss';

import { useEffect ,useRef, useState,Fragment } from 'react';
import Image from 'next/image';

const StarLevel =({star_num , star_size='21'})=>{
    
    
    return (
        <>
            {
                star_num == 0 &&
                <>
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                </>
            }
            {
                star_num == 1 &&
                <>
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                </>
            }
            {
                star_num == 2 &&
                <>
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                </>
            }
            {
                star_num == 3 &&
                <>
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                </>
            }
             {
                star_num == 4 &&
                <>
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/starb.png'} width={star_size} height={star_size} alt='startb'  />
                </>
            }
            {
                star_num == 5 &&
                <>
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                    <Image src={'/images/updated_one/star.png'} width={star_size} height={star_size} alt='startb'  />
                </>
            }

            
            
            
        </>
    )
}

export default StarLevel ;