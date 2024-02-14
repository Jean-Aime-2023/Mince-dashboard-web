import React from 'react';
import Header from '../components/Header';

const ContractPage = () => {
  return (
    <div className="flex flex-col gap-3 bg-[#F9F9F9]">
      <Header header="Contracts" search="true" userProfile="false" />
    </div>
  );
};

export default ContractPage;
