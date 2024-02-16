import React, { useState } from 'react';
import { SidebarData } from '../data/SidebarData';
import { NavLink , useLocation } from 'react-router-dom';
import logo from '../assets/logos/mince.png';
import { CiMenuFries } from 'react-icons/ci';

const Sidebar = () => {
  const [openDrop, setOpenDrop] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleSidebarOpen = () => {
    setOpenSideBar(!openSideBar);
  };
  const closeSidebar = () => {
    if (openSideBar) {
      setOpenSideBar(false);
    }
  };

  const location = useLocation()

  

  const toggleOpenDrop = () => {
    setOpenDrop(!openDrop);
  };
  const firstFourItems = SidebarData.slice(0, 4);
  const lastTwoItems = SidebarData.slice(-2);
  return (
    <>
      <div className="darkBlueBg sidebar max-md:hidden fixed w-[355px] max-lg:w-[230px] h-screen flex flex-col justify-between max-lg:p-7 pt-10 pr-0 pl-10 pb-10 dark:darkModeSidebar">
        {/* logo */}
        <NavLink
          to="/"
          className="h-[11%] flex items-center cursor-pointer mb-10 pr-10"
        >
          <div className="flex flex-row gap-3 items-center">
            <img
              src={logo}
              alt="/"
              className="w-[60px] h-[50px] max-lg:w-[50px] max-lg:h-[40px]"
            />
            <h1 className="minceText text-[23px] duration-300 max-lg:text-lg">
              MinceTech
            </h1>
          </div>
        </NavLink>

        {/* links */}
        <div className="h-[89%] flex flex-col justify-between">
          <div>
            {firstFourItems.map((item, index) => {
              return (
                <li key={index} className={`flex flex-col mt-1 ${location.pathname === item.path ? "pr-0 rounded-none" : "pr-10" }`}>
                  {item.subMenu ? (
                    <NavLink
                      to={item.path}
                      onClick={() => toggleOpenDrop()}
                      className={`flex w-full flex-row items-center gap-24 text-white text-[18px] max-lg:text-[15px] rounded-xl ${location.pathname === item.path ? "" : "" } font-normal py-5 px-4 duration-500 ease-in-out hover:bg-[#830FFF23]`}
                    >
                      <div className="flex flex-row gap-5">
                        <div>{item.icon}</div>
                        <span>{item.title}</span>
                      </div>
                      <div
                        className={`${
                          openDrop
                            ? 'rotate-180 transition-all duration-200 ease-out'
                            : 'transition-all duration-200 ease-out'
                        }`}
                      >
                        {item.down}
                      </div>
                    </NavLink>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={`flex flex-row w-full items-center gap-6 text-white text-[18px] max-lg:text-[15px] rounded-xl font-normal py-5 px-4 ${location.pathname === item.path ? "bg-[#F9F9F9] hover:bg-[#F9F9F9] rounded-[50px] text-blue-950 duration-200 ease-out rounded-tr-none rounded-br-none " : "hover:bg-[#830FFF23]" }`}
                    > <b></b>
                      <b></b>
                      <div>{item.icon}</div>
                      <span>{item.title}</span>
                    </NavLink>
                  )}

                  {item.subMenu && (
                    <ul
                      className={`${
                        openDrop
                          ? 'flex flex-col bg-indigo-950 rounded-md m-3 duration-200 ease-in-out'
                          : 'hidden'
                      }`}
                    >
                      {item.subMenuItems.map((subMenu, indexSub) => (
                        <li
                          key={indexSub}
                          className="flex text-[14px] duration-200 ease-in-out"
                        >
                          <NavLink
                            to={subMenu.to}
                            className="flex w-full pl-9 flex-row items-center text-white text-[16px] max-lg:text-[15px] font-normal rounded-xl py-4 duration-500 ease-in-out hover:bg-[#830FFF23]"
                          >
                            {subMenu.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </div>

          <ul>
            {lastTwoItems.map((item, index) => {
              return (
                <li key={index} className="flex">
                  <NavLink
                    to={item.path}
                    className="flex flex-row w-full items-center gap-6 text-white text-[18px] max-lg:text-[15px] font-normal rounded-xl py-5 px-4 duration-500 ease-in-out hover:bg-[#830FFF23]"
                  >
                    <div>{item.icon}</div>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>












      <div
        className={`${
          openSideBar
            ? ' block fixed w-screen bg-black/70 z-30 transition ease-in-out duration-200'
            : 'hidden'
        }`}
        
      >
        <div className="darkBlueBg w-[355px] max-lg:w-[230px] h-screen relative flex flex-col justify-between max-lg:p-7 p-10">
          {/* logo */}
          <NavLink
            to="/"
            className="h-[11%] flex justify-start items-center cursor-pointer"
          >
            <div className="flex flex-row gap-5">
              <img
                src={logo}
                alt="/"
                className="w-[60px] h-[50px] max-lg:w-[50px] max-lg:h-[40px]"
              />
              <h1 className="minceText text-[23px] duration-300 max-lg:text-lg">
                MinceTech
              </h1>
            </div>
          </NavLink>

          {/* links */}
          <div className="h-[89%] flex flex-col justify-between">
            <div>
              {firstFourItems.map((item, index) => {
                return (
                  <li key={index} className="flex flex-col">
                    {item.subMenu ? (
                      <NavLink
                        to={item.path}
                        onClick={() => toggleOpenDrop()}
                        className="flex w-full flex-row items-center justify-between text-white text-[15px] max-lg:text-[15px] font-normal rounded-xl py-5 px-4 duration-500 ease-in-out hover:bg-[#830FFF23]"
                      >
                        <div className="flex flex-row gap-5">
                          <div>{item.icon}</div>
                          <span>{item.title}</span>
                        </div>
                        <div
                          className={`${
                            openDrop
                              ? 'rotate-180 transition-all duration-200 ease-out'
                              : 'transition-all duration-200 ease-out'
                          }`}
                        >
                          {item.down}
                        </div>
                      </NavLink>
                    ) : (
                      <NavLink
                      onClick={() => closeSidebar()}
                        to={item.path}
                        className="flex flex-row w-full items-center gap-6 text-white text-[15px] font-normal rounded-xl py-5 px-4 duration-500 ease-in-out hover:bg-[#830FFF23]"
                      >
                        <div>{item.icon}</div>
                        <span>{item.title}</span>
                      </NavLink>
                    )}

                    {item.subMenu && (
                      <ul
                        className={`${
                          openDrop
                            ? 'flex flex-col bg-indigo-950 rounded-md m-3 duration-200 ease-in-out'
                            : 'hidden'
                        }`}
                      >
                        {item.subMenuItems.map((subMenu, indexSub) => (
                          <li
                            onClick={() => closeSidebar()}
                            key={indexSub}
                            className="flex text-[14px] duration-200 ease-in-out"
                          >
                            <NavLink
                              to={subMenu.to}
                              className="flex w-full pl-9 flex-row items-center text-white text-[15px] font-normal rounded-xl py-4 duration-500 ease-in-out hover:bg-[#830FFF23]"
                            >
                              {subMenu.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </div>

            <div>
              {lastTwoItems.map((item, index) => {
                return (
                  <li key={index} className="flex">
                    <NavLink
                    onClick={() => closeSidebar()}
                      to={item.path}
                      className="flex flex-row w-full items-center gap-6 text-white text-[15px] font-normal rounded-xl py-5 px-4 duration-500 ease-in-out hover:bg-[#830FFF23]"
                    >
                      <div>{item.icon}</div>
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className="icon absolute darkBlue p-2 rounded-lg top-8 cursor-pointer z-30 shadow-lg right-6 max-md:block hidden"
        onClick={() => toggleSidebarOpen()}
      >
        <CiMenuFries color="white" className="text-2xl font-bold" />
      </div>
    </>
  );
};

export default Sidebar;
