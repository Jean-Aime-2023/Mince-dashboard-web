import React, { useState } from 'react'
import Header from '../components/Header'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '../components/Button';
import Agreement from '../assets/images/Agreement.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function CustomInput({value,onClick}){
    return(
        <div className='flex flex-row gap-2 items-center'>
            <input type="text" value={value} onClick={onClick} className='border border-gray-300 rounded-xl py-3 px-4 focus:outline-none outline-none w-full' readOnly />
            <div>
                <span>
                    <CalendarMonthIcon style={{ fontSize: 35 }} />
                </span>
            </div>
        </div>
    )
}

const NewContract = ({ toggleDarkMode }) => {
    const [selectedDate,setDate] = useState(null)
    return (
        <div className="flex flex-col gap-3 bg-[#F9F9F9] dark:bg-[#0F1631] h-screen">
            <Header header="New Contract" search={false} userProfile="false" toggleDarkMode={toggleDarkMode} />
            <div className='flex flex-col mx-10 my-5 gap-7'>
                <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5'>
                    <div className='flex flex-col gap-3 p-5 bg-white rounded-xl shadow-lg'>
                        <section className='flex flex-row justify-between'>
                            <p className='text-[#6B6B6B] text-xl'>Step 1</p>
                            <p className='text-[#5547D7]'>Update</p>
                        </section>
                        <section className='flex flex-row gap-4'>
                            <p className='font-semibold'>Draft</p>
                            <CheckCircleIcon />
                            <p className='text-gray-500 px-2 text-sm text-center bg-gray-300 rounded-xl'>1/3</p>
                        </section>
                        <hr className='border-2 border-blue-800' />
                    </div>
                    <div className='flex flex-col gap-3 p-5 bg-white rounded-xl shadow-lg'>
                        <section className='flex flex-row justify-between'>
                            <p className='text-[#6B6B6B] text-xl'>Step 2</p>
                        </section>
                        <section className='flex flex-row gap-4'>
                            <p className='font-semibold'>Invitation</p>
                            <CheckCircleIcon />
                            <p className='text-gray-500 px-2 text-sm text-center bg-gray-300 rounded-xl'>0/3</p>
                        </section>
                        <hr className='border-2 border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-3 p-5 bg-white rounded-xl shadow-lg'>
                        <section className='flex flex-row justify-between'>
                            <p className='text-[#6B6B6B] text-xl'>Step 3</p>
                        </section>
                        <section className='flex flex-row gap-4'>
                            <p className='font-semibold'>Negotiation</p>
                            <CheckCircleIcon />
                            <p className='text-gray-500 px-2 text-sm text-center bg-gray-300 rounded-xl'>0/3</p>
                        </section>
                        <hr className='border-2 border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-3 p-5 bg-white rounded-xl shadow-lg'>
                        <section className='flex flex-row justify-between'>
                            <p className='text-[#6B6B6B] text-xl'>Step 4</p>
                        </section>
                        <section className='flex flex-row gap-4'>
                            <p className='font-semibold'>eSignature</p>
                            <CheckCircleIcon />
                            <p className='text-gray-500 px-2 text-sm text-center bg-gray-300 rounded-xl'>0/3</p>
                        </section>
                        <hr className='border-2 border-gray-300' />
                    </div>
                </div>

                <div className='flex flex-row w-[100%] h-[42rem]'>
                    <div className='w-[30%] rounded-xl flex flex-col gap-10 bg-white px-6 py-20 shadow-xl justify-cente'>
                        <section className='flex flex-row text-[#5547D7] justify-between'>
                            <p className='text-xl'>Sides</p>
                            <p className='underline'>Invite a partner</p>
                        </section>
                        <input type="text" placeholder='You' className='py-3 px-6 border border-gray-300 rounded-2xl focus:outline-none outline-none' />
                        <section className='flex flex-row text-[#5547D7] justify-between'>
                            <p className='text-xl'>Date</p>
                        </section>
                        <Datepicker selected={selectedDate} onChange={date=>setDate(date)} customInput={<CustomInput/>} />
                        <div className='flex justify-center mt-5'>
                            <Button action={'New Contract'} icon={false} bg={'#5547D7'} hoverBg={'#7094db'} />
                        </div>
                    </div>

                    <div className='w-[70%] flex flex-row text-center justify-center items-center object-contain gap-5'>
                        <section className='flex flex-row items-center gap-1'>
                            <IconButton size="small">
                                <ArrowBackIosIcon style={{ fontSize: 20 }} />
                            </IconButton>
                            <p>prev</p>
                        </section>
                        <section>
                            <img src={Agreement} alt="" className='h-[42rem]' />
                        </section>
                        <section className='flex flex-row items-center gap-1'>
                            <p>next</p>
                            <IconButton size="small">
                                <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewContract