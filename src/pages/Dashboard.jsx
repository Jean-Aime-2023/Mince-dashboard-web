import React from 'react';
import Header from '../components/Header';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';

const Dashboard = ({toggleDarkMode}) => {
  return (
    <div className="flex flex-col bg-[#F9F9F9] dark:bg-[#0F1631] h-screen">
      <Header header="Dashboard" search="true" userProfile="false" toggleDarkMode={toggleDarkMode} />
      <div className='h-full overflow-y-scroll scrollbar-hidden flex flow-row p-10 gap-10'>
        <div className='h-full w-8/12'><RightSide/></div>
        <div className='h-full w-4/12'><LeftSide/></div>
      </div>
    </div>
  );
};

export default Dashboard;