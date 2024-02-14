import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

const SingleNofication = ({text,bgNotif,action,border}) => {
  return (
    <div className={`bg-${bgNotif} border-l-0 border-l-${border} notificationBorder py-5 px-3`}>
      <div className=' flex flow-row justify-between items-center'>
      <div className='flex flex-col gap-1'>
      <p>{text}</p> 
      <p className='underline decoration-solid text-[#5547D7]'>{action}</p>
      </div>
      <div className={`bg-${bgNotif} p-2`}>
      <AiOutlineClose className='text-2xl' fill='white' />
      </div>
      </div>
    </div>
  )
}

export default SingleNofication