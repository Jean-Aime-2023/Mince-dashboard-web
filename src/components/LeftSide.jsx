import React from 'react';
import img from '../assets/images/brac.png';
import { WorkingData } from '../data/Working';
import { Link } from 'react-router-dom';
import CustomizedTables from './Table';
import EmployeeList from './DataTable1';

const LeftSide = () => {
  return (

    <div className='w-full h-full'>
      <div className="bg-[#1B1D52] flex justify-between px-12 py-10 rounded-md relative max-md:flex-col max-lg:px-5 max-lg:py-5 max-h-[262px]` hover:shadowHover">
      <div className="flex flex-col gap-4 items-start text-white">
          <h3 className="text-xl font-semibold">
            Payment Has never been easier!
          </h3>
          <p className="text-sm font-light max-sm:text-xs">
            Streamline transactions with a simple tap. Stylish, secure, and
            accepted <br /> everywhere. Upgrade to effortless payments today!
          </p>
          <button className="bg-[#5547D7] hover:bg-[#7164e2] text-md rounded-md flex max-md:text-sm items-center text-center px-11 py-2 justify-center">
            Order Now
          </button>
        </div>
        <div className="max-lg:hidden absolute top-2 -right-10">
          <img src={img} alt="" className="w-[80%]" />
        </div>
      </div>

      <div className='h-full overflow-y-scroll scrollbar-hidden pt-7 '>
      <div className="flex flex-col gap-12 h-full overflow-y-scroll scrollbar-hidden ">
        <div className="flex flex-col gap-6">
        <h2 className="text-[#6B6B6B] text-xl dark:text-white">
          Explore your working
        </h2>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-lg:gap-4">
          {WorkingData.map((item, index) => (
            <div
              className="flex flex-row max-xl:flex-col max-md:flex-col max-md:gap-8 justify-between items-center bg-white dark:bg-[#0A1027] px-8 py-4 rounded-xl"
              id={index}
            >
              <div className="flex flex-col items-start gap-3">
                <section className="flex gap-3 items-center">
                  <p className="text-[#002159] text-xl max-md:text-lg font-semibold dark:text-[#5547D7]">
                    {item.state}
                  </p>{' '}
                  <span>{item.icon}</span>
                </section>
                <p className="text-[#949494]">{item.desc}</p>
                <Link
                  to="/"
                  className="underline decoration-solid text-[#5547D7] cursor-pointer"
                >
                  See All
                </Link>
              </div>
              <div className="w-[150px] h-[150px]">{item.chart}</div>
            </div>
          ))}
        </div>
      </div>


      <div className="flex flex-col gap-6">
        <div className='flex flex-row justify-between'>
        <h2 className="text-[#6B6B6B] text-xl dark:text-white">
          Transaction History
        </h2>
        <span className='underline decoration-solid text-[#5547D7] cursor-pointer'>View All</span>
        </div>

        <div className='pb-[20rem]'>
            <EmployeeList/>
        </div>
      </div>

    </div>
      </div>


    </div>
    
  );
};

export default LeftSide;
