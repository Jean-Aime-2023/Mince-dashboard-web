import React from 'react'
import Header from '../components/Header'

const NewContract = ({toggleDarkMode}) => {
  return (
    <div className="flex flex-col gap-3 bg-[#F9F9F9] dark:bg-[#0F1631] h-screen">
      <Header header="New Contract" search={false} userProfile="false" toggleDarkMode={toggleDarkMode} />
      <div className='flex flex-col mx-10 my-5 gap-7'>
        <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5'>
            <div className='flex flex-col gap-3 px-4 py-2'>
                <section className='flex flex-row justify-between'>
                    <p>Step 1</p>
                    <p className='text-[#5547D7]'>UPdate</p>
                </section>
                <section></section>
                <hr className='border border-blue-800' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewContract