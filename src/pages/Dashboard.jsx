import React from 'react';
import Header from '../components/Header';

const Dashboard = ({toggleDarkMode}) => {
  return (
    <div className="flex flex-col bg-[#F9F9F9] dark:bg-[#0F1631] h-screen">
      <Header header="Dashboard" search="true" userProfile="false" toggleDarkMode={toggleDarkMode} />
      <div className=''> hi</div>
    </div>
  );
};

export default Dashboard;