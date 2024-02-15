import React from 'react'
import SingleNotification from './SingleNotification'

const Notifications = ({openNotif}) => {
  return (
    <div className={` ${openNotif ? "flex": "hidden"}  flex-col justify-center items-center shadow-2xl `}>
        {/* <div><UpIcon/></div> */}
        <div className='bg-white py-5 px-6 rounded-xl max-w-[500px] dark:bg-[#0A1027]'>
          <h2 className=' text-center mb-10 text-2xl font-bold'>Notifications</h2>
           <p className='relative'>
            <span className='absolute right-4 underline decoration-solid text-[#5547D7] cursor-pointer'>Clear All</span>
           </p>
           <h1 className='mb-6 text-[#0A1027] text-[20px] font-semibold dark:text-[#CECACAC9]'>Today</h1>
           <SingleNotification action="Accept the Request" iconBg="#5F4BBF" text="Ange Nadette has invited you to  the  lease contract." bgNotif="#947FFA" border="#5547D7" />
           <SingleNotification action="Go premium" iconBg="#5F4BBF" text="Upgrade to premium and unlock all features" bgNotif="#947FFA" border="#5547D7" />
           <h1 className='mb-6 text-[#0A1027] text-[20px] mt-10 font-semibold dark:text-[#CECACAC9]'>Yesterday</h1>
           <SingleNotification action="Confirm account" iconBg="#F12222" text="Device iphone 15 pro max is trying to login in your account.Verify if it’s you" bgNotif="#D82E2B1A" border="#D82E2B" />
           <SingleNotification action="Go premium" iconBg="#5F4BBF" text="Upgrade to premium and unlock all features" bgNotif="#947FFA" border="#5547D7" />
           <h1 className='mb-6 text-[#0A1027] text-[20px] mt-10 font-semibold dark:text-[#CECACAC9]'>Last Month</h1>
           <SingleNotification action={null} iconBg="#EC6A2C" text="Karangwa Ines wants to negotiate with you on RRA appeal" bgNotif="#EC6A2C1A" border="#EC6A2C" />
           <SingleNotification action={null} iconBg="#67AD5B" text="Emmanuel Cyubahiro just uploaded $500 on the escrow services " bgNotif="#67AD5B1A" border="#67AD5B" />
           <SingleNotification action="Go premium" iconBg="#5F4BBF" text="Upgrade to premium and unlock all features" bgNotif="#947FFA" border="#5547D7" />
        </div>
    </div>
  ) 
}

export default Notifications