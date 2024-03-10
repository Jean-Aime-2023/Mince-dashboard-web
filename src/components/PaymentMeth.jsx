import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";
import { IoMdWallet } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import logo1 from '../assets/logos/download-removebg-preview 1.png'
import logo2 from '../assets/logos/momo-removebg-preview 1.png'
import logo3 from '../assets/logos/Group 37487.png'
import logo4 from '../assets/logos/Logo.png'

const PaymentMeth = ({ openProfile, toggleDarkMode }) => {
  return (
    <div className={` ${openProfile ? "flex" : "hidden"} bg-white p-5 rounded-xl flex flex-col gap-6 dark:text-[#CECACAC9] dark:bg-[#0A1027]`}>
      <ul className="p-">
        <li>
          <Link
            to=""
            className="flex flex-row gap-3 hover:bg-slate-200 dark:hover:bg-[#232262] p-3 rounded-xl"
          >
            <div>
              <img src={logo1} alt="" />
            </div>
            <p>BK Card</p>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex flex-row gap-3 hover:bg-slate-200 dark:hover:bg-[#232262] p-3 rounded-xl"
          >
            <div>
              <img src={logo2} alt="" />
            </div>
            <p>Momo Pay</p>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex flex-row gap-3 hover:bg-slate-200 dark:hover:bg-[#232262] p-3 rounded-xl"
          >
            <div>
              <img src={logo3} alt="" />
            </div>
            <p>Paypal</p>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex flex-row gap-3 hover:bg-slate-200 dark:hover:bg-[#232262] p-3 rounded-xl text-red-600 items-center"
          >
            <div>
              <img src={logo4} alt="" />
            </div>
            <p>Mastercard</p>
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default PaymentMeth;
