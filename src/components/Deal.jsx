import React from 'react'
import SquareIcon from '@mui/icons-material/Square';
import Logo from '../assets/logos/Logo.png'
import Button from './Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Deal = ({image,name,detail1,detail2,price1,price2}) => {
    return (
        <div className='shadow-xl rounded-xl flex flex-row justify-between flex-wrap py-7 px-12 cursor-pointer items-center border border-t-gray-200'>
            <div className='flex flex-row gap-5 items-center'>
                <section><SquareIcon style={{ color: '#5547D7', borderRadius: '10px' }} /></section>
                <section className='flex flex-row gap-3 items-center'>
                    <img
                        src={image}
                        alt="/"
                        className="w-[35px] h-[35px] rounded-full"
                    />
                    <p>{name}</p>
                </section>
            </div>

            <div className='flex flex-col gap-5'>
                <section className='flex gap-2'>
                    <span><FiberManualRecordIcon style={{ color: '#67AD5B' }} /></span>
                    <p>{detail1}</p>
                </section>
                <section className='flex gap-2'>
                    <span><FiberManualRecordIcon style={{ color: '#EC6A2C' }} /></span>
                    <p>{detail2}</p>
                </section>
            </div>
            <div className='flex flex-col gap-5'>
                <section>
                    <p>$ {price1}</p>
                </section>
                <section>
                    <p>$ {price2}</p>
                </section>
            </div>
            <div className='flex flex-col gap-5'>
                <section>
                    <img src={Logo} alt="" />
                </section>
                <section>
                    <img src={Logo} alt="" />
                </section>
            </div>
            <div className='flex flex-col gap-5'>
                <section>
                    <Button
                        action={'Payed'}
                        icon={<CheckCircleIcon />}
                        bg={'#5547D7'}
                        hoverBg={'#7094db'}
                    />
                </section>
                <section>
                    <Button
                        action={'Payed'}
                        icon={<CheckCircleIcon />}
                        bg={'#0A1027'}
                        hoverBg={'#334d4d'}
                    />
                </section>
            </div>
            <div className='flex flex-col gap-5 justify-between'>
                <div className='flex flex-row gap-2'>
                <section>
                    <RemoveRedEyeIcon style={{ color: '#5547D7' }} />
                </section>
                <section>
                    <DeleteIcon style={{ color: '#0A1027' }}/>
                </section>
                <section>
                    <DoNotDisturbAltIcon style={{ color: '#D82E2B' }}/>
                </section>
                </div>
                <div className='flex flex-row gap-2'>
                <section>
                    <RemoveRedEyeIcon style={{ color: '#5547D7' }} />
                </section>
                <section>
                    <DeleteIcon style={{ color: '#0A1027' }}/>
                </section>
                <section>
                    <DoNotDisturbAltIcon style={{ color: '#D82E2B' }}/>
                </section>
                </div>
            </div>
        </div>
    )
}

export default Deal