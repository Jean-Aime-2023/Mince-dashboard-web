import React from 'react'

const ImageText = ({ img, name }) => {
  return (
    <div className='flex flex-row gap-5 items-center'>
      <div><img src={img} alt="" className='h-10 w-10 rounded-full' /></div>
      <p>{name}</p>
    </div>
  )
}

export default ImageText