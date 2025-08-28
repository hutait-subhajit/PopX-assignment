import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full max-w-[26.563rem] mx-auto bg-white h-[50.75rem] flex flex-col justify-end px-5 py-10 font-rubik'>
            <h2 className='text-[#1D2226] text-[1.75em] font-medium'>Welcome to PopX</h2>

            <p className='text-[#1D2226] text-lg mt-2.5 opacity-60 leading-[26px]'>
                Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
            </p>

            <button className='w-full py-3.5 bg-[#6C25FF] font-medium text-[#FFFFFF] rounded-md mb-2.5 mt-7 cursor-pointer'
                onClick={() => navigate('/signup')}
            >
                Create Account
            </button>

            <button
                className='w-full py-3.5 bg-[#6C25FF4B] font-medium text-[#1D2226] rounded-md cursor-pointer'
                onClick={() => navigate('/login')}
            >
                Already Registered? Login
            </button>
        </div>
    )
}

export default Home