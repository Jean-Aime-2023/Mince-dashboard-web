import React from 'react'

const Button = ({ action }) => {
  return (
    <div>
      <button className="bg-[#5547D7] hover:bg-[#7164e2] text-white text-md rounded-md flex max-md:text-sm items-center text-center px-11 py-2 justify-center">
        {action}
      </button>
    </div>
  )
}

export default Button