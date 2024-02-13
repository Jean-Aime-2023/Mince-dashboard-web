import { useState } from 'react';
import logo from '../assets/logos/mince.png';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaClipboardList } from 'react-icons/fa6';
import { FaChevronDown } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { FaBoxesStacked } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [subMenuStates, setSubMenuStates] = useState({
    Activities: false,
  });

  const Menus = [
    { title: 'Dashboard', icon: <FaClipboardList />, to: '/' },
    { title: 'Wallet', icon: <CiWallet />, to: '/wallet' },
    {
      title: 'Activities',
      icon: <FaBoxesStacked />,
      subMenu: true,
      to:false,
      subMenuItems: [
        { title: 'Contracts', to: '/activities/contracts/' },
        { title: 'Deals', to: '/activities/deals/' },
      ],
    },
    { title: 'Analytics', icon: <FaChartPie />, to: '/analytics' },
    { title: 'Settings', icon: <FaGear />, spacing: true, to: '/settings' },
    { title: 'Get Help', icon: <FaCircleQuestion />, to: '/gethelp' },
  ];

  const toggleSubMenu = (menuTitle) => {
    setSubMenuStates((prevState) => ({
      ...prevState,
      [menuTitle]: !prevState[menuTitle],
    }));
  };

  const firstFourItems = Menus.slice(0, 4);
  const lastTwoItems = Menus.slice(-2);

  const navigate = useNavigate();

  return (
    <div
      className={`darkBlueBg h-screen p-3 pt-8 ${
        open ? 'w-72' : 'w-20 p-4'
      } duration-300 relative`}
    >
      <FaArrowLeft
        className={`bg-white p-2 textDarkBlue rounded-lg text-4xl absolute -right-6 top-16 border border-blue-950 cursor-pointer ${
          !open && 'rotate-180'
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex gap-4 mt-10 h-[10%] cursor-pointer">
        <img
          src={logo}
          alt="/"
          className={`logoMince block float-left duration-500 ${
            open && 'rotate-[360deg]'
          }`}
        />
        <h1 className={`minceText duration-300 ${!open && 'scale-0'}`}>
          MinceTech
        </h1>
      </div>

      <div className="h-[90%] flex flex-col pb-14">
        <ul className="pt-2">
          {firstFourItems.map((menu, index) => (
            <React.Fragment key={index}>
              <li
                className={`text-white text-lg flex items-center gap-x-4 cursor-pointer p-4 hover:bg-[#830FFF23] rounded-md justify-between ${
                  menu.spacing ? 'mt-9' : 'mt-2'
                }`}
                onClick={() => navigate(menu.to)}
              >
                <Link className="flex gap-5">
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <FaClipboardList />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && 'hidden'
                    }`}
                  >
                    {menu.title}
                  </span>
                </Link>
                {menu.subMenu && open && (
                  <FaChevronDown
                    size={16}
                    className={`duration-200 ${
                      subMenuStates[menu.title] &&
                      'rotate-180 ease-in-out'
                    }`}
                    onClick={() => toggleSubMenu(menu.title)}  
                  />
                )}
              </li>

              {menu.subMenu && subMenuStates && open && (
                <ul className=' transition-all duration-200 ease-in-out'>
                  {menu.subMenuItems.map((subMenuItem, index) => (
                    <li
                    onClick={() => navigate(menu.to)}
                      key={index}
                      className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-5 ml-4 hover:bg-[#830FFF23] rounded-md"
                    >
                      <Link
                        to={`/${subMenuItem.title.toLowerCase()}/${menu.to}`}
                      >
                        {' '}
                        {subMenuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>

        <div className="mt-auto">
          {lastTwoItems.map((menu, index) => (
            <li
              key={index}
              className={`text-white text-lg flex items-center gap-x-4 cursor-pointer p-4 hover:bg-[#830FFF23] rounded-md ${
                menu.spacing ? 'mt-9' : 'mt-2'
              }`}
              onClick={() => navigate(menu.to)}
            >
              <Link className="flex gap-5">
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <FaClipboardList />}
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && 'hidden'
                  }`}
                >
                  {menu.title}
                </span>
              </Link>
              {menu.subMenu && open && (
                <FaChevronDown
                  className={`${subMenuStates[menu.title] && 'rotate-180'}`}
                  onClick={() => toggleSubMenu(menu.title)}
                />
              )}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
