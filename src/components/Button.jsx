import React from 'react'

const Button = ({ action,icon }) => {
  return (
    <div>
      <button className="bg-[#5547D7] hover:bg-[#7164e2] text-white text-md rounded-md flex max-md:text-sm items-center text-center px-11 py-2 justify-center flex-row gap-2">
        <span>{icon}</span>
        <span>{action}</span>
      </button>
    </div>
  )
}

export default Button