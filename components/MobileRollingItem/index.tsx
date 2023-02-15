import React, {FC} from 'react'
import dynamic from 'next/dynamic';
const RollingItem = dynamic(() => {
    return import("react-rolling-item")
  },{ssr:false})

  interface IProps{
    target: Number
  }

const MobileRollingItem: FC<IProps> = (props): JSX.Element => {
    const [start, setStart] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {setStart(true)},500);
        // setTimeout(() => {setStart(false)}, 2000);
      },[])
      React.useEffect(() => {
        if(start){
      
          setTimeout(() => {setStart(false)}, 7000);
        }
        // setTimeout(() => {setStart(true)},1000);
      },[start]);
  return (
    <>
              <RollingItem
                on={start}
                column={1}
                backgroundImage={"/images/bg-number1.png"}
                backgroundSize="210px 440px"
                introItemInfo={{ x: 0, y: 110 }}
                itemInfo={
                  [
                    { x: 0, y: 0, id: 1, probability: 0 },
                    { x: 140, y: 0, id: 2, probability: 0 },
                    { x: 70, y: 0, id: 3, probability: 0 },
                    { x: 0, y: 330, id: 4, probability: 0 },
                    { x: 140, y: 330, id: 5, probability: 0 },
                    { x: 70, y: 330, id: 6, probability: 0 },
                    { x: 0, y: 220, id: 7, probability: 0 },
                    { x: 140, y: 220, id: 8, probability: 0 },
                    { x: 70, y: 220, id: 9, probability: 0 },
                    { x: 0, y: 110, id: 0, probability: 0 },
                  ]
                }
                width={66}
                height={110}
                startDelay={1000}
                fixedIds={[props.target]}
                completionAnimation={true}
              />
    </>
  )
}

export default MobileRollingItem