import React, { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button'
import { FaPlus } from "react-icons/fa6";
import { LuTrendingUp } from "react-icons/lu";
import { LuTrendingDown } from "react-icons/lu";
import { GoTriangleDown } from "react-icons/go";
import Card1 from '../assets/images/Mask group.png'
import Card2 from '../assets/images/Mask group (2).png'
import Card3 from '../assets/images/Mask group (1).png'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import CountrySelector from '../components/CountrySelector';
import LinkSvg from '../assets/svg/Links';
import { GoArrowUpRight } from "react-icons/go";
import { HiMiniArrowDownLeft } from "react-icons/hi2";
import { FaExclamation } from "react-icons/fa6";
import PaymentMeth from '../components/PaymentMeth';


const WalletPage = ({ toggleDarkMode }) => {
  const [openPay, setopenPay] = useState(false);
  const toggleOpenPay = () => {
    setopenPay(!openPay)
  }
  return (
    <div className="flex flex-col gap-3 bg-[#F9F9F9] dark:bg-[#0F1631] h-screen">
      <Header header="Wallet" search="true" userProfile="false" toggleDarkMode={toggleDarkMode} />
      <div className='flex flex-row h-screen'>
        <div className='w-[70%] h-full flex flex-col gap-10 p-6 px-10'>


          <div className='darkBg rounded-xl w-full p-8 flex flex-col gap-5'>
            <p className='text-[#6B6B6B] text-lg'>Your Total Balance</p>
            <section className='lg:flex flex-row max-md:flex-col gap-5 justify-between'>
              <span className='font-bold text-5xl text-white'>$ 5,672.55</span>
              <Button icon={<FaPlus />} action="Add Money To Wallet" />
            </section>
            <section className='lg:flex flex-row gap-3 max-lg:gap-6 px-4 py-2'>
              <div className='flex flex-col justify-center gap-2 bg-white px-5 py-3 rounded-lg'>
                <p className='text-xl font-semibold flex items-center gap-3'><span><LuTrendingUp color='green' /></span> $500.02</p>
                <p className='font-light'>Today's Income</p>
              </div>
              <div className='flex flex-col justify-center gap-2 bg-white px-5 py-3 rounded-lg'>
                <p className='text-xl font-semibold flex items-center gap-3'><span><LuTrendingDown color='red' /></span> $500.02</p>
                <p className='font-light'>Today's Expenses</p>
              </div>
              <div className='flex flex-col justify-center gap-2 bg-white px-5 py-3 rounded-lg'>
                <p className='text-xl font-semibold flex items-center gap-3'><span><LuTrendingUp color='green' /></span> $10.02</p>
                <p className='font-light'>Escrow Savings</p>
              </div>
            </section>
          </div>


          <div className='relative flex flex-row gap-7 max-md:flex-col w-full bg-red overflow-y-scroll mb-[5rem] scrollbar-hidden'>
            <div className='flex flex-col w-[30%]'>
              <div onClick={() => toggleOpenPay()} className='flex flex-row gap-3 text-[#B1B1B1] cursor-pointer items-center'>
                <p className='pl-7'>Payment Method</p>
                <span><GoTriangleDown /></span>
              </div>
              <div className='flex flex-col w-full'>
                <img src={Card1} alt="card 1" className='cursor-pointer' />
                <img src={Card2} alt="card 1" className='cursor-pointer' />
                <img src={Card3} alt="card 1" className='cursor-pointer' />
              </div>
            </div>
            <div className='flex flex-col w-[70%] px-8 py-5 bg-white rounded-xl dark:bg-[#0A1027] dark:text-[#6B6B6B] shadow-md'>
              <section className='flex justify-center'><img src={Card1} alt="" className='h-[20rem] cursor-pointer' /></section>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-row justify-between items-center'>
                  <p className='text-2xl font-semibold'>Card Details</p>
                  <span className='border-2 border-gray-300 p-1 rounded-full'><HiOutlineDotsHorizontal className='cursor-pointer text-4xl text-gray-500' width={30} /></span>
                </div>
                <section className='flex flex-row justify-between max-md:flex-col'>
                  <div className='flex flex-col'>
                    <p>Card Holder Name</p>
                    <p className='text-xl font-semibold'>Austin Hammond</p>
                  </div>
                  <div className='flex flex-col'>
                    <p>Card Number</p>
                    <p className='text-xl font-semibold'>345234565432</p>
                  </div>
                </section>
                <div className='flex flex-col gap-3'>
                  <p>Card Number</p>
                  <p className='text-2xl font-bold'>345234565432</p>
                </div>
              </div>
            </div>
            <div className={`absolute right-0 z-20 ${!openPay ? 'block' : 'hidden'} `}><PaymentMeth /></div>
          </div>


        </div>
        <div className='w-[30%] h-full flex flex-col gap-9 p-6 overflow-y-scroll scrollbar-hidden dark:text-[#929292]'>
          <div className='flex flex-col gap-6 bg-white dark:bg-[#0A1027] p-7 rounded-xl shadow-md'>
            <section className='flex justify-between'>
              <p className='font-medium text-lg'>Money Exchange</p>
              <LinkSvg />
            </section>
            <div className='flex flex-col gap-3'>
              <CountrySelector />
              <CountrySelector />
            </div>
          </div>

          <div className='flex flex-col gap-6 bg-white dark:bg-[#0A1027] p-7 rounded-xl shadow-md dark:text-[#6B6B6B]'>
            <section className='flex justify-between'>
              <p className='font-medium text-lg'>Recent Transactions</p>
              <span className='underline decoration-solid text-[#5547D7] cursor-pointer'>Clear All</span>
            </section>

            <div className='flex items-center justify-between py-3 cursor-pointer'>
              <section className='flex items-center gap-3'>
                <img className="w-[35px] h-[35px] rounded-full" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="img" />
                <section className='flex flex-col'>
                  <p className='font-semibold'>Kirezi Livia</p>
                  <p className='text-sm'>January 24 , 2022</p>
                </section>
              </section>
              <div className='bg-red-200 text-red-600 flex items-center gap-2 px-4 py-1 rounded-xl text-sm'>
                <GoArrowUpRight className='bg-red-600 text-white rounded-full p-1' size={20} />
                <p>Sent</p>
              </div>
            </div>
            <div className='flex items-center justify-between py-3 cursor-pointer'>
              <section className='flex items-center gap-3'>
                <img className="w-[35px] h-[35px] rounded-full" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="img" />
                <section className='flex flex-col'>
                  <p className='font-semibold'>Kenny Sol</p>
                  <p className='text-sm'>February 24 , 2022</p>
                </section>
              </section>
              <div className='bg-green-200 text-green-600 flex items-center gap-2 px-4 py-1 rounded-xl text-sm'>
                <HiMiniArrowDownLeft className='bg-green-600 text-white rounded-full p-1' size={20} />
                <p>Received</p>
              </div>
            </div>
            <div className='flex items-center justify-between py-3 cursor-pointer'>
              <section className='flex items-center gap-3'>
                <img className="w-[35px] h-[35px] rounded-full" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="img" />
                <section className='flex flex-col'>
                  <p className='font-semibold'>Nadette Batete</p>
                  <p className='text-sm'>April 9 , 2022</p>
                </section>
              </section>
              <div className='bg-orange-200 text-orange-600 flex items-center gap-2 px-4 py-1 rounded-xl text-sm'>
                <FaExclamation className='bg-orange-600 text-white rounded-full p-1' size={20} />
                <p>Pending</p>
              </div>
            </div>
            <div className='flex items-center justify-between py-3 cursor-pointer'>
              <section className='flex items-center gap-3'>
                <img className="w-[35px] h-[35px] rounded-full" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="img" />
                <section className='flex flex-col'>
                  <p className='font-semibold'>Asifiwe Angele</p>
                  <p className='text-sm'>June 10 , 2022</p>
                </section>
              </section>
              <div className='bg-red-200 text-red-600 flex items-center gap-2 px-4 py-1 rounded-xl text-sm'>
                <GoArrowUpRight className='bg-red-600 text-white rounded-full p-1' size={20} />
                <p>Sent</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WalletPage;
