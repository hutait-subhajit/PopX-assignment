import React from 'react'
import profileIcon from '../assets/profile.png'
import cameraIcon from '../assets/cameraIcon.svg'
const Profile = () => {
    return (
        <div className='w-full max-w-[23.438rem] mx-auto bg-[#F7F8F9] h-[50.75rem] font-rubik  flex flex-col'>
            <div className='w-full pt-[27px] pb-5 pl-[15px] bg-[#FFFFFF] shadow-[0px_3px_6px_#00000007'>
                <p className='text-lg text-[#1D2226] capitalize leading-[21px]'>Account Settings</p>
            </div>
            <div className='w-full px-5 pt-[1.875rem]'>
                <div className='flex '>
                    <div className='w-[4.75rem] h-[4.75rem] relative'>
                        <img src={profileIcon} alt='profile icon' className='w-full h-full bg-cover bg-transparent' />
                        <img src={cameraIcon} className='absolute bottom-1 -right-1' alt="" />
                    </div>
                    <div className='pl-5'>
                        <p className='text-[15px] leading-[19px] font-medium text-[#1D2226] mb-1.5'>Marry Doe</p>
                        <p className='text-[14px] leading-[19px] text-[#1D2226] '>Marry Doe</p>
                    </div>
                </div>
                <p className='text-[14px] leading-[1.625rem] text-[#1D2226] mt-[1.875rem]'>
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>


            </div>

            <div className='flex-1 mt-5 mb-9 border-y border-dashed border-[#CBCBCB]'></div>
        </div>
    )
}

export default Profile