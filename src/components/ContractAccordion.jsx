import React, { useState } from 'react';
import SquareIcon from '@mui/icons-material/Square';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Button from './Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ContractAccordion = () => {
    const [openAcc, setOpenAccord] = useState(false);

    const toggleAcc = () => {
        setOpenAccord(!openAcc);
    }

    return (
        <div className='shadow-xl rounded-xl flex flex-row flex-wrap justify-between py-7 px-8 cursor-pointer border border-t-gray-200 bg-white'>
            <div className='flex flow-row justify-between gap-5'>
                <section><SquareIcon style={{ color: '#5547D7', borderRadius: '10px' }} /></section>
                <span>423</span>
            </div>

            <div className='flex flex-col gap-2'>
                <section className='flex flex-row gap-6'>
                    <img
                        src="https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="/"
                        className="w-[35px] h-[35px] rounded-full"
                    />
                    <p>Kirezi Livia</p>
                </section>

                {/* Conditionally render details div */}
                {openAcc && (
                    <div className="flex flex-col gap-3"> 
                    <section className='flex gap-2'>
                        <span><FiberManualRecordIcon style={{ color: '#67AD5B' }} /></span>
                        <p>Lease Contract</p>
                    </section>
                    <hr className='border border-gray-300' />
                    <section className='flex gap-2'>
                        <span><FiberManualRecordIcon style={{ color: '#EC6A2C' }} /></span>
                        <p>Handover_Protocol</p>
                    </section>
                    <hr className='border border-gray-300' />
                    <section className='flex gap-2'>
                        <span><FiberManualRecordIcon style={{ color: '#EC6A2C' }} /></span>
                        <p>Amendement</p>
                    </section>
                    <hr className='border border-gray-300' />
                    <section className='flex gap-2'>
                        <span><FiberManualRecordIcon style={{ color: '#EC6A2C' }} /></span>
                        <p>Back_Slip.png</p>
                    </section>
                </div>
                )}
                {/* Conditionally render details div */}

            </div>

            <span>4</span>

            <span>Lease</span>

            <span>$ 6700</span>

            <section><p className='px-4 py-2 text-lg bg-[#b3ffb3] rounded-xl text-[#67AD5B]'>Accepted</p></section>

            {/* Toggle button and buttons div */}
            <section className='flex flex-col justify-between items-center'>
                <KeyboardArrowDownIcon
                    onClick={toggleAcc}
                    style={{ transform: openAcc ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                />
                {openAcc && (
                    <div className='flex flex-col gap-6 justify-center items-center'>
                        <div className=''><Button action={'Add doc'} icon={false} bg={'#5547D7'} hoverBg={'#7094db'} /></div>
                        <div className=''><Button action={'Message'} icon={false} bg={'#5547D7'} hoverBg={'#7094db'} /></div>
                        <div className=''><Button action={'Share....'} icon={false} bg={'#5547D7'} hoverBg={'#7094db'} /></div>
                    </div>
                )}
            </section>
            {/* Toggle button and buttons div */}
        </div>
    )
}

export default ContractAccordion;
