import { useEffect, useRef, useState,Fragment } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from './index.module.scss';
import StarLevel from 'components/StarLevel' ;

// import Slider  from 'rc-slider';
// const  Range  = Slider;
// import 'rc-slider/assets/index.css' ;
// 
import ReactSlider from 'react-slider' ;

const ToolBar =({title , visible ,mobileFilter})=>{

    const [value, setValue] = useState([25, 50]);
    const [valuePet1 , setValuePet1] = useState(60) ;
    const [valuePet2 , setValuePet2] = useState(50) ;
    const [valuePet3 , setValuePet3] = useState(60) ;
    const [valuePet4 , setValuePet4] = useState(50) ;
    if(title=='Goldy') 
    return(
        <div className=''>
            <div className={cn(" fixed left-0 w-[350px] h-[100%] bg-[#02222A] px-[30px] pt-[50px] mt-[45px] xsmin:mt-[55px] z-0 " ,visible && 'scroll-css' , !visible && 'hidden' )}>
                <div className="w-[100%]">
                    <select className="w-[280px] h-[40px] pl-[20px]   bg-[#01161C] rounded-[10px] text-[#FFFFFF] border-[1px] border-[#025962]	 " name="" id="">
                        <option value="">Lower Price</option>
                        <option value="">High Price</option>
                        {/* <option value="">dd</option> */}
                    </select>
                    {/* filter part */}
                    <div className='pt-[25px]'>
                        <div className={cn('flex justify-between items-center px-[25px] ' ,styles.side_title)}>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Filter
                            </div>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Clear
                            </div>
                        </div>
                    </div>
                    {/* grade part */}
                    <div className='pt-[9px]'>
                        <div className={cn('flex justify-between items-center px-[25px] ' ,styles.side_title)}>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Grade
                            </div>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                <Image src="/images/arrow-down.png" width={16} height={8} alt="" />
                            </div>
                        </div>
                        <div className='pl-[10px]'>
                            <div className='pt-[20px] flex justify-start'>
                                <div className='pl-[7px] pr-[10px]'>
                                <label className="checkbox_style">
                                    <input type="checkbox"  />
                                    <span className="checkmark"></span>
                                </label>
                                </div>
                                <StarLevel star_num={0} />
                            </div>
                            <div className='pt-[7px] flex justify-start'>
                                <div className='pl-[7px] pr-[10px]'>
                                <label className="checkbox_style">
                                    <input type="checkbox"  />
                                    <span className="checkmark"></span>
                                </label>
                                </div>
                                <StarLevel star_num={1} />
                            </div>
                            <div className='pt-[7px] flex justify-start'>
                                <div className='pl-[7px] pr-[10px]'>
                                <label className="checkbox_style">
                                    <input type="checkbox"  />
                                    <span className="checkmark"></span>
                                </label>
                                </div>
                                <StarLevel star_num={2} />
                            </div>
                            <div className='pt-[7px] flex justify-start'>
                                <div className='pl-[7px] pr-[10px]'>
                                <label className="checkbox_style">
                                    <input type="checkbox"  />
                                    <span className="checkmark"></span>
                                </label>
                                </div>
                                <StarLevel star_num={3} />
                            </div>
                            <div className='pt-[7px] flex justify-start'>
                                <div className='pl-[7px] pr-[10px]'>
                                    <label className="checkbox_style">
                                        <input type="checkbox"  />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <StarLevel star_num={4} />
                            </div>
                            <div className='pt-[7px] flex justify-start'>
                                <div className='pl-[7px] pr-[10px]'>
                                    <label className="checkbox_style">
                                        <input type="checkbox"  />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <StarLevel star_num={5} />
                            </div>
                        </div>
                        
                    </div>
                    {/* gem class part */}

                    <div className='pt-[25px]'>
                        <div className={cn('flex justify-between items-center px-[25px] ' ,styles.side_title)}>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Gem Class
                            </div>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                <Image src="/images/arrow-down.png" width={16} height={8} alt="" />
                            </div>
                        </div>
                        <div className='flex justify-around pt-[27px] ' >
                            <div className=''>
                                <div className='flex'>
                                    <div className='flex justify-start'>
                                        <label className="checkbox_style">
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='flex text-[17px] text-[#D2D2D2]  '>
                                        <div className='flex items-center pr-[9px]'>
                                            {/* <Image src="/images/marketplace/ui/Deva.png" width={18} height={18} alt="" /> */}
                                        </div>
                                        <div className='pl-[12px]'>
                                            All
                                        </div>
                                    </div>
                                </div>
                                <div className='flex py-[10px]'>
                                    <div className='flex justify-start'>
                                        <label className="checkbox_style">
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='flex text-[17px] text-[#D2D2D2]  '>
                                        <div className='flex items-center pr-[9px]'>
                                            <Image src="/images/marketplace/ui/Deva.png" width={18} height={18} alt="" />
                                        </div>
                                        <div>
                                            Deva
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='flex justify-start'>
                                        <label className="checkbox_style">
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='flex text-[17px] text-[#D2D2D2]  '>
                                        <div className='flex items-center pr-[9px]'>
                                            <Image src="/images/marketplace/ui/Lacto.png" width={18} height={18} alt="" />
                                        </div>
                                        <div>
                                            Lacto
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex'>
                                    <div className='flex justify-start'>
                                        <label className="checkbox_style">
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='flex text-[17px] text-[#D2D2D2]  '>
                                        <div className='flex items-center pr-[9px]'>
                                            <Image src="/images/marketplace/ui/Grani.png" width={18} height={18} alt="" />
                                        </div>
                                        <div>
                                            Grani
                                        </div>
                                    </div>
                                </div>
                                <div className='flex py-[10px]'>
                                    <div className='flex justify-start'>
                                        <label className="checkbox_style">
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='flex text-[17px] text-[#D2D2D2]  '>
                                        <div className='flex items-center pr-[9px]'>
                                            <Image src="/images/marketplace/ui/Oxil.png" width={18} height={18} alt="" />
                                        </div>
                                        <div>
                                            Oxil
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='flex justify-start'>
                                        <label className="checkbox_style">
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='flex text-[17px] text-[#D2D2D2]  '>
                                        <div className='flex items-center pr-[9px]'>
                                            <Image src="/images/marketplace/ui/Yak.png" width={18} height={18} alt="" />
                                        </div>
                                        <div>
                                            Yak
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Breed Count part */}

                    <div className='pt-[25px]'>
                        <div className={cn('flex justify-between items-center px-[25px] ' ,styles.side_title)}>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Breed Count
                            </div>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                <Image src="/images/arrow-down.png" width={16} height={8} alt="" />
                            </div>
                        </div>
                        <div className=' pt-[30px] '>
                        <ReactSlider
                            value={value}
                            onBeforeChange={(value, index) =>
                                console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
                            }
                            onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
                            onAfterChange={(value, index) =>
                                setValue(value) 
                            }
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            defaultValue={[0, 100]}
                            ariaLabelledby={['first-slider-label', 'second-slider-label']}
                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                            pearling
                            minDistance={10}
                    
                        />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn("scroll-css fixed  w-[350px] h-[100%] bg-[#02222A] px-[30px] pt-[50px] mt-[45px] xsmin:mt-[55px] z-[1] ease-in-out duration-300 right-0 " , !mobileFilter ? "translate-x-full" : "translate-x-0" , visible && 'hidden' )}>
                <div className="w-[100%]">
                    <select className="w-[280px] h-[40px] pl-[20px]   bg-[#01161C] rounded-[10px] text-[#FFFFFF] border-[1px] border-[#025962]	 " name="" id="">
                        <option value="">Lower Price</option>
                        <option value="">High Price</option>
                        {/* <option value="">dd</option> */}
                    </select>
                    {/* filter part */}
                    <div className='pt-[25px]'>
                        <div className={cn('flex justify-between items-center px-[25px] ' ,styles.side_title)}>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Filter
                            </div>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Clear
                            </div>
                        </div>
                    </div>
                    {/* grade part */}
                    <div className='pt-[9px]'>
                        <div className={cn('flex justify-between items-center px-[25px] ' ,styles.side_title)}>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Grade
                            </div>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                <Image src="/images/arrow-down.png" width={16} height={8} alt="" />
                            </div>
                        </div>
                        <div className='pl-[10px]'>
                            <div className='pt-[20px] flex justify-start'>
                                <div className='pl-[7px] pr-[10px]'>
                                <label className="checkbox_style">
                                    <input type="checkbox"  />
                                    <span className="checkmark"></span>
                                </label>
                                </div>
                                <StarLevel star_num={0} />
                            </div>
                            <div className='pt-[7px] flex justify-start'>
                                <div className='pl-[7px] pr-[10px]'>
                                <label className="checkbox_style">
                                    <input type="checkbox"  />
                                    <span className="checkmark"></span>
                                </label>
                                </div>
                                <StarLevel star_num={1} />
                            </div>
                            <div className='pt-[7px] flex justify-start'>
                                <div className='pl-[7px] pr-[10px]'>
                                <label className="checkbox_style">
                                    <input type="checkbox"  />
                                    <span className="checkmark"></span>
                                </label>
                                </div>
                                <StarLevel star_num={2} />
                            </div>
                            <div className='pt-[7px] flex justify-start'>
                                <div className='pl-[7px] pr-[10px]'>
                                <label className="checkbox_style">
                                    <input type="checkbox"  />
                                    <span className="checkmark"></span>
                                </label>
                                </div>
                                <StarLevel star_num={3} />
                            </div>
                            <div className='pt-[7px] flex justify-start'>
                                <div className='pl-[7px] pr-[10px]'>
                                    <label className="checkbox_style">
                                        <input type="checkbox"  />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <StarLevel star_num={4} />
                            </div>
                            <div className='pt-[7px] flex justify-start'>
                                <div className='pl-[7px] pr-[10px]'>
                                    <label className="checkbox_style">
                                        <input type="checkbox"  />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <StarLevel star_num={5} />
                            </div>
                        </div>
                        
                    </div>
                    {/* gem class part */}

                    <div className='pt-[25px]'>
                        <div className={cn('flex justify-between items-center px-[25px] ' ,styles.side_title)}>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Gem Class
                            </div>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                <Image src="/images/arrow-down.png" width={16} height={8} alt="" />
                            </div>
                        </div>
                        <div className='flex justify-around pt-[27px] ' >
                            <div className=''>
                                <div className='flex'>
                                    <div className='flex justify-start'>
                                        <label className="checkbox_style">
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='flex text-[17px] text-[#D2D2D2]  '>
                                        <div className='flex items-center pr-[9px]'>
                                            {/* <Image src="/images/marketplace/ui/Deva.png" width={18} height={18} alt="" /> */}
                                        </div>
                                        <div className='pl-[12px]'>
                                            All
                                        </div>
                                    </div>
                                </div>
                                <div className='flex py-[10px]'>
                                    <div className='flex justify-start'>
                                        <label className="checkbox_style">
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='flex text-[17px] text-[#D2D2D2]  '>
                                        <div className='flex items-center pr-[9px]'>
                                            <Image src="/images/marketplace/ui/Deva.png" width={18} height={18} alt="" />
                                        </div>
                                        <div>
                                            Deva
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='flex justify-start'>
                                        <label className="checkbox_style">
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='flex text-[17px] text-[#D2D2D2]  '>
                                        <div className='flex items-center pr-[9px]'>
                                            <Image src="/images/marketplace/ui/Lacto.png" width={18} height={18} alt="" />
                                        </div>
                                        <div>
                                            Lacto
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex'>
                                    <div className='flex justify-start'>
                                        <label className="checkbox_style">
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='flex text-[17px] text-[#D2D2D2]  '>
                                        <div className='flex items-center pr-[9px]'>
                                            <Image src="/images/marketplace/ui/Grani.png" width={18} height={18} alt="" />
                                        </div>
                                        <div>
                                            Grani
                                        </div>
                                    </div>
                                </div>
                                <div className='flex py-[10px]'>
                                    <div className='flex justify-start'>
                                        <label className="checkbox_style">
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='flex text-[17px] text-[#D2D2D2]  '>
                                        <div className='flex items-center pr-[9px]'>
                                            <Image src="/images/marketplace/ui/Oxil.png" width={18} height={18} alt="" />
                                        </div>
                                        <div>
                                            Oxil
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='flex justify-start'>
                                        <label className="checkbox_style">
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='flex text-[17px] text-[#D2D2D2]  '>
                                        <div className='flex items-center pr-[9px]'>
                                            <Image src="/images/marketplace/ui/Yak.png" width={18} height={18} alt="" />
                                        </div>
                                        <div>
                                            Yak
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Breed Count part */}

                    <div className='pt-[25px]'>
                        <div className={cn('flex justify-between items-center px-[25px] ' ,styles.side_title)}>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Breed Count
                            </div>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                <Image src="/images/arrow-down.png" width={16} height={8} alt="" />
                            </div>
                        </div>
                        <div className=' pt-[30px] '>
                        <ReactSlider
                            value={value}
                            onBeforeChange={(value, index) =>
                                console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
                            }
                            onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
                            onAfterChange={(value, index) =>
                                setValue(value) 
                            }
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            defaultValue={[0, 100]}
                            ariaLabelledby={['first-slider-label', 'second-slider-label']}
                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                            pearling
                            minDistance={10}
                    
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) ;
    return(
        <div className=''>
            <div className={cn(" fixed left-0 w-[350px] h-[100%] bg-[#02222A] px-[30px] pt-[50px] mt-[45px] xsmin:mt-[55px] z-0 " ,visible && 'scroll-css', !visible && 'hidden' )}>
                <div className="w-[100%]">
                    <select className="w-[280px] h-[40px] pl-[20px]   bg-[#01161C] rounded-[10px] text-[#FFFFFF] border-[1px] border-[#025962]	 " name="" id="">
                        <option value="">Lower Price</option>
                        <option value="">High Price</option>
                        {/* <option value="">dd</option> */}
                    </select>
                    {/* filter part */}
                    <div className='pt-[25px]'>
                        <div className={cn('flex justify-between items-center px-[25px] ' ,styles.side_title)}>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Filter
                            </div>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Clear
                            </div>
                        </div>
                    </div>
                
                    {/* Breed Count part */}

                    <div className='pt-[25px]'>
                        <div className={cn('flex justify-between items-center px-[25px] ' ,styles.side_title)}>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Attributes
                            </div>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                {/* <Image src="/images/arrow-down.png" width={16} height={8} alt="" /> */}
                            </div>
                        </div>
                        <div className=' pt-[30px] flex justify-start items-center '>
                            <div className='flex items-center px-[15px] '>
                                <Image src="/images/a1.svg" width={50} height={50} alt="" />
                            </div>
                            <div className='relative -mt-[15px] '>
                                <ReactSlider
                                    value={valuePet1}

                                    onBeforeChange={(value, index) =>
                                        console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
                                    }
                                    onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
                                    onAfterChange={(valuePet, index) =>
                                        setValuePet1(valuePet) 
                                    }
                                    className="horizontal-slider-pet"
                                    thumbClassName="example-thumb-pet"
                                    trackClassName="example-track-pet"
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow/20}</div>}
                                />
                                <div className=' startPoint-pet text-[#B2B2B2] text-[12px] '>1%</div>
                                <div className=' endPoint-pet text-[#B2B2B2] text-[12px] '>5%</div>
                                
                            </div>

                        </div>
                        <div className=' pt-[0px] flex justify-start items-center '>
                            <div className='flex items-center px-[15px] '>
                                <Image src="/images/a2.svg" width={50} height={50} alt="" />
                            </div>
                            <div className={cn('relative -mt-[15px] '  )}>
                                <ReactSlider
                                    value={valuePet2}

                                    onBeforeChange={(value, index) =>
                                        console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
                                    }
                                    onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
                                    onAfterChange={(valuePet, index) =>
                                        setValuePet2(valuePet) 
                                    }
                                    className="horizontal-slider-pet"
                                    thumbClassName="example-thumb-pet"
                                    trackClassName="example-track-pet"
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow/100}</div>}
                                />
                                <div className=' startPoint-pet text-[#B2B2B2] text-[12px] '>0.1%</div>
                                <div className=' endPoint-pet text-[#B2B2B2] text-[12px] '>1%</div>
                                
                            </div>

                        </div>
                        <div className=' pt-[0px] flex justify-start items-center '>
                            <div className='flex items-center px-[15px] '>
                                <Image src="/images/a3.svg" width={50} height={50} alt="" />
                            </div>
                            <div className='relative -mt-[15px] '>
                                <ReactSlider
                                    value={valuePet3}

                                    onBeforeChange={(value, index) =>
                                        console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
                                    }
                                    onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
                                    onAfterChange={(valuePet, index) =>
                                        setValuePet3(valuePet) 
                                    }
                                    className="horizontal-slider-pet"
                                    thumbClassName="example-thumb-pet"
                                    trackClassName="example-track-pet"
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow/20}</div>}
                                />
                                <div className=' startPoint-pet text-[#B2B2B2] text-[12px] '>1%</div>
                                <div className=' endPoint-pet text-[#B2B2B2] text-[12px] '>5%</div>
                                
                            </div>

                        </div>
                        <div className=' pt-[0px] flex justify-start items-center '>
                            <div className='flex items-center px-[15px] '>
                                <Image src="/images/a4.svg" width={50} height={50} alt="" />
                            </div>
                            <div className='relative -mt-[15px]  '>
                                <ReactSlider
                                    value={valuePet4}

                                    onBeforeChange={(value, index) =>
                                        console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
                                    }
                                    onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
                                    onAfterChange={(valuePet, index) =>
                                        setValuePet4(valuePet) 
                                    }
                                    className="horizontal-slider-pet"
                                    thumbClassName="example-thumb-pet"
                                    trackClassName="example-track-pet"
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow/100}</div>}
                                />
                                <div className=' startPoint-pet text-[#B2B2B2] text-[12px] '>0.1%</div>
                                <div className=' endPoint-pet text-[#B2B2B2] text-[12px] '>1%</div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={cn("scroll-css fixed  w-[350px] h-[100%] bg-[#02222A] px-[30px] pt-[50px] mt-[45px] xsmin:mt-[55px] z-[1]  ease-in-out duration-300 right-0 " , !mobileFilter ? "translate-x-full" : "translate-x-0" , visible && 'hidden' )}>
                <div className="w-[100%]">
                    <select className="w-[280px] h-[40px] pl-[20px]   bg-[#01161C] rounded-[10px] text-[#FFFFFF] border-[1px] border-[#025962]	 " name="" id="">
                        <option value="">Lower Price</option>
                        <option value="">High Price</option>
                        {/* <option value="">dd</option> */}
                    </select>
                    {/* filter part */}
                    <div className='pt-[25px]'>
                        <div className={cn('flex justify-between items-center px-[25px] ' ,styles.side_title)}>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Filter
                            </div>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Clear
                            </div>
                        </div>
                    </div>
                
                    {/* Breed Count part */}

                    <div className='pt-[25px]'>
                        <div className={cn('flex justify-between items-center px-[25px] ' ,styles.side_title)}>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                Attributes
                            </div>
                            <div className=' text-[17px] text-[#C1E0FF] '>
                                {/* <Image src="/images/arrow-down.png" width={16} height={8} alt="" /> */}
                            </div>
                        </div>
                        <div className=' pt-[30px] flex justify-start items-center '>
                            <div className='flex items-center px-[15px] '>
                                <Image src="/images/a1.svg" width={50} height={50} alt="" />
                            </div>
                            <div className='relative -mt-[15px] '>
                                <ReactSlider
                                    value={valuePet1}

                                    onBeforeChange={(value, index) =>
                                        console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
                                    }
                                    onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
                                    onAfterChange={(valuePet, index) =>
                                        setValuePet1(valuePet) 
                                    }
                                    className="horizontal-slider-pet"
                                    thumbClassName="example-thumb-pet"
                                    trackClassName="example-track-pet"
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow/20}</div>}
                                />
                                <div className=' startPoint-pet text-[#B2B2B2] text-[12px] '>1%</div>
                                <div className=' endPoint-pet text-[#B2B2B2] text-[12px] '>5%</div>
                                
                            </div>

                        </div>
                        <div className=' pt-[0px] flex justify-start items-center '>
                            <div className='flex items-center px-[15px] '>
                                <Image src="/images/a2.svg" width={50} height={50} alt="" />
                            </div>
                            <div className={cn('relative -mt-[15px] '  )}>
                                <ReactSlider
                                    value={valuePet2}

                                    onBeforeChange={(value, index) =>
                                        console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
                                    }
                                    onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
                                    onAfterChange={(valuePet, index) =>
                                        setValuePet2(valuePet) 
                                    }
                                    className="horizontal-slider-pet"
                                    thumbClassName="example-thumb-pet"
                                    trackClassName="example-track-pet"
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow/100}</div>}
                                />
                                <div className=' startPoint-pet text-[#B2B2B2] text-[12px] '>0.1%</div>
                                <div className=' endPoint-pet text-[#B2B2B2] text-[12px] '>1%</div>
                                
                            </div>

                        </div>
                        <div className=' pt-[0px] flex justify-start items-center '>
                            <div className='flex items-center px-[15px] '>
                                <Image src="/images/a3.svg" width={50} height={50} alt="" />
                            </div>
                            <div className='relative -mt-[15px] '>
                                <ReactSlider
                                    value={valuePet3}

                                    onBeforeChange={(value, index) =>
                                        console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
                                    }
                                    onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
                                    onAfterChange={(valuePet, index) =>
                                        setValuePet3(valuePet) 
                                    }
                                    className="horizontal-slider-pet"
                                    thumbClassName="example-thumb-pet"
                                    trackClassName="example-track-pet"
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow/20}</div>}
                                />
                                <div className=' startPoint-pet text-[#B2B2B2] text-[12px] '>1%</div>
                                <div className=' endPoint-pet text-[#B2B2B2] text-[12px] '>5%</div>
                                
                            </div>

                        </div>
                        <div className=' pt-[0px] flex justify-start items-center '>
                            <div className='flex items-center px-[15px] '>
                                <Image src="/images/a4.svg" width={50} height={50} alt="" />
                            </div>
                            <div className='relative -mt-[15px]  '>
                                <ReactSlider
                                    value={valuePet4}

                                    onBeforeChange={(value, index) =>
                                        console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
                                    }
                                    onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
                                    onAfterChange={(valuePet, index) =>
                                        setValuePet4(valuePet) 
                                    }
                                    className="horizontal-slider-pet"
                                    thumbClassName="example-thumb-pet"
                                    trackClassName="example-track-pet"
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow/100}</div>}
                                />
                                <div className=' startPoint-pet text-[#B2B2B2] text-[12px] '>0.1%</div>
                                <div className=' endPoint-pet text-[#B2B2B2] text-[12px] '>1%</div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) ;

}

export default ToolBar ;


