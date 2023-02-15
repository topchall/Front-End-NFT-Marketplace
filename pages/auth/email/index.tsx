import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from './index.module.scss';
import GoBack from 'components/buttons/GoBack';
import { InjectedConnector } from "@web3-react/injected-connector";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'core/utils/axios';
import { validateEmail } from 'utils';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';
import BeatLoader from 'react-spinners/BeatLoader';
import { login } from 'slices/authSlice';
import { useAuth } from 'store/hook';

const metamask = new InjectedConnector({
  supportedChainIds: [4]
});


export default function Email(props) {
    
	const [email, setEmail] = useState('');
	const [code ,setCode] = useState('');
	const [isEmailStatu ,setEmailStatu] = useState(false);

	const [codeSent, setCodeSent] = useState(false);
	const [isSending, setSending] = useState(false);
	const [isLinking, setLinking] = useState(false);

	const [emailError, setEmailError] = useState('');
	const [codeError, setCodeError] = useState('');

	const emailInput = useRef<HTMLInputElement>();
	const codeInput = useRef<HTMLInputElement>();

    const dispatch = useDispatch();
    
    const router = useRouter();

	const auth = useAuth();

	const checkEmail = () => {
		if(email == '') {
			emailInput.current.focus();
			setEmailError('Please enter your email');
			return false;
		}
		if(!validateEmail(email)){
			emailInput.current.focus();
			setEmailError('Invalid email');
			return false;
		}
		return true;
	}

    const sendCode = async () => {
		if(!checkEmail()) return;
		setSending(true);
		const data = await axios.post('auth/send-code', {
			email
		}).catch(() => setSending(false)) as any;
		setSending(false);
		// console.log(data);
		if(data == null) toast.error(<div>Email address was already registered.<br/>Please try with other email.</div>);
		else if(data.error_code == 0) {
			toast.success(<div>Verification code is sent. <br/>Please check your email.</div>);
		}
		setCodeSent(true);
	}

	const verify = async () => {
		if(!checkEmail()) return;
		if(code == '') {
			codeInput.current.focus();
			setCodeError('Please enter code');
			return;
		}
		if(!/\d{4}/.test(code)) {
			// toast.error('Invalid code');
			setCodeError('Invalid code');
			return;
		}
		setLinking(true);
		try{
			const resp = await axios.post('auth/verify-code', {
				email,
				code
			}) as any;
			if(resp.error_code == 0) {
				toast.success('Your email is successfully linked to your account');
				dispatch(login({...auth, user_email: email}))
			} 
			console.log(resp);
			router.replace('/');
		} catch({response}) {
			if(response.status == 400) {
				toast.error(response.data.msg);
				if(response.data.error_code == 11) {
					router.replace('/');
				}
			}
		}
		setLinking(false);
	}
	const  calc =(e)=>{
		setEmail(e.target.value);
		setEmailError('') ;
		if(e.target.value != '')setEmailStatu(true);
		else setEmailStatu(false) ;
	}
	const EnterCode=(e)=>{
		if(isNaN(e.target.value)) return ;
		// console.log(isNaN(e.target.value),e.target.value) ;
		setCode(e.target.value);
		setCodeError('') ;
	}

    return (
        <div className={cn('flex grow items-center', styles.container)}>
            <div className='flex flex-row items-center justify-center xsmax:items-start w-full h-[531px] bg-[#02222A] xsmax:h-screen bg-[#02222A]'>
                <div className='relative flex flex-col mt-[29px] mb-[80px]'>
                    <div className='text-[29px] text-white xsmax:mt-[100px]  xsmax:text-center'>
                        Link Game Account
                    </div>
                    <div className='text-[12px] text-[#586A7D] -mt-[8px] xsmax:mt-[0px]  xsmax:text-center'>
                        Link your existing game account
                    </div>
                    <div className='flex flex-col mt-[48px] xsmax:w-[360px] ssmax:w-[340px] xsmax:pl-[10px]  '>
						<div className='text-[#A8A8A8] text-[15px] ml-[17px] mb-[6px]'>
						Email Address
						</div>
						<input className='text-white w-[428px] xsmax:w-[350px] ssmax:w-[340px] h-[55px] xsmax:h-[45px] bg-[#011A20] text-[#43F3FF] text-[17px] border border-[#025962] rounded-[9px] px-[17px] outline-none' 
							value={email}
							onChange={(e) => { calc(e) }}
							ref={emailInput}
						/>
						{
							emailError &&
								<div className='text-[#ff1e1e] ml-[8px] mt-[2px]'>
									{ emailError }
								</div>
						}
						<div className='flex flex-row mt-[14px]'>
							<input className='text-white w-[314px] xsmax:w-[307px] ssmax:w-[320px] h-[55px] xsmax:h-[45px] bg-[#011A20] text-[#43F3FF] text-[20px] xsmax:placeholder:text-[15px] border border-[#025962] rounded-[9px] px-[17px] outline-none' placeholder='Enter Code'
								value={code}
								onChange={(e) => { EnterCode(e) }}
								ref={codeInput}
							/>
							<div className='relative'>
								<button 
									className={cn('w-[104px] xsmax:w-[90px] ssmax:w-[100px] h-[55px] xsmax:h-[45px] bg-[#949494] text-[13px] text-white rounded-[9px] ml-[10px]', isSending && 'brightness-75' , isEmailStatu && 'bg-[#FDE047] text-black' )}
									onClick={sendCode}
									disabled={isSending}
								>
									SEND CODE <br/> VIA EMAIL
									
								</button>
								<ClipLoader color={'#08222a'} loading={isSending} size={40} cssOverride={{position: 'absolute'}} className='top-[7px] left-[42px]' />
							</div>
						</div>
						{
							codeError &&
								<div className='text-[#ff1e1e] ml-[8px] mt-[2px]'>
									{ codeError }
								</div>
						}
						<div className='relative mt-[25px] '>
							<button 
								className={cn('w-[428px] xsmax:w-[350px] ssmax:w-[340px] h-[61px] xsmax:h-[50px] text-white bg-[#1B9EA7] border-[#43F3FF] border rounded-[9px]', isLinking && 'brightness-75')}
								onClick={verify}
								disabled={isLinking}
							>
							LINK ACCOUNT
							</button>
							<BeatLoader color={'white'} loading={isLinking} className='absolute -translate-x-1/2 left-1/2 top-[40px]' />
						</div>
                    </div>
                   
                    <div className='mt-[27px] mx-auto'>
                      <Image alt='' 
                        src='/images/connectDivider.png' 
                        width='233' height='6'
                      />
                    </div>
					<div className='mt-[13px] text-[11px]  ml-[12px] mr-[5px]  text-[#586A7D] '>
                        By Continuing, you agree to &nbsp;
                        <span className='mt-[12px] text-[12px] text-[#55E3EE]'>
                        Goldefy&apos;s Terms of Service
                        </span>
                        &nbsp; and confirm <br/>
                        that you have read &nbsp;
                        <span className='mt-[12px] text-[12px] text-[#55E3EE]'>
                        Goldefy Privacy Policy
                        </span>
                    </div>
                    <GoBack className='xsmin:-left-[141px] top-[15px] left-[0%] flex items-center' />
					
                </div>
            </div>
        </div>
    )
} 