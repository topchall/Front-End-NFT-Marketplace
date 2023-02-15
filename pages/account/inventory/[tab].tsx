import styles from './index.module.scss';
import cn from 'classnames';
import GoldyCard from 'components/cards/GoldyCard';
import GoldyCardInventory from 'components/cards/GoldyCardInventory' ;
import { useRouter } from 'next/router';
import PetCard from 'components/cards/PetCard';
import PetCardInverntory from 'components/cards/PetCardInverntory';
import GoldyPassCardInventory from 'components/cards/GoldyPassCardInventory' ;
import GoldyPassCard from 'components/cards/GoldyPassCard';
import GoldyPotCard from 'components/cards/GoldyPotCard';
import { Component, useEffect, useState } from 'react';
import AccountLayout from 'components/layout/Account';
import { inventory_menu, inventory_goldypass_data, inventory_goldy_data, inventory_pets_data, inventory_goldypot_data, goldypetspage_data, goldypasspage_data } from 'utils/data';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import { goldefy_ABI, goldefy_Address, RPC } from 'utils/contracts';
import { BarLoader,BeatLoader } from 'react-spinners'
import Image from 'next/image';
import Axios from 'core/utils/axios';
import moment from 'moment';
import ErrorPopup from 'components/popups/ErrorPopup' ; 
import Purchased from 'components/popups/Purchased' ;
import SuccessPopup from 'components/popups/SuccessPopup' ;
import Incentive from 'components/popups/Incentive' ;

import { hideSpinner, showSpinner } from 'slices/utilSlice';
import { useDispatch } from 'react-redux';
import SlotMachine_main from 'pages/SlotMachine_main';

const Inventory = () => {
  const router = useRouter() ;
  const { tab } = router.query ;


  const { account, library } = useWeb3React();
  const [ data, setData ] = useState([]) ;
  const [ dataPass, setDataPass ] = useState([]) ;
  const [ text, setText ] = useState('');
  const [ isLoading, setLoading ] = useState(true);
  const [page, setPage] = useState(0);
  const [tableDataPass, setTableDataPass] = useState([]);
  const [tableInfoPass, setTableInfoPass] = useState({cols: []});

// my goldy data

const test_goldy_data = [
  {id:'222' ,   stone:'Round 2C' , price:'20' , breed:'1660036148' , image:'/images/goldypass/bell.png' , stone_image: '/images/goldypass/YAK.png'},
  {id:'234' ,   stone:'Round 2D' , price:'42' , breed:'1660036148' , image:'/images/goldypass/bell.png' , stone_image: '/images/goldypass/YAK.png'},
  {id:'444' ,   stone:'Round 2E' , price:'343' , breed:'1660036148' , image:'/images/goldypass/bell.png' , stone_image: '/images/goldypass/YAK.png'},
  {id:'231' ,   stone:'Round 2F' , price:'21' , breed:'1660036148' , image:'/images/goldypass/bell.png' , stone_image: '/images/goldypass/YAK.png'},
  {id:'444' ,   stone:'Round 2E' , price:'343' , breed:'1660036148' , image:'/images/goldypass/bell.png' , stone_image: '/images/goldypass/YAK.png'},
  {id:'231' ,   stone:'Round 2F' , price:'21' , breed:'1660036148' , image:'/images/goldypass/bell.png' , stone_image: '/images/goldypass/YAK.png'},
]


// goldypot 
const goldypassTable = {
  trClassName: 'h-[80px]',
  cols: [
    {
      title: 'Lucky Number',
      className: 'w-[120px] xsmax:w-[90px] ',
      Component: ({row}) => (
         <div className='flex xsmax:flex-col'>
          
          <div className='flex flex-col ml-[25px] xsmax:ml-[0px] '>
            <span className='text-[#FFE32A] text-[29px] xsmax:text-[18px]'>{row.lucky_number}</span>
          </div>
        </div>
      )
    },
    {
      title: 'Type',
      className: 'w-[100px] xsmax:w-[40px]  text-center xsmax:pl-[10px] ',
      Component: ({row}) => (
        <div className='text-center'>
          <div className='text-[#E1FAFF] text-[14px] xsmax:text-[9px]'>Goldypot</div>
          <div className='text-[#43FF75] text-[14px] xsmax:text-[9px] capitalize'>{row.type}</div>
        </div>
      )
    },
    {
      title: 'Amount',
      className: 'w-[100px] xsmax:w-[50px]  text-center',
      Component: ({row}) => (
          <>
            <div className='text-[#E1FAFF] text-[14px] xsmax:text-[10px]  text-center'>
            {row.amount} USDT
            </div>
        </>
      )
    },
    {
      title: 'Time',
      className: 'w-[100px] xsmax:w-[80px]  text-center',
      Component: ({row}) => (
          <>
            <div className='text-[#ABABAB] text-[14px] xsmax:text-[10px]  text-center'>
            { moment(row.time * 1000).fromNow()}
            </div>
        </>
      )
    },

  ],
}

// goldypot

  useEffect(() => {
    setTableInfoPass(goldypassTable) ;
    setTableDataPass([]) ;
    setData([]);
    setLoading(true);
    console.log(tab);
    switch(tab) {
      case 'goldy': setText('Goldy Owned'); break;
      case 'goldypass': setText('Goldy Pass'); break;
      case 'pets': setText('Pet Owned'); break;
      case 'goldypot': setText('GoldyPot Owned'); break;
      default : setText('Selling'); break;
    }
    if(tab == 'pets') {
      
      Axios.post(`pet/inventory`)
        .then(async (result) => {
          setData(result.data.map((id, i) => (
            {
              name: `Pet #${id.id}`,
              image: goldypetspage_data[id.type].image,
              type: id.type
            }
          )))
          setLoading(false);
        })   
        .catch(e => {
          setLoading(false);
        })   
    }
    else if(tab == 'goldypass') {
      Axios.post(`pass/inventory`)
        .then(resp => {
          setDataPass(resp.data
          .map(each => ({...goldypasspage_data[each.type-1], ...each}))
          .map(each => ({
            id: each.id,
            image: `/images/goldypass/${each.name}.png`,
            stone: each.stone,
            stone_image: `/images/goldypass/${each.stone}.png`,
            enabled : router.query.inventoryData && parseInt(router.query.inventoryData[0]) > 0 ? true : false
          })))
          setLoading(false);
        }
        )
        .catch(e => {
          setLoading(false);
        })
    }
    else if(tab == 'goldypot') {
      try{
        Axios.post(`goldypot/get-my-goldypot`)
        .then(resp => {
          console.log(resp) ;
          setTableDataPass(resp.data) ;
        })
      }catch{
        console.log('Error on goldypot on inventory') ;
      }
      setLoading(false);
    }
    else if (tab == 'goldy') {
      setData(test_goldy_data) ;
      setLoading(false) ;
    }
    else {
      setLoading(false);
    }
  }, [tab, account])
  let ChildComponent;
  switch(text) {
    case 'Goldy Owned': ChildComponent=GoldyCardInventory; break;
    case 'Goldy Pass': ChildComponent=GoldyPassCard; break;
    case 'Pet Owned': ChildComponent=PetCardInverntory; break;
    case 'GoldyPot Owned': ChildComponent=GoldyPotCard; break;
    default: ChildComponent=GoldyCardInventory;
  }
  return (
    <AccountLayout title={inventory_menu.find(each => each.path == router.asPath)?.title} submenu={inventory_menu} >
      {
      tab == 'pets' ? 
        <Panel 
          text={text}
          ChildComponent={ChildComponent}
          data={data}
          isLoading={isLoading}
          // enabled = {router.query.inventoryData && parseInt(router.query.inventoryData[0]) > 0 ? true : false}
        /> :
        tab == 'goldypass' ?
          <PanelPass 
            text={text}
            ChildComponent={ChildComponent}
            data={dataPass}
            isLoading={isLoading}
            enabled = {router.query.inventoryData && parseInt(router.query.inventoryData[0]) > 0 ? true : false}
          /> 
          : 
          tab == 'goldy' ?
          <Panel 
          text={text}
          ChildComponent={ChildComponent}
          data={data}
          isLoading={isLoading}
        />
         :
        <Table text={text} data={tableDataPass} isLoading={isLoading} { ...tableInfoPass }/>
        

    }
      
    </AccountLayout>
  )
}

const PanelPass = ({ text, data, ChildComponent, isLoading , enabled}) => {
  const dispatch = useDispatch();
  const [lucky1 , setLuck1] = useState() ;
  const [lucky2 , setLuck2] = useState() ;
  const [lucky3 , setLuck3] = useState() ;
  const [isSlotVisivle , showSlotPopup] = useState(false) ;
  const [isSuccessVisible, showSuccessPopup] = useState(false) ;
  const [isErrorVisible, showErrorPopup] = useState(false);
  const [isIncentiveVisible , showIncentivePopup] = useState(false);
  const [isIncentive , setIncentiveLink] = useState() ;


  const router = useRouter();

  const cacluating_lucky =  (data)=>{
    
    var luck1 , luck2 , luck3 ;
        luck1= parseInt(data) / 100 ;
        luck1= parseInt(luck1) ;
        luck2= (parseInt(data) % 100 ) / 10;
        luck2= parseInt(luck2) ;
        luck3= parseInt(data) % 10 ;
        // console.log(luck1 , luck2 , luck3) ;
        
        
        setLuck1(luck1) ;
        setLuck2(luck2) ;
        setLuck3(luck3) ;
        showSuccessPopup(true) ;
  }
  const onErrorClose = () => {
      showErrorPopup(false);
  };
  const onSuccessClose = () => {
      showSuccessPopup(false) ;
      showSlotPopup(true) ;
  }
  const slotClose =() =>{
      showSlotPopup(false) ;
      if(isIncentive != '') showIncentivePopup(true) ;
      else router.replace('/account/inventory/goldypot') ;
      // showIncentive(true) ;
  }
  const onIncentiveClose = ()=>{
    showIncentivePopup(false) ;
    router.replace('/account/inventory/goldypot') ;
  }

  const onClaim = async()=>{
     try{
      dispatch(showSpinner());
      await Axios.post(`goldypot/choose-goldypass`, {
          goldyPassId: localStorage.getItem('passId'),
        })
        .then(resp => {
          dispatch(hideSpinner());
          if(resp.error_code == 0 ) {
              cacluating_lucky(resp.data.lucky_number) ;
              setIncentiveLink(resp.data.incentive) ;
           
          }                
        })
        .catch() ;
  }catch{
      dispatch(hideSpinner());
  }
  }

  const [page, setPage] = useState(0);
  const maxPage = Math.floor((data.length - 1) / 5);
  return (
    <div className='relative flex flex-col px-[20px] lgmin:h-[600px] xsmax:px-[5px]  xsmax:mb-[40px] xsmax:w-fit' >
      <div className='bg-[#0B4851] w-[202px] min-h-[40px] h-[40px] xsmax:mt-[20px] mt-[44px] flex justify-between items-center rounded-[10px] px-4'>
        <div className='text-white'>{text}</div>
        <div className='text-[#43F3FF]'>{data.length}</div>
      </div>
      <div className="flex flex-wrap justify-start sp365min:mx-[2%] sp400min:mx-[5%] ">
        <div className='mt-[20px] xsmin:mt-[44px] flex flex-wrap justify-center sp348min:justify-start sp365min:justify-between xsmin:justify-start'>
          {
            data?.slice(page * 5, page * 5 + 5).map((each, key) => (
              <GoldyPassCardInventory key={key} id ={each.id} image ={each.image} stone ={each.stone} stone_image={each.stone_image} onClaim={onClaim} enabled={enabled} />
            ))
          }
        </div>
      </div>
      <div className={cn('flex grow items-center justify-center text-white mt-[35px] mb-[20px] xsmax:mt-[0px]', data.length <= 5 && 'hidden')}>
        <div className='flex items-center justify-center w-[25px] h-[28px] bg-[#1F808E] rounded-[5px] cursor-pointer'
          onClick={() => setPage(page > 0 ? page - 1 : 0)}
        >
          <div className={styles.arrow_left}></div>
        </div>
        <div className='ml-[11px] bg-[#032227] w-[49px] h-[30px] flex items-center justify-center rounded-[5px]'>
          {page + 1}
        </div>
        <div className='ml-[7px] mr-[15px]'>
          of {maxPage + 1}
        </div>
        <div className='flex items-center justify-center w-[25px] h-[28px] bg-[#1F808E] rounded-[5px] cursor-pointer'
          onClick={() => setPage(page < maxPage ? page + 1 : 0)}
        >
          <div className={styles.arrow_right}></div>
        </div>
      </div>
      <div className='absolute top-1/2 lgmax:top-[300px] left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <BarLoader color='white' loading={isLoading} />
      </div>
      <SuccessPopup onClose={onSuccessClose} visible={isSuccessVisible} msg={`Buy GoldyPot Item successful.`} />
      {/* <Purchased onClose={onSuccessClose} isOpen={isSuccessVisible} /> */}
      <ErrorPopup onClose={onErrorClose} visible={isErrorVisible} />
      {
        isSlotVisivle  ? <SlotMachine_main  num1={lucky1} num2={lucky2} num3={lucky3} setModalflg={slotClose}/> : <> </>
      }
      <Incentive onClose={onIncentiveClose} isOpen={isIncentiveVisible} incentiveLink={isIncentive} />
      {
        (isErrorVisible || isSlotVisivle || isIncentiveVisible || isSuccessVisible) &&
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      }
    </div>
  )
}
const Panel = ({ text, data, ChildComponent, isLoading }) => {
  // console.log('data', data);

  const [page, setPage] = useState(0);
  const maxPage = Math.floor((data.length - 1) / 5);
  return (
    <div className='relative flex flex-col px-[20px] h-[600px] w-full'>
      <div className='bg-[#0B4851] w-[202px] h-[40px] xsmin:mt-[44px] mt-[20px] flex justify-between items-center rounded-[10px] px-4'>
        <div className='text-white'>{text}</div>
        <div className='text-[#43F3FF]'>{data.length}</div>
      </div>
      <div className='mt-[20px] xsmin:mt-[44px] flex flex-wrap justify-center sp348min:justify-start sp365min:justify-between xsmin:justify-start'>
        {
          data.slice(page * 5, page * 5 + 5).map((each, key) => (
            <ChildComponent key={key} {...each} />
          ))
        }
        
      </div>
      <div className={cn('flex grow items-center justify-center text-white mt-[55px]', data.length <= 5 && 'hidden')}>
        <div className='flex items-center justify-center w-[25px] h-[28px] bg-[#1F808E] rounded-[5px] cursor-pointer'
          onClick={() => setPage(page > 0 ? page - 1 : 0)}
        >
          <div className={styles.arrow_left}></div>
        </div>
        <div className='ml-[11px] bg-[#032227] w-[49px] h-[30px] flex items-center justify-center rounded-[5px]'>
          {page + 1}
        </div>
        <div className='ml-[7px] mr-[15px]'>
          of {maxPage + 1}
        </div>
        <div className='flex items-center justify-center w-[25px] h-[28px] bg-[#1F808E] rounded-[5px] cursor-pointer'
          onClick={() => setPage(page < maxPage ? page + 1 : 0)}
        >
          <div className={styles.arrow_right}></div>
        </div>
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <BarLoader color='white' loading={isLoading} />
      </div>
    </div>
  )
}


const Table=({text,data, isLoading, trClassName = '', cols}) => {
  return (
    <div className="w-full">
      <div className='bg-[#0B4851] w-[202px] min-h-[40px] h-[40px] xsmax:mt-[20px] mt-[44px] flex justify-between items-center rounded-[10px] px-4 '>
        <div className='text-white'>{text}</div>
        <div className='text-[#43F3FF]'>{data.length}</div>
      </div>
      <table className={cn(' w-full mt-[20px] xsmin:mt-[30px] h-[455px]  rounded-[12px] text-white text-[15px] xsmin:bg-[#0A414E]',  text !='GoldyPot Owned' &&  'bg-[#0A414E]' , styles.table)}>
        <thead>
          <tr className='h-[47px] border-b-[1px] border-[#0A667B]'>
          {
            cols?.map(({className, title}, key) => (
              <td key={key} className={cn(className, 'text-left pl-[33px] xsmax:pl-[18px] xsmax:text-[13px]')}>
                {title}
              </td>
            ))
          }
          </tr>
        </thead>
        <tbody className='relative'>
          {
            isLoading && 
            <tr>
              <td className='absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                Loading
                <BeatLoader color='white' />
              </td>  
            </tr>
          }
          {
            !isLoading && data.length == 0 &&
            <tr>
              <td className='absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Image className='flex xsmax:hidden' src='/images/account/history/no-content.svg' width='120' height='120' />
                <div className='pt-[26px] xsmax:pt-[20px] '>
                  Sorry, No record found.
                </div>
              </td>  
            </tr>
          }
          {
            !isLoading && data.map((row, key) => (
              <tr key={key} className={cn(trClassName, 'border-b-[1px] border-[#0A667B]')}>
                {cols.map(({Component}, key) => (
                  <td key={key} className='pl-[33px] xsmax:pl-[18px]'>
                    <Component row={row} />
                  </td>
                ))}
              </tr>
            ))
          }
          <tr className='h-[15px]'>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  )
}


export default Inventory;

