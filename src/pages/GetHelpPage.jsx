import React from 'react';
import Header from '../components/Header';

const GetHelpPage = () => {
  return (
    <div className="flex flex-col gap-3 bg-[#F9F9F9]">
      <Header header="Get Help" search={false} userProfile="false" />
    </div>
  );
};

export default GetHelpPage;
