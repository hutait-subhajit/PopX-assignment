import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [changeButton, setChangeButton] = useState("Yes");
    const navigate = useNavigate();
    return (
        <div className='w-full max-w-[23.438rem] mx-auto bg-white h-[50.75rem] px-5 pt-10 pb-[1.875rem] font-rubik flex flex-col'>
            <h2 className='text-[#1D2226] text-[1.75em] font-medium leading-9'>
                Create your <br /> PopX account
            </h2>

            <div className='mt-[1.813rem] '>
                <div className='relative w-full'>
                    <input type="text"
                        className='w-full py-3 border border-[#CBCBCB]
                    text-[#1D2226] rounded-md px-4 outline-none text-sm leading-[12px]'
                        value={'Marry Doe'}
                        readOnly
                    />
                    <span className='w-[6rem] pl-[5px]  bg-white absolute text-[13px] leading-[17px] top-0 -translate-y-1/2 left-4 text-[#6C25FF]'>
                        Full Name<span className='text-[#DD4A3D]'>*</span>
                    </span>
                </div>

                <div className='relative mt-[1.813rem] w-full'>
                    <input type="text"
                        className='w-full py-3 border border-[#CBCBCB]
                    text-[#1D2226] rounded-md px-4 outline-none text-sm leading-[12px]'
                        value={'Marry Doe'}
                        readOnly
                    />
                    <span className='w-[6rem] px-[5px]  bg-white absolute text-[13px] leading-[17px] top-0 -translate-y-1/2 left-4 text-[#6C25FF]'>
                        Phone&nbsp;number<span className='text-[#DD4A3D]'>*</span>
                    </span>
                </div>

                <div className='relative mt-[1.813rem] w-full'>
                    <input type="email"
                        className='w-full py-3 border border-[#CBCBCB]
                    text-[#1D2226] rounded-md px-4 outline-none text-sm leading-[12px]'
                        value={'Marry Doe'}
                        readOnly
                    />
                    <span className='w-[6rem] px-[5px]  bg-white absolute text-[13px] leading-[17px] top-0 -translate-y-1/2 left-4 text-[#6C25FF]'>
                        Email&nbsp;address<span className='text-[#DD4A3D]'>*</span>
                    </span>
                </div>

                <div className='relative mt-[1.813rem] w-full'>
                    <input type="text"
                        className='w-full py-3 border border-[#CBCBCB]
                    text-[#1D2226] rounded-md px-4 outline-none text-sm leading-[12px]'
                        value={'Marry Doe'}
                        readOnly
                    />
                    <span className='w-[6rem] px-[5px]  bg-white absolute text-[13px] leading-[17px] top-0 -translate-y-1/2 left-4 text-[#6C25FF]'>
                        Phone&nbsp;number<span className='text-[#DD4A3D]'>*</span>
                    </span>
                </div>

                <div className='relative mt-[1.813rem] w-full'>
                    <input type="text"
                        className='w-full py-3 border border-[#CBCBCB]
                    text-[#1D2226] rounded-md px-4 outline-none text-sm leading-[12px]'
                        value={'Marry Doe'}
                        readOnly
                    />
                    <span className='w-[6rem] px-[5px]  bg-white absolute text-[13px] leading-[17px] top-0 -translate-y-1/2 left-4 text-[#6C25FF]'>
                        Password<span className='text-[#DD4A3D]'>*</span>
                    </span>
                </div>

                <div className='relative mt-[1.813rem] w-full'>
                    <input type="text"
                        className='w-full py-3 border border-[#CBCBCB]
                    text-[#1D2226] rounded-md px-4 outline-none text-sm leading-[12px]'
                        value={'Marry Doe'}
                        readOnly
                    />
                    <span className='w-[6rem] px-[5px]  bg-white absolute text-[13px] leading-[17px] top-0 -translate-y-1/2 left-4 text-[#6C25FF]'>
                        Company&nbsp;name
                    </span>
                </div>

                <div className="mt-4.5 space-y-2">
                    <label className="block text-[13px] text-[#1D2226] leading-[17px]">
                        Are you an Agency?<span className="text-red-500">*</span>
                    </label>

                    <div className="flex items-center space-x-6">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="agency"
                                value="Yes"
                                checked={changeButton === "Yes"}
                                className="w-5.5 h-5.5 accent-[#6C25FF]"
                                onChange={(e) => setChangeButton(e.target.value)}
                            />
                            <span className="text-gray-800">Yes</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="agency"
                                value="No"
                                checked={changeButton === "No"}
                                className="w-5.5 h-5.5 accent-[#6C25FF]"
                                onChange={(e) => setChangeButton(e.target.value)}
                            />
                            <span className="text-gray-800">No</span>
                        </label>
                    </div>
                </div>

            </div>

            <div className='flex-1 flex items-end'>
                <button
                    className=' w-full py-3.5 bg-[#6C25FF] font-medium text-[#FFFFFF] rounded-md cursor-pointer'
                    onClick={() => navigate('/profile')}
                >
                    Create Account
                </button>
            </div>

        </div>
    )
}

export default Signup