import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

const SingleNotification = ({text, bgNotif, action, border , iconBg}) => {
  return (
    <div className={`notificationBorder py-5 px-3 cursor-pointer my-5`} style={{ backgroundColor: bgNotif, borderLeft: `5px solid ${border}` }}>
      <div className='flex flex-row justify-between items-center gap-5'>
        <div className='flex flex-col gap-1 text-sm'>
          <p>{text}</p> 
          <p className='underline decoration-solid text-[#5547D7]'>{action}</p>
        </div>
        <div style={{ backgroundColor: iconBg }} className="p-2 rounded-full" >
          <AiOutlineClose className='text-lg' fill='black' />
        </div>
      </div>
    </div>
  )
}

export default SingleNotification
