import { useEffect, useRef, useState,Fragment } from 'react';
import Image from 'next/image';

const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#0c1c1e" offset="20%" />
        <stop stop-color="#1e474e" offset="50%" />
        <stop stop-color="#0c1c1e" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#0c1c1e" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`
  
  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)



const Coming_soon =()=>{
    return(
        <div className="bg-[#0a292e] h-screen flex flex-wrap items-center justify-center">
            <div className='flex flex-col justify-center bg-[#041518]  w-[300px] h-[150px] xsmin:w-[350px] xsmin:h-[200px] rounded-[20px]'>
                
                <div className="flex flex-wrap items-center justify-center">
                    <div className="hidden xsmin:block xsmin:-ml-[40px]  xsmin:-mt-[140px]">
                        <Image
                            // placeholder="blur"
                            src="/images/comingsoon/cs.gif"
                            alt="Picture of the author"
                            width={300}
                            height={200}
                            // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(172, 111))}`}

                        />
                    </div>
                    
                    <div className='flex flex-wrap items-center justify-center -mt-[130px] -ml-[40px]  xsmin:hidden'>
                        <Image
                            // placeholder="blur"
                            src="/images/comingsoon/cs.gif"
                            alt="Picture of the author"
                            width={300}
                            height={200}
                            // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(172, 111))}`}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center text-[white] font-[Eurostile] font-extrabold text-[30px] xsmin:text-[40px] -mt-[20px] xsmin:-mt-[15px]">
                    Coming Soon..
                </div>
                
            </div>
        </div>
    )
}

export default Coming_soon ;