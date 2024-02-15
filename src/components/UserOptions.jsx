import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";
import { IoMdWallet } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { Switch } from 'antd';
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const Toggle = () => <Switch defaultChecked onChange={onChange} className='bg-slate-500' />;

const UserOptions = ({openProfile,toggleDarkMode}) => {
  return (
    <div className={` ${openProfile ? "flex": "hidden"} bg-white p-5 rounded-xl flex flex-col gap-6 dark:text-[#CECACAC9] dark:bg-[#0A1027]`}>
      <ul className="p-">
        <li>
          <Link
            to=""
            className="flex flex-row gap-3 hover:bg-slate-200 dark:hover:bg-[#232262] p-3 rounded-xl"
          >
            <div>
              <HiOutlineUser size={20}/>
            </div>
            <p>Account Profile</p>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex flex-row gap-3 hover:bg-slate-200 dark:hover:bg-[#232262] p-3 rounded-xl"
          >
            <div>
              <IoMdWallet size={20}/>
            </div>
            <p>Wallet</p>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex flex-row gap-3 hover:bg-slate-200 dark:hover:bg-[#232262] p-3 rounded-xl"
          >
            <div>
              <FaGear size={20}/>
            </div>
            <p>Account settings</p>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex flex-row gap-20 hover:bg-slate-200 dark:hover:bg-[#232262] p-3 rounded-xl"
          >
            <p>Theme</p>
            <div onClick={()=>toggleDarkMode()}><Toggle/></div>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex flex-row gap-3 hover:bg-slate-200 dark:hover:bg-[#232262] p-3 rounded-xl text-red-600 items-center"
          > 
            <div> 
            <RiLogoutCircleRLine size={20}/>
            </div>
            <p>Logout</p>
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default UserOptions;
