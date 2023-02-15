import { useRouter } from 'next/router';
import GoBack from 'components/buttons/GoBack';
import { useState ,useEffect ,useRef} from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export default function HowHelp() {
  
  const router = useRouter();
  const wrapper = useRef<HTMLDivElement>();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if(!wrapper.current) return;
    const onResize = () => {
        setWidth(wrapper.current.clientWidth);
    }
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
}, [wrapper]) ;

  return (
     <div className={cn('relative' , styles.bgstyle)}>
        <div className=" mt-[145px] xlmax:mt-[80px]  bg-[#032C32] xlmin:border-t-[2px] border-[#43F3FF]">
            <div className="">
                    <GoBack className='absolute left-[200px] top-[40px] xlmax:left-[50px]  xsmax:left-[20px]  xlmax:top-[20px] flex items-center'/>
                    <div className="text-[30px] text-[white] font-extrabold absolute left-[205px] top-[80px] xlmax:top-[100px] xlmax:text-[18px] xlmax:left-[50px]">HOW TO DRAW GOLDYPOT</div>
                    <div className="flex  ssmin:flex-wrap justify-around items-center xlmax:flex-col-reverse ">
                        <div className="mdmax:my-[20px] px-[32px]  ssmin:px-[25px] xsmin:px-[0px]">
                            <div className="text-[#43F3FF] mb-[4px] mt-[40px] text-[40px] mdmax:hidden ">How to draw Goldypot</div>
                            <div className="text-[#FFFFFF] mb-[21px] text-[20px] mdmax:text-[14px]">-If 1,000 GoldyPot are sold</div>
                            <div className="text-[#43F3FF] text-[20px] mdmax:text-[11px]">Pick a ranking at random</div>
                            <div className="text-[#FFFFFF] mb-[33px] text-[16px] mdmax:text-[12px]">For every rounds, after the ranking competition is over, generate 3 Ranks <br/> from ranking page by using chainlink&quot;s VRF system.</div>
                            <div className="text-[#FFFFFF] mb-[33px] font-semibold text-[18px] mdmax:text-[13px]">Ex: Goldypot 1A round winning number:</div>
                            <div className={cn(' mb-[35px]',styles.POT)}></div>
                            {/* <div className={cn('xlmax:block hidden mb-[35px]',styles.POTMobile)}></div> */}
                            <div className="text-[#43F3FF] text-[20px] mdmax:text-[12px]">Lucky Number Provider:</div>
                            <div className="text-[#FFFFFF] mb-[33px] text-[16px] mdmax:text-[11px]">2nd, 4th, 9th gets 2% each (total 6%) from the total pot.</div>
                            <div className="text-[#0AFF2B] text-[20px] mdmax:text-[12px]">Goldypot Winners: </div>
                            <div className="text-[#FFFFFF] text-[16px] mdmax:text-[11px]">Any combination of selected lucky number is considered as Goldypot Winners.</div>
                            <div className={cn(' my-[35px] pl-[10px]',styles.Gru)}></div>
                            {/* <div className={cn('xlmax:block hidden my-[35px] pl-[10px]',styles.GruMobile)}></div> */}
                            <div className="text-[#FFFFFF] text-[15px] mdmax:text-[10px]">Ticket# 773 : 26.33%</div>
                            <div className="text-[#FFFFFF] text-[15px] mdmax:text-[10px]">Ticket# 377 : 26.33%</div>
                            <div className="text-[#FFFFFF] mb-[10px] text-[15px] mdmax:text-[10px]">Ticket# 737 : 26.33%</div>
                            <div className="text-[#FFFFFF] text-[15px] mdmax:text-[10px]">Operation fee 15%</div>
                        </div>
                        <div className={cn('xlmax:mt-[70px] mdmax:mt-[90px] hidden mdmin:block',styles.rankTable)}></div>
                        <div className={cn('xlmax:mt-[70px] mdmax:mt-[90px] hidden ssmin:block mdmin:hidden ',styles.rankTableMobile)}></div>
                        <div className={cn('xlmax:mt-[70px] mdmax:mt-[90px] block ssmin:hidden ',styles.rankTableMobile_mobile)}></div>
                    </div>
                   
            </div>
            <div className="bg-[#011C20] mt-[60px] py-[20px]">
                <div className="flex justify-around items-center">
                    <div className="smmax:hidden ">
                        <div className="text-[#43F3FF] text-[40px] ">Top 3 Ranker&quot;s Reward</div>
                        <div className="text-[#FFFFFF] mb-[30px] text-[16px]">The top rankers will be rewarded G-Token with corresponding amount.</div>
                        <div className="w-[500px] h-[167px] border-[#43F3FF] border-[1px] rounded-[18px] flex flex-col justify-center ">
                            <div className="text-[15px] text-[white] text-center py-[11px]">FIRST RANK = 5,000 G-TOKEN</div>
                            <div className="text-[15px] text-[white] text-center py-[11px] border-b-[1px] border-t-[1px] border-[#43F3FF] ">SECOND RANK = 3,000 G-TOKEN</div>
                            <div className="text-[15px] text-[white] text-center py-[11px] ">THIRD RANK = 1,000 G-TOKEN</div>
                        </div>                          
                    </div>
                    <div className="smmax:block hidden ">
                        <div className="text-[#43F3FF] xsmax:px-[25px] text-[28px] ">Top 3 Ranker&quot;s Reward</div>
                        <div className="text-[#FFFFFF] mb-[30px] text-[11px]  ssmax:ml-[10px]">The top rankers will be rewarded G-Token with corresponding amount.</div>
                        <div className="w-[80%] ml-[10%] h-[120px] border-[#43F3FF] border-[1px] rounded-[18px] flex flex-col justify-center ">
                            <div className="text-[13px] text-[white] text-center py-[11px]">FIRST RANK = 5,000 G-TOKEN</div>
                            <div className="text-[13px] text-[white] text-center py-[11px] border-b-[1px] border-t-[1px] border-[#43F3FF] ">SECOND RANK = 3,000 G-TOKEN</div>
                            <div className="text-[13px] text-[white] text-center py-[11px] ">THIRD RANK = 1,000 G-TOKEN</div>
                        </div>
                    </div>
                    <div className={cn('xlmax:hidden',styles.lazypots)}></div>
                </div>
            </div>
        </div>
     </div>
  )
}
