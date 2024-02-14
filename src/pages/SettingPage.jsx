import React from 'react';
import Header from '../components/Header';

const SettingPage = () => {
  return (
    <div className="flex flex-col gap-3 bg-[#F9F9F9]">
      <Header header="Settings" search={false} userProfile="false" />
    </div>
  );
};

export default SettingPage;
