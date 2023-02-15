import React, { useEffect, useState ,useRef } from 'react';

import Image from 'next/image';

import MobileRollingItem from 'components/MobileRollingItem' ;
import DesktopRollingItem from 'components/DeskTopRollingItem';



const RollingPan = ({num1, num2 , num3}) => {
    const [mobile, setMobile] = React.useState(false);

    function handleWindowSizeChange() {
        if (window !== undefined) {
            setMobile(
                window.innerWidth < 900 ? true:false
            )
          }
    }
    useEffect(() => {
        

        if(window !== undefined ){
            handleWindowSizeChange();
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }
        
    }, []);
    return (
        <div>
            <div style={{position:"relative"}}>
                { mobile ? 
                    <div style={{display:'flex', gap: '27px',position:"absolute",top:171,left:64}}>
                        <MobileRollingItem target={num1}/>
                        <MobileRollingItem target={num2}/>
                        <MobileRollingItem target={num3}/>
                    </div>
                    : <div style={{display:'flex', gap: '20px', position:"absolute",top:250,left:86}}>
                        <DesktopRollingItem target={num1}/>
                        <DesktopRollingItem target={num2}/>
                        <DesktopRollingItem target={num3}/>
                    </div>
                }
            
            <Image src={ "/images/desktop/draw.png"} width={mobile ? 382 : 575} height={mobile ? 334 : 502}/>
            </div>
        </div>
  
      // 384 334
    )
}

export default RollingPan ;