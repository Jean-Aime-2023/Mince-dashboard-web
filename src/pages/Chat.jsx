import React from 'react'
import Header from '../components/Header'

const Chat = ({ toggleDarkMode }) => {
    return (
        <div className="flex flex-col gap-3 bg-[#F9F9F9] dark:bg-[#0F1631] h-screen">
            <Header header="Messages" search="true" userProfile="false" toggleDarkMode={toggleDarkMode} />
            <div className='flex flex-col mx-10 my-5'>
                Chat
            </div>
        </div>
    )
}

export default Chat