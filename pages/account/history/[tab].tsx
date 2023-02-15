import styles from './index.module.scss';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AccountLayout from 'components/layout/Account';
import { history_menu, inventory_goldypass_data, inventory_goldy_data, inventory_pets_data, inventory_goldypot_data, goldypetspage_data, goldypasspage_data } from 'utils/data';
import Image from 'next/image';
import Axios from 'core/utils/axios';
import { copy2Clipboard, truncateAddress ,truncateAddressHistory } from 'utils';
import moment from 'moment';
import { toast } from 'react-toastify';


import { BeatLoader ,BounceLoader} from 'react-spinners';
import { blockExplorer } from 'utils/contracts';
// import { setTimeout } from 'timers/promises';
// import { setTimeout } from 'timers/promises';




export default function History() {
  
  const copyPast =(wallet)=>{
    toast.success('Copied to clipboard');
    copy2Clipboard(wallet)
  }
  
  const goldypassTable = {
    trClassName: 'h-[78px]',
    cols: [
      {
        title: 'Item',
        className: 'w-[180px] xsmax:w-[70px] ',
        Component: ({row}) => (
           <div className='flex xsmax:flex-col  my-[8px]'>
            <div className="xsmax:w-[38px] flex flex-wrap items-center">
              <Image src={`/images/goldypass/${goldypasspage_data[row.pass.type-1].name}.png`} width='50' height='50' />
            </div>
            <div className='flex flex-col ml-[25px] xsmax:-ml-[13px] xsmax:flex-wrap xsmax:content-center'>
              <span className='text-white text-[16px] xsmax:text-[12px]'>Pass #{row.pass.number}</span>
              <span className='text-[#44B8D2] text-[14px] xsmax:text-[10px]'>{goldypasspage_data[row.pass.type-1].name}</span>
            </div>
          </div>
        )
      },
      {
        title: 'Status / Type',
        className: 'w-[110px] xsmax:w-[50px]  text-center xsmax:pl-[20px] ',
        Component: ({row}) => (
          <div className='text-center'>
            <div className='xsmax:h-[40px] xsmax:invisible'></div>
            <div className='text-[#E1FAFF] text-[18px] xsmax:text-[12px] capitalize'>{row.activity}</div>
            <div className='text-[#43FF75] text-[14px] xsmax:text-[9px]'>Completed</div>
          </div>
        )
      },
      {
        title: 'Amount / Time',
        className: 'w-[130px] xsmax:w-[70px]  text-center',
        Component: ({row}) => (
            <>
              <div className='xsmax:h-[40px] xsmax:invisible'>
              </div>
            <div className='text-[#E1FAFF] text-[18px] xsmax:text-[12px] text-center capitalize'>{row.amount} USDT</div>
              
              <div className='text-[#43FF75] text-[14px] xsmax:text-[10px]  text-center'>
              { moment(row.date * 1000).fromNow()}
              </div>
          </>
        )
      },
      {
        title: 'Txn Hash',
        className: 'w-[250px] xsmax:w-[80px] text-center xsmax:pl-[0px]',
        Component: ({row}) => (
          <div className='flex justify-between items-center text-[#44B8D2] text-[14px] xsmax:text-[10px] px-[20px] xsmax:px-[5px] xsmax:flex-wrap xsmax:content-center xsmax:flex-col-reverse '>
            <a href={`${blockExplorer}/tx/${row.transactionHash}`} target='_blank' rel='noreferrer'>
            { truncateAddressHistory(row.transactionHash).slice(0,9) }<br/>{ truncateAddressHistory(row.transactionHash).slice(9,22) }
            </a>
            <div className='xsmax:h-[45px] xsmax:flex xsmax:items-center'>
              <Image width='13' height='16' alt='' layout='fixed'
                    src='/images/copy.png' className='cursor-pointer'
                    onClick={() => copyPast(row['transactionHash'])}
                />
            </div>
          </div>
        )
      },
    ],
  }
  const goldypassTableLoading = {
    trClassName: 'h-[78px]',
    cols: [
      {
        title: 'Item',
        className: 'w-[180px] xsmax:w-[70px]',
        Component: ({row}) => (
           <div className='flex xsmax:flex-col my-[8px]'>
            <div className="xsmax:w-[38px] flex flex-wrap items-center">
              <BounceLoader color='#1c9bb9' loading={true} size='40' />
            </div>
            <div className='flex flex-col ml-[25px] xsmax:-ml-[13px] xsmax:flex-wrap xsmax:content-center'>
              <span className='text-white text-[17px] xsmax:text-[12px]'>Pass #{row.pass.number}</span>
              <span className='text-[#44B8D2] text-[14px] xsmax:text-[10px]'>{goldypasspage_data[row.pass.type-1].name}</span>
            </div>
          </div>
        )
      },
      {
        title: 'Status / Type',
        className: 'w-[110px] xsmax:w-[50px]  text-center xsmax:pl-[20px] ',
        Component: ({row}) => (
          <div className='text-center'>
            <div className='xsmax:h-[40px] xsmax:invisible'></div>
            <div className='text-[#E1FAFF] text-[18px] xsmax:text-[12px] capitalize'>{row.activity}</div>
            <div className='text-[#43FF75] text-[14px] xsmax:text-[9px]'>Completed</div>
          </div>
        )
      },
      {
        title: 'Amount / Time',
        className: 'w-[130px] xsmax:w-[70px]  text-center',
        Component: ({row}) => (
            <>
              <div className='xsmax:h-[40px] xsmax:invisible'></div>
            <div className='text-[#E1FAFF] text-[18px] xsmax:text-[12px] text-center capitalize'>{row.amount} USDT</div>
              <div className='text-[#43FF75] text-[14px] xsmax:text-[10px]  text-center'>
              { moment(row.date * 1000).fromNow()}
              </div>
          </>
        )
      },
      {
        title: 'Txn Hash',
        className: 'w-[250px] xsmax:w-[80px] text-center xsmax:pl-[0px]',
        Component: ({row}) => (
          <div className='flex justify-between items-center text-[#44B8D2] text-[14px] xsmax:text-[10px] px-[20px] xsmax:px-[5px] xsmax:flex-wrap xsmax:content-center xsmax:flex-col-reverse '>
            <a href={`${blockExplorer}/tx/${row.transactionHash}`} target='_blank' rel='noreferrer'>
            { truncateAddressHistory(row.transactionHash).slice(0,9) }<br/>{ truncateAddressHistory(row.transactionHash).slice(9,22) }
            </a>
            <div className='xsmax:h-[45px] xsmax:flex xsmax:items-center'>
              <Image width='13' height='16' alt='' layout='fixed'
                    src='/images/copy.png' className='cursor-pointer'
                    onClick={() => copyPast(row['transactionHash'])}
                />
            </div>
          </div>
        )
      },
    ],
  }

  const petsTable = {
    trClassName: 'h-[78px]',
    cols: [
      {
        title: 'Item',
        className: 'w-[180px] xsmax:w-[70px]  ' ,
        Component: ({row}) => row && row != null &&(
          <div className='flex xsmax:flex-col my-[6px]'>
            <div className="xsmax:w-[38px] ">
              <Image src={goldypetspage_data[row.pet.type].image} width='50' height='50' />
            </div>
            {/* <div className='flex flex-col ml-[25px] xsmax:ml-[0px] xsmax:flex-wrap xsmax:content-center'> */}
            <div className='flex flex-col ml-[25px] xsmax:-ml-[13px] xsmax:flex-wrap xsmax:content-center'>
              <span className='text-white text-[16px] xsmax:text-[12px]'>Pet #{row.pet.tokenId}</span>
              <span className='text-[#44B8D2] text-[14px] xsmax:text-[10px]'>{goldypetspage_data[row.pet.type].name}</span>
            </div>
          </div>
        )
      },
      {
        title: 'Status / Type',
        className: 'w-[110px] xsmax:w-[50px]  text-center xsmax:pl-[20px] ',
        Component: ({row}) => (
          <div className='text-center'>
            <div className='xsmax:h-[40px] xsmax:invisible'></div>
            <div className='text-[#E1FAFF] text-[21px] xsmax:text-[12px] text-center  capitalize'>{row.activity}</div>
            <div className='text-[#43FF75] text-[14px] xsmax:text-[9px]'>Completed</div>
          </div>
        )
      },
      {
        title: 'Amount / Time',
        className: 'w-[130px] xsmax:w-[70px] text-center',
        Component: ({row}) => (
          <>
            <div className='xsmax:h-[40px] xsmax:invisible'></div>
            <div className='text-[#E1FAFF] text-[21px] xsmax:text-[12px]  text-center capitalize'>{row.quantity}</div>
            <div className='text-[#43FF75] text-[14px] xsmax:text-[10px] text-center'>
              { moment(row.date * 1000).fromNow()}
            </div>
          </>
        )
      },
      {
        title: 'Txn Hash',
        className: 'w-[250px] xsmax:w-[80px] text-center xsmax:pl-[0px]',
        Component: ({row}) => (
          <div className='flex justify-between items-center text-[#44B8D2] text-[14px] xsmax:text-[10px] px-[20px] xsmax:px-[5px] xsmax:flex-wrap xsmax:content-center xsmax:flex-col-reverse '>
            <div className='xsmax:w-[65px] '>
              <a  href={`${blockExplorer}/tx/${row.transactionHash}`} target='_blank' rel='noreferrer'>
              {/* { truncateAddress(row.transactionHash, 3) } */}
            { truncateAddressHistory(row.transactionHash).slice(0,10) }<br/>{ truncateAddressHistory(row.transactionHash).slice(10,22) }
              </a>
            </div>            
            <div className='xsmax:h-[45px] xsmax:flex xsmax:items-center'>
              <Image  width='13' height='16' alt='' layout='fixed'
                    src='/images/copy.png' className='cursor-pointer  xsmax:flex xsmax:mb-[10px] '
                    onClick={() => copyPast(row['transactionHash'])}
                />
            </div>
          </div>
        )
      },
    ],
  }
  const petsTableLoading = {
    trClassName: 'h-[78px]',
    cols: [
      {
        title: 'Item',
        className: 'w-[180px] xsmax:w-[70px] ' ,
        Component: ({row}) => row && row != null &&(
          <div className='flex xsmax:flex-col  my-[6px]'>
            <div className="xsmax:w-[38px] flex flex-wrap items-center">
              <BounceLoader color='#1c9bb9' loading={true} size='50' />
            </div>
            <div className='flex flex-col ml-[25px] xsmax:-ml-[13px] xsmax:flex-wrap xsmax:content-center		'>
              <span className='text-white text-[16px] xsmax:text-[12px]'>Pet #{row.pet.tokenId}</span>
              <span className='text-[#44B8D2] text-[14px] xsmax:text-[10px]'>{goldypetspage_data[row.pet.type].name}</span>
            </div>
          </div>
        )
      },
      {
        title: 'Status / Type',
        className: 'w-[110px] xsmax:w-[50px]  text-center xsmax:pl-[20px] ',
        Component: ({row}) => (
          <div className='text-center'>
            <div className='xsmax:h-[40px] xsmax:invisible'></div>
            <div className='text-[#E1FAFF] text-[21px] xsmax:text-[12px]  capitalize'>{row.activity}</div>
            <div className='text-[#43FF75] text-[14px] xsmax:text-[9px]'>Completed</div>
          </div>
        )
      },
      {
        title: 'Amount / Time',
        className: 'w-[130px] xsmax:w-[70px] text-center',
        Component: ({row}) => (
          <>
            <div className='xsmax:h-[40px] xsmax:invisible'></div>
            <div className='text-[#E1FAFF] text-[21px] xsmax:text-[12px]  text-center capitalize'>{row.quantity}</div>
            <div className='text-[#43FF75] text-[14px] xsmax:text-[10px] text-center'>
              { moment(row.date * 1000).fromNow()}
            </div>
          </>
        )
      },
      {
        title: 'Txn Hash',
        className: 'w-[250px] xsmax:w-[80px] text-center xsmax:pl-[0px]',
        Component: ({row}) => (
          <div className='flex justify-between items-center text-[#44B8D2] text-[14px] xsmax:text-[10px] px-[20px] xsmax:px-[5px] xsmax:flex-wrap xsmax:content-center xsmax:flex-col-reverse '>
            <div className='xsmax:w-[65px] '>
              <a  href={`${blockExplorer}/tx/${row.transactionHash}`} target='_blank' rel='noreferrer'>
              {/* { truncateAddress(row.transactionHash, 3) } */}
            { truncateAddressHistory(row.transactionHash).slice(0,10) }<br/>{ truncateAddressHistory(row.transactionHash).slice(10,22) }
              </a>
            </div>            
            <div className='xsmax:h-[45px] xsmax:flex xsmax:items-center'>
              <Image  width='13' height='16' alt='' layout='fixed'
                    src='/images/copy.png' className='cursor-pointer  xsmax:flex xsmax:mb-[10px] '
                    onClick={() => copyPast(row['transactionHash'])}
                />
            </div>
          </div>
        )
      },
    ],
  }
 
  const router = useRouter();
  const { tab } = router.query;
  const [tableInfo, setTableInfo] = useState({cols: []}) ;
  const [tableInfoPass, setTableInfoPass] = useState({cols: []}) ;
  const [tableInfoPet, setTableInfoPet] = useState({cols: []}) ;
  const [tableData, setTableData] = useState([]) ;
  const [tableDataPass, setTableDataPass] = useState([]) ;
  const [tableDataPet, setTableDataPet] = useState([]) ;
  const [isLoading, setLoading] = useState(true) ;
  const [imgLoading , setImgLoading] = useState(true) ;
  const [totalCnt , setTotalCnt] = useState(0) ;
  const [page, setPage] = useState(0);


  const refresh = () => {
    setTableData([]);
    setLoading(true);
    switch(tab) {
      case 'pet': setTableInfoPet(petsTableLoading); break;
      case 'pass': setTableInfoPass(goldypassTableLoading); break;
      default: setTableInfo(petsTableLoading); break;
    }
    // console.log(tab) ;
    setTimeout(()=>{
      if(tab === 'pass') setTableInfoPass(goldypassTable);
      else if(tab === 'pet') setTableInfoPet(petsTable);
      else  setTableInfo(petsTable);
    },1500);
    if(tab == 'pet' || tab == 'pass') {
      Axios.post(`${tab}/history`, {
        per_page: '5',
        page: (page+1)
      })
      .then(resp => {
        if(resp.error_code) {
          return;
        }
        if(tab == 'pet') setTableDataPet(resp.data) ;
        else setTableDataPass(resp.data) ;
        setTableData(resp.data) ;
        setTotalCnt(resp.meta.total) ;
        // console.log(resp.data) ;
        setLoading(false) ;
      })
      .catch(e => setLoading(false)) ;
    }
    else if(tab) {
      setTableData([]) ;
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
    // console.log(tableData.length ,'maxpage');
  }, [tab,page]);

  useEffect(()=>{
    
    setTimeout(() => {
      setImgLoading(false) ;
    }, 1500);
    
  },[]) ;
  
  // const maxPage = Math.floor((tableData.length - 1) / 5);
  const maxPage = Math.floor((totalCnt - 1) / 5) ;
  return (
    <>
      
      <AccountLayout title={history_menu.find(each => each.path == router.asPath)?.title} submenu={history_menu} >
        
        
        <div className='flex flex-col px-[4px] mdmax:px-[12px]  '>
          <div className='flex mt-[44px] mdmax:mt-[20px]  justify-between mdmax:flex-wrap	mb-[20px] '>
          <div className={cn('mdmin:hidden  flex items-center justify-between w-[202px] mdmax:w-[180px] mdmax:w-[150px] mdmax:mb-[15px] h-[40px] bg-[#0B4851] rounded-[10px] text-white text-[15px] mdmax:text-[13px] pl-[28px] pr-[15px]' , tab === 'transaction' && 'invisible')}>
              {tab === 'goldy' ? 'On Sale' : tab === 'pet' ? 'Total pet' : 'On Sale' } :
              
              <div>1</div>
            </div>
            <button className='border-[#43F3FF] border w-[143px] h-[40px] flex justify-between items-center rounded-[10px] pl-[21px] pr-[14px]'
              onClick={refresh}
            >
              <div className='text-white text-[15px] mdmax:text-[13px]'>Refresh</div>
              <Image src='/images/account/history/refresh.svg' width='18' height='15' />
            </button>
            <div className='grow mdmax:hidden'></div>
            <div className='flex items-center justify-between w-[202px]  mdmax:w-[150px] h-[40px] bg-[#0B4851] rounded-[10px] text-white text-[15px] mdmax:text-[13px]  pl-[28px] pr-[15px]'>
              All Events
              <Image src='/images/account/history/arrowdown.svg' width='20' height='26' />
            </div>
            <div className='flex items-center justify-between w-[202px]  mdmax:w-[150px] h-[40px] bg-[#0B4851] rounded-[10px] text-white text-[15px] mdmax:text-[13px] pl-[28px] pr-[15px] xsmin:ml-[24px]'>
              All Time
              <Image src='/images/account/history/arrowdown.svg' width='20' height='26' />
            </div>
          </div>
          <div className='w-full '>
            {
                tab=='pet' &&
                <Table data={tableDataPet} isLoading={isLoading} { ...tableInfoPet }/>
            }
            {
              tab=='pass' &&
              <Table data={tableDataPass} isLoading={isLoading} { ...tableInfoPass }/>
            }
            {
              tab !='pass' && tab !='pet' &&
              <Table data={tableDataPass.slice(0,0)} isLoading={isLoading} { ...tableInfoPass }/>
            }

          </div>
          <div className={cn('flex grow items-center justify-center text-white mt-[5px] pb-[0px]')}>
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
        </div>
      </AccountLayout>
    </>
  )
}

function Table({data, isLoading, trClassName = '', cols}) {
  return (
    <table className={cn(' w-full h-[455px] bg-[#0A414E] rounded-[12px] text-white text-[15px]', styles.table)}>
      <thead>
        <tr className='h-[47px] border-b-[1px] border-[#0A667B]'>
        {
          cols?.map(({className, title}, key) => (
            <td key={key} className={cn(className, 'text-left pl-[33px] xsmax:pl-[18px] text-[11px] xsmin:text-[13px]')}>
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
              {cols?.map(({Component}, key) => (
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
  )
}