import React from 'react';
import Header from '../components/Header';

const ContractPage = ({toggleDarkMode}) => {
  return (
    <div className="flex flex-col gap-3 bg-[#F9F9F9] dark:bg-[#0F1631] h-screen">
      <Header header="Contracts" search="true" userProfile="false" toggleDarkMode={toggleDarkMode} />
      <div className=''> hi</div>
    </div>
  );
};

export default ContractPage;
