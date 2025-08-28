import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full max-w-[23.438rem] mx-auto h-[50.75rem]
         bg-white  px-5 py-10 font-rubik'
        >
            <h2 className='text-[#1D2226] text-[1.75em] font-medium leading-9'>
                Signin to your <br /> PopX account
            </h2>
            <p className='text-[#1D2226] text-lg mt-3.5 opacity-60 leading-[26px]'>
                Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
            </p>

            <div className='relative mt-8 w-full'>
                <input type="email" placeholder='Enter email address'
                    className='w-full py-3 border-[1px] border-[#CBCBCB] rounded-md px-4 outline-none text-sm leading-[17px] box-border'
                />
                <span className='w-[6.438rem] px-[5px] py-0.5 bg-white absolute text-[13px] leading-[17px] top-0 -translate-y-1/2 left-3 text-[#6C25FF]'>
                    Email Address
                </span>
            </div>

            <div className='relative mt-6 w-full'>
                <input type="password" placeholder='Enter password'
                    className='w-full py-3 border-[1px] border-[#CBCBCB] rounded-md px-4 outline-none text-sm leading-[17px] box-border'
                />
                <span className='w-[6.438rem] px-[5px] py-0.5 bg-white absolute text-[13px] leading-[17px] top-0 -translate-y-1/2 left-3 text-[#6C25FF]'>
                    Password
                </span>
            </div>

            <button
                className='w-full mt-3.5 py-3.5 bg-[#CBCBCB] leading-[17px] font-medium text-[#FFFFFF] rounded-md cursor-pointer'
                onClick={() => navigate('/profile')}
            >
                Login
            </button>
        </div>
    )
}

export default Login