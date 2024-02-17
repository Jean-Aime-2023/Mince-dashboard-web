import React from 'react';
import Header from '../components/Header';
import LeftSide from '../components/RightSide';
import RightSide from '../components/LeftSide';

const Dashboard = ({toggleDarkMode}) => {
  return (
    <div className="flex flex-col bg-[#F9F9F9] dark:bg-[#0F1631] h-screen">
      <Header header="Dashboard" search="true" userProfile="false" toggleDarkMode={toggleDarkMode} />
      
      <div className='h-screen flex flow-row p-10 gap-10 max-lg:flex-col'>
        <div className='w-[70%] max-md:w-full py-3'><RightSide/></div>
        <div className='w-[30%] max-md:hidden'><LeftSide/></div>
      </div>
      
    </div>
  );
};

export default Dashboard;