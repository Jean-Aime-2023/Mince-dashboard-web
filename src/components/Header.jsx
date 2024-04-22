import React, { useState } from 'react';
import { TiMessageTyping } from 'react-icons/ti';
import { FaBell } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { IoSearch } from 'react-icons/io5';
import Notifications from './Notifications';
import UserOptions from './UserOptions';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Header = ({ header, search, userProfile, toggleDarkMode }) => {
  const [openNotif, setOpenNotif] = useState(false);
  const [openProfile, setOpenProfile] = useState(false)
  const navigate = useNavigate()

  const toggleNotif = () => {
    setOpenNotif(!openNotif);
    if (openProfile) {
      setOpenProfile(false);
    }
  };

  const toggleProfile = () => {
    setOpenProfile(!openProfile);
    if (openNotif) {
      setOpenNotif(false);
    }
  };
  return (
    <div className="p-8 flex flow-row justify-between max-xl:px-5 items-center bg-white dark:bg-[#0A1027] dark:text-[#D9D9D9]">
      <div
        className={`${!search ? 'max-md:block' : 'max-lg:hidden max-md:block max-sm:hidden'
          }`}
      >
        <p className="text-[#002159] font-normal text-[18px] dark:text-white">{header}</p>
      </div>

      {search && (
        <div className="flex flex-row items-center justify-center px-[20px] py-[10px] gap-3 inputHeader dark:border-[#D9D9D9] w-[40%] max-sm:w-[55%] max-sm:ml-[-1rem] max-sm:mr-1">
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
          <div className='' onClick={()=>navigate("/chat")} >
          {/* <div><Button onClick={()=>navigate("/chat")} action={''} icon={<TiMessageTyping/>} bg={'#5547D7'} hoverBg={'#7094db'} /></div> */}
            <TiMessageTyping className="iconHeader cursor-pointer dark:bg-[#232262]" size={37} />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={(e) => toggleNotif(e)}
          >
            <FaBell size={37} className="iconHeader dark:bg-[#232262]" />
            <GoDotFill className="absolute -top-1 -right-1" fill="red" />
          </div>
          <div className="flex flex-row items-center gap-2 max-md:mr-10 max-sm:mr-0" onClick={() => toggleProfile()}>
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
        className={`${openNotif
          ? 'scale-100 top-[6rem] right-5 z-[1000] max-sm:right-3 max-sm:mx-3 duration-200 ease-in-out overflow-y-scroll h-[80%] rounded-xl scrollbar-hidden shadow-xl border bg-white border-gray-200 dark:border-slate-800 dark:text-[#CECACAC9] dark:bg-[#0A1027]'
          : 'scale-0'
          } absolute transform transition duration-200 ease-in-out origin-top`}
      >
        <Notifications openNotif={openNotif} />
      </div>

      <div className={`${openProfile
        ? 'scale-100 top-[6rem] z-40 right-5 dark:bg-[#0A1027] duration-200 ease-in-out overflow-y-scroll rounded-xl scrollbar-hidden shadow-xl border bg-white border-gray-200 dark:border-slate-800'
        : 'scale-0'
        } absolute transform transition duration-200 ease-in-out origin-top`}><UserOptions openProfile={openProfile} toggleDarkMode={toggleDarkMode} /></div>
    </div>
  );
};

export default Header;
