import React from 'react';
import { Switch } from 'antd';
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const Toggle = () => <Switch defaultChecked onChange={onChange} className='bg-slate-500' />;

const FilterDrop = ({openProfile,toggleDarkMode}) => {
  return (
    <div className={` ${openProfile ? "flex": "hidden"} bg-white p-5 rounded-xl flex flex-col gap-6 dark:text-[#CECACAC9] dark:bg-[#0A1027]`}>
      <ul>
                
      </ul>
    </div>
  );
};

export default FilterDrop;
