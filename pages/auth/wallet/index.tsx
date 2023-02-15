import { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import GoBack from 'components/buttons/GoBack';
import { useWeb3React } from '@web3-react/core';
import Image from 'next/image';

import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { BscConnector } from '@binance-chain/bsc-connector' ;
import { BitKeepConnector } from 'components/bitkeep-connector';

import Walletmodal from './walletmodal';

import Axios from "core/utils/axios";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login } from 'store/slices/authSlice';

import WalletErrorPopup from 'components/popups/WalletErrorPopup' ; 


declare let window: any;

const metamask = new InjectedConnector({
  supportedChainIds: [4,56]
});


 const BitKeep = new BitKeepConnector({
  supportedChainIds: [1, 3, 4, 5, 42,56],
});
// 

const POLLING_INTERVAL = "8000"
const RPC_URLS: { [chainId: number]: string } = {
  4: "https://eth-rinkeby.alchemyapi.io/v2/Kc6kXv6BEXbQ7zUa5QwE5Xk9hIE3KVbH" as string
}

const CoinbaseWallet = new WalletLinkConnector({
  url: `https://eth-rinkeby.alchemyapi.io/v2/Kc6kXv6BEXbQ7zUa5QwE5Xk9hIE3KVbH`,
  appName: "Web3-react Demo",
  supportedChainIds: [4, 56],
});

const walletconnect = new WalletConnectConnector({
  supportedChainIds: [4,56] ,
  // rpc : {[4]: `https://eth-rinkeby.alchemyapi.io/v2/Kc6kXv6BEXbQ7zUa5QwE5Xk9hIE3KVbH`},
  
});

const bscconnect = new BscConnector({
  supportedChainIds: [4,56, 97] 
})

// const {ethereum} = window ;

export default function Wallet(props) {

    // window.e

    let {
        library,
        account,
        activate: activateNetwork,
        setError
      } = useWeb3React();

    const dispatch = useDispatch();
    
    const router = useRouter();

    const [isConnecting, setConnecting] = useState(false);
    const [selectedWallet , setSelectedWallet] = useState('metmask') ;
    const [walletNames , setWalletNames] = useState('Metamask') ;
    const [isErrorVisible, showErrorPopup] = useState(false) ;
    const [walletMsg , setWalletMsg] = useState("") ;
    const bitkeep_wallet = async () => {
      setConnecting(true) ;
      await activateNetwork(BitKeep, async (error) => {
        if(error.toString().includes("No Bitkeep wallet found")) {
          window.open('https://bitkeep.com/en/download?type=2' , '_blank') ;
          return ;
        }
        if(window.ethereum.networkVersion != '4') {
          switch_network() ;
        }
      });
      setConnecting(false) ;
    }
    const connect_wallet = async () => {
        setConnecting(true);
        await activateNetwork(metamask, async (error) => {
          if(error.toString().includes("NoEthereumProviderError")) {
            window.open('https://metamask.io/download/' , '_blank') ;
            return ;
          }
          if(window.ethereum.networkVersion != '4') {
            switch_network();
          }
        });
        setConnecting(false) ;
    }
    const onErrorClose =()=>{
      showErrorPopup(false) ;
    }

    const wallet_connect = async () =>{
      setConnecting(true) ;
      await activateNetwork(walletconnect, async (error) => {
        // console.log(error.name , 'erro name')
        if(error.name == 'UnsupportedChainIdError') {
          if(window.ethereum.networkVersion != '4') 
            switch_network();
        }
      });
      setConnecting(false) ;
      // console.log(account) ;
    }
    const coinbase_connect = async () =>{
      setConnecting(true) ;
      await activateNetwork(CoinbaseWallet, async (error) => {
        // console.log(error.name , 'erro name')
        if(error.name == 'UnsupportedChainIdError') {
          if(window.ethereum.networkVersion != '4') 
            switch_network();
        }
      });
      setConnecting(false) ;
      // console.log(account) ;
    }

    const binance_connect = async () =>{
      setConnecting(true) ;
      await activateNetwork(bscconnect, async (error) => {
        if(error.toString().includes("NoBscProviderError")) {
            window.open('https://www.bnbchain.org/en/binance-wallet' , '_blank') ;
            return ;
        }
        // console.log('processing') ;
        // if(error.name == 'UnsupportedChainIdError') {
        // if(window.ethereum.networkVersion != '4') {
        //   switch_network();
        // }
      });
      setConnecting(false) ;
    }

    const [isWalletmodal , setModalPopUp] = useState(false) ;

    useEffect(() => {
      // console.log(account,'acccount');
      if(!account) return;
      setConnecting(true);
      sign_message()
        .then(() => setConnecting(false))
        .catch(() => setConnecting(false))
    }, [account]);


    const switch_network = async () => {
      const provider = await metamask.getProvider();
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: '0x4' }]
        });
        await activateNetwork(metamask) ;
        
        // setTimeout(sign_message, 1000);
      } catch (switchError) {
        console.log('switchError', switchError, JSON.stringify(switchError, null, '\t'));
        if (switchError.code === 4902) {
          try {
            await provider.request({
              method: "wallet_addEthereumChain",
              params: ['0x4']
            });
          } catch (error) {
          }
        }
      }
      setConnecting(false);
    };

    const sign_message = async () => {
      // console.log(account);
      let parms1 = {
        params:{
          public_address: account,
            // incentive: localStorage.getItem('IncentiveLink') ,
        }
      }
      let parms2 = {
          params:{
            public_address: account,
            incentive: localStorage.getItem('IncentiveLink') ,
          }
        } 
      

      const res = await Axios.get('auth/connect', localStorage.getItem('IncentiveLink') ? parms2 : parms1 );
      if(res.error_code != '0') return ;
      localStorage.removeItem('IncentiveLink') ;
      let message = 
      `Welcome to GoldeFy!
This request will not trigger a blockchain transaction or cost any gas fees.
Your authentication status will reset after 24 hours.
Wallet address:${account}
Nonce:${res.data.nonce}`;
      if (!library) return;
      let signature;
      try {
          signature = await library.provider.request({
              method: "personal_sign",
              params: [message, account]
          });
          
      } catch (error) {
          setError(error);
          return;
      }
      const ret = await Axios.post('auth', {
          public_address: account,
          signature: signature
        });
      if(ret && ret['error_code'] == 0) {
          dispatch(
            login({
              wallet: account, 
              token: ret.data.accessToken, 
              user_id: res.data.user_id,
              user_name: res.data.user_name,
              user_email: res.data.user_email,
              is_verify: res.data.is_verify,
              nonce: res.data.nonce
            }));
          if(res.data.is_verify)
            router.replace('/');
          else
            router.replace('/auth/email');
      }
    }

    const wallet_click =(walletType) =>{
      setSelectedWallet(walletType) ;
      switch(walletType) {
        case 'metmask': setWalletNames('Metamask') ; connect_wallet() ; break ;
        case 'coinbase': setWalletNames('CoinBase Wallet') ;coinbase_connect() ; break ;
        case 'logo': setWalletNames('Binance Wallet') ; binance_connect() ; break ;
        case 'walletconnect': setWalletNames('Wallet Connect') ;  wallet_connect() ; break ;
        default : setWalletNames('Bitkeep Wallet') ; bitkeep_wallet() ;
      }

    }
    const walletmainUp = ()=>{
      switch(walletNames) {
        case 'Metamask':  connect_wallet() ; break ;
        case 'CoinBase Wallet':  coinbase_connect() ; break ;
        case 'Binance Wallet':  binance_connect() ; break ;
        case 'Wallet Connect':  wallet_connect() ; break ;
        default :  bitkeep_wallet() ;
      }
    }

    return (
        <div className={cn('flex grow items-center ',  styles.container)}>
            <div className='flex flex-row items-center xsmax:items-start justify-center w-full  h-[348px] xsmax:h-screen bg-[#02222A]'>
                <div className='relative flex flex-col items-center mt-[42px]  mb-[39px]'>
                    <div className='text-[24px]  text-white xsmax:mt-[150px] ssmax:mt-[120px]'>
                        Login or Create an account
                    </div>
                    <div className='text-[12px] xsmax:text-[11px] xsmax:text-center	 text-[#586A7D] mt-[7px] xsmax:px-[60px]'>
                        Connect with one of our available wallet providers or create a new one
                    </div>
                    <div className='flex flex-row items-center h-[61px] w-[428px] xsmax:w-[363px]  xsmax:mt-[220px] xsmax:w-[340px]  xsmax:mt-[170px] border border-[#43F3FF] rounded-[9px] mt-7 cursor-pointer'
                        onClick={()=>walletmainUp()}
                    >
                        <div className='ml-[17px] mt-[5px]'>
                          <Image alt='' src={`/images/account/wallet/${selectedWallet}.png`} width='36' height='36' />
                        </div>
                        <div className='grow text-[15px] text-white ml-[16px]'>
                            {walletNames}
                        </div>
                        <div className='text-[12px] text-[#586A7D] mr-[27px]'>
                            { isConnecting ? 'Connect' : 'Connect' }
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center mt-[18px] xsmin:mt-[20px] w-[250px] xsmin:w-[428px]">
                          <div className={cn(" rounded-[100%] h-[50px] w-[50px]  border-solid border-2 flex flex-wrap justify-center items-center", walletNames !='Metamask' && "border-[#707070]" , walletNames =='Metamask' && "border-[#43F3FF]")} 
                            onClick={()=>wallet_click('metmask')}
                          >
                            <Image alt='' src='/images/metmask.png' width='36' height='36' />    
                          </div>
                        <div className={cn("mx-[5px]   rounded-[100%] h-[50px] w-[50px]  border-solid border-2 flex flex-wrap justify-center items-center",  walletNames !='CoinBase Wallet' && "border-[#707070]" , walletNames =='CoinBase Wallet' && "border-[#43F3FF]" )}
                          onClick={()=>wallet_click('coinbase')}
                        >
                          <Image alt='' src='/images/account/wallet/coinbase.png' width='36' height='36' />    
                        </div>
                        <div className={cn(" rounded-[100%] h-[50px] w-[50px]  border-solid border-2 flex flex-wrap justify-center items-center",  walletNames !='Binance Wallet' && "border-[#707070]" ,  walletNames =='Binance Wallet' && "border-[#43F3FF]")} 
                          onClick={()=>wallet_click('logo')}
                        >
                          <Image alt='' src='/images/account/wallet/logo.png' width='36' height='36' />    
                        </div>
                        <div className={cn("mx-[5px]   rounded-[100%] h-[50px] w-[50px]  border-solid border-2 flex flex-wrap justify-center items-center" ,  walletNames !='Bitkeep Wallet' && "border-[#707070]"  ,  walletNames =='Bitkeep Wallet' && "border-[#43F3FF]" )}
                          onClick={()=>wallet_click('bitkeep')}
                        >
                          <Image alt='' src='/images/account/wallet/bitkeep.png' width='36' height='36' />    
                        </div>
                        <div className={cn(" rounded-[100%] h-[50px] w-[50px] border-solid border-2 flex flex-wrap justify-center items-center",  walletNames !='Wallet Connect' && "border-[#707070]"  ,  walletNames =='Wallet Connect' && "border-[#43F3FF]" )} 
                          onClick={()=>wallet_click('walletconnect')}
                        >
                          <Image alt='' src='/images/account/wallet/walletconnect.png' width='36' height='36' />    
                        </div>
                    </div>
                    <div className='mt-[3px] xsmin:mt-[0px]'>
                      <Image alt='' src='/images/connectDivider.png' width='233' height='6' />
                    </div>
                    <div className='mt-[22px] flex text-center	 xsmax:mt-[12px] xsmax:w-[274px] text-[12px] text-[#586A7D]'>
                        We do not own your private keys and cannot access your funds without your confirmation.
                    </div>
                    <div className='mt-[14px] text-[14px] text-[#55E3EE]'>
                        See term of use
                    </div>
                    <GoBack className='items-center mdmin:-left-[117px] -top-[7px] xsmax:ml-[20px]  mdmax:left-[0px] mdmax:-top-[0px] '/>
                </div>
            </div>
            <WalletErrorPopup onClose={onErrorClose} visible={isErrorVisible} msg={walletMsg} />
        </div>
        
    )
} 