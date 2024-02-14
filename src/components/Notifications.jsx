import React from 'react'
import UpIcon from "./UpIcon"
import SingleNotification from './SingleNotification'

const Notifications = () => {
  return (
    <div className='z-20 absolute top-20 right-2 flex flex-col justify-center items-center'>
        <div><UpIcon/></div>
        <div className='bg-white py-10 px-6 rounded-xl'>
           <h1 className='mb-6 text-[#0A1027] text-[23px] font-semibold'>Today</h1>
           <SingleNotification action="Accept the Request" iconBg="#EAEAEA" text="Ange Nadette has invited you to  the  lease contract." bgNotif="#F0F0F0" border="#5547D7" />
           <SingleNotification action="Go premium" iconBg="#EAEAEA" text="Upgrade to premium and unlock all features" bgNotif="#F0F0F0" border="#5547D7" />
           <h1 className='mb-6 text-[#0A1027] text-[23px] mt-10 font-semibold'>Yesterday</h1>
           <SingleNotification action="Confirm account" iconBg="#EAEAEA" text="Device iphone 15 pro max is trying to login in your account.Verify if it’s you" bgNotif="#D82E2B1A" border="#D82E2B" />
           <SingleNotification action="Go premium" iconBg="#EAEAEA" text="Upgrade to premium and unlock all features" bgNotif="#F0F0F0" border="#5547D7" />
           <h1 className='mb-6 text-[#0A1027] text-[23px] mt-10 font-semibold'>Last Month</h1>
           <SingleNotification action={null} iconBg="#EC6A2C" text="Karangwa Ines wants to negotiate with you on RRA appeal" bgNotif="#EC6A2C1A" border="#EC6A2C" />
           <SingleNotification action={null} iconBg="#67AD5B" text="Emmanuel Cyubahiro just uploaded $500 on the escrow services " bgNotif="#67AD5B1A" border="#67AD5B" />
           <SingleNotification action="Go premium " iconBg="#EAEAEA" text="Upgrade to premium and unlock all features" bgNotif="#F0F0F0" border="#5547D7" />
        </div>
    </div>
  ) 
}

export default Notifications