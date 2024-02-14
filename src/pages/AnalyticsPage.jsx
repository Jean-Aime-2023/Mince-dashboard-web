import React from 'react';
import Header from '../components/Header';

const AnalyticsPage = () => {
  return (
    <div className="flex flex-col gap-3 bg-[#F9F9F9]">
      <Header header="Analytics" search="true" userProfile="false" />
    </div>
  );
};

export default AnalyticsPage;
