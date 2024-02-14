import React from 'react'
import UpIcon from "./UpIcon"
import SingleNofication from './SingleNofication'

const Notifications = () => {
  return (
    <div className='z-20 absolute top-20 right-2 flex flex-col justify-center items-center'>
        <div><UpIcon/></div>
        <div className='bg-white py-10 px-6 rounded-xl'>
           <h1 className='mb-6 text-[#0A1027] text-[23px] font-semibold'>Today</h1>
           <SingleNofication action="Accept the Request" text="Ange Nadette has invited you to  the  lease contract." bgNotif="#F0F0F0" border="#5547D7" />
        </div>
    </div>
  ) 
}

export default Notifications