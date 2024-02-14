import React, { useState } from 'react';
import { TiMessageTyping } from 'react-icons/ti';
import { FaBell } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { IoSearch } from 'react-icons/io5';
import Notifications from './Notifications';
import UserOptions from './UserOptions';

const Header = ({ header, search, userProfile }) => {
  const [openNotif, setOpenNotif] = useState(false);
  const [openProfile,setOpenProfile] = useState(false)

  const toggleNotif = () => {
    setOpenNotif(!openNotif);
    if (openProfile) {
      setOpenProfile(false); // Close the user profile if open
    }
  };

  const toggleProfile = () => {
    setOpenProfile(!openProfile);
    if (openNotif) {
      setOpenNotif(false); // Close the notifications if open
    }
  };
  return (
    <div className="p-8 flex flow-row justify-between items-center bg-white">
      <div
        className={`${
          !search ? 'max-md:block' : 'max-lg:hidden max-md:block max-sm:hidden'
        }`}
      >
        <p className="text-[#002159] font-normal text-[18px]">{header}</p>
      </div>

      {search && (
        <div className="flex flex-row items-center justify-center px-[20px] py-[10px] gap-3 inputHeader w-[40%] max-sm:w-[55%]">
          <IoSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent w-full focus:outline-none outline-none searchText"
          />
        </div>
      )}

      {userProfile && (
        <div className="flex flex-row items-center justify-center gap-3 cursor-pointer">
          <div>
            <TiMessageTyping className="iconHeader cursor-pointer" size={37} />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={(e) => toggleNotif(e)}
          >
            <FaBell size={37} className="iconHeader" />
            <GoDotFill className="absolute -top-1 -right-1" fill="red" />
          </div>
          <div className="flex flex-row items-center gap-2 max-md:mr-10" onClick={()=>toggleProfile()}>
            <img
              src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
              alt="/"
              className="w-[35px] h-[35px] rounded-full"
            />
            <div className="flex flex-row items-center gap-3 max-md:hidden">
              <p className=" max-2xl:text-[14px]">Angele Marie</p>
              <FaAngleDown />
            </div>
          </div>
        </div>
      )}
      <div
        className={`${
          openNotif
            ? 'scale-100 top-[6rem] right-5 max-sm:right-3 max-sm:mx-3 duration-200 ease-in-out overflow-y-scroll h-[80%] rounded-xl scrollbar-hidden shadow-xl border bg-white border-gray-200'
            : 'scale-0'
        } absolute transform transition duration-200 ease-in-out origin-top`}
      >
        <Notifications openNotif={openNotif} />
      </div>

      <div className={`${
          openProfile
            ? 'scale-100 top-[6rem] right-5 duration-200 ease-in-out overflow-y-scroll rounded-xl scrollbar-hidden shadow-xl border bg-white border-gray-200'
            : 'scale-0'
        } absolute transform transition duration-200 ease-in-out origin-top`}><UserOptions openProfile={openProfile} /></div>
    </div>
  );
};

export default Header;
