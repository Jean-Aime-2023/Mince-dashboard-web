import React from 'react';
import Header from '../components/Header';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const GetHelpPage = ({toggleDarkMode}) => {
  return (
    <div className="flex flex-col gap-3 bg-[#F9F9F9] dark:bg-[#0F1631] h-screen">
      <Header header="Get Help" search={false} userProfile="false" toggleDarkMode={toggleDarkMode} />
      <div className='flex flex-row h-full mx-10 my-5 justify-center items-center text-2xl gap-5'>
      <HourglassBottomIcon style={{ fontSize: 40, color: '#5547D7' }} />
        Coming soon 🥱
      </div>
    </div>
  );
};

export default GetHelpPage;
