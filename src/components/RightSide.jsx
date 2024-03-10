import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { FaAngleDown } from "react-icons/fa6";
import visaCard from '../assets/images/card.png'
import { IoMdAdd } from "react-icons/io";
import { Transactions } from '../data/Transactions';
import { LuUserCheck2 } from "react-icons/lu";
import { IoMdStopwatch } from "react-icons/io";


const RigthSide = () => {
  return (
    <div className="flex flex-col z-0 gap-10 h-full overflow-y-scroll scrollbar-hidden pb-20 px-3 py-3">
      <div className="flex flex-col gap-6 bg-white rounded-2xl shadowCards p-10 dark:bg-[#0A1027]">
        <div className="flex flow-row justify-between">
          <p className="text-[#002159] text-xl dark:text-[#6B6B6B]">My Cards</p>
          <span className="text-lg text-[#5846DF] underline decoration-solid cursor-pointer">View All</span>
        </div>

        <div>
          <img src={visaCard} alt="" className='h-[100%] w-[100%]' />
        </div>
        <div className='text-[#5547D7] cursor-pointer flex gap-3 justify-center text-center dashedBorder rounded-xl py-4 items-center'>
          <IoMdAdd />
          <p>Add New Card</p>
        </div>
      </div>

      <div className=" flex flex-col gap-6 bg-white shadowCards rounded-2xl p-10 dark:bg-[#0A1027]">
        <p className='text-[#002159] text-xl flex justify-start dark:text-[#6B6B6B]'>Quick Transfer</p>
        <hr className='border-[1px] dark:border-[#676A7352]' />

        <div className='flex justify-start'>
          <AvatarGroup
            renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
            total={4251}
          >
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/14012664/pexels-photo-14012664.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/20243531/pexels-photo-20243531/free-photo-of-a-woman-in-a-beige-coat-standing-in-front-of-a-hedge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
            <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/14012664/pexels-photo-14012664.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
            <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/20243531/pexels-photo-20243531/free-photo-of-a-woman-in-a-beige-coat-standing-in-front-of-a-hedge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          </AvatarGroup>
        </div>

        <div className='border border-gray-400 rounded-xl py-3 px-4 gap-7 flex flex-row items-center'>
          <div><img src="https://resources.rawpixel.com/image_transparent_png_600/cmF3cGl4ZWwtZGVzaWduLXByb2Q6OmRlc2lnbi9wcmV2aWV3L3Jhd3BpeGVsLzAxaDk3cHdxeXNkaDgzeHllcTVkYXA3bjdhLWhvdmVyLWRlZmF1bHQucG5n.png?v=1705655839" alt="/" className='h-16 w-16 rounded-full' /></div>
          <div className='flex flex-col gap-1 cursor-pointer'>
            <h5 className='text-lg dark:text-[#CECACA]'>Cyami Andrew</h5>
            <p className=' text-gray-400 text-sm'>Software Developer</p>
          </div>
        </div>

        <div className='border border-[#5547D7] cursor-pointer flex flex-row justify-between items-center p-5 gap-7 rounded-xl'>
          <div className='flex flex-col justify-between'>
            <h4 className='text-sm text-[#5547D7]'>Enter Amount</h4><p className='text-xl dark:text-[#002159]'>$200.00</p>
          </div>
          <div className='flex gap-3 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="32" viewBox="0 0 44 32" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M43.0202 30.4403C42.9769 30.4231 42.932 30.4145 42.8829 30.4145C42.833 30.4145 42.7873 30.4231 42.744 30.4403C42.7008 30.4567 42.6633 30.4801 42.6317 30.5098C42.6001 30.5386 42.5752 30.573 42.5569 30.6128C42.5386 30.6518 42.5294 30.694 42.5294 30.7385C42.5294 30.783 42.5386 30.8252 42.5569 30.8642C42.5752 30.9032 42.6001 30.9376 42.6317 30.9673C42.6633 30.9961 42.7008 31.0196 42.744 31.0367C42.7873 31.0539 42.833 31.0625 42.8829 31.0625C42.932 31.0625 42.9769 31.0539 43.0202 31.0367C43.0626 31.0196 43.0992 30.9961 43.1316 30.9673C43.1633 30.9376 43.1882 30.9032 43.2065 30.8642C43.2248 30.8252 43.234 30.783 43.234 30.7385C43.234 30.694 43.2248 30.6518 43.2065 30.6128C43.1882 30.573 43.1633 30.5386 43.1316 30.5098C43.0992 30.4801 43.0626 30.4567 43.0202 30.4403ZM42.8829 30.9917C42.9204 30.9917 42.9553 30.9846 42.9869 30.9714C43.0194 30.9581 43.0476 30.9401 43.0718 30.9175C43.0959 30.8948 43.115 30.8683 43.1292 30.8371C43.1425 30.8066 43.1499 30.7738 43.1499 30.7387C43.1499 30.7036 43.1425 30.6708 43.1292 30.6403C43.115 30.6099 43.0959 30.5826 43.0718 30.5599C43.0476 30.5373 43.0194 30.5193 42.9869 30.506C42.9553 30.4936 42.9204 30.4873 42.8829 30.4873C42.8455 30.4873 42.8097 30.4936 42.7773 30.506C42.744 30.5193 42.7149 30.5373 42.6908 30.5599C42.6667 30.5826 42.6475 30.6099 42.6342 30.6403C42.6201 30.6708 42.6134 30.7036 42.6134 30.7387C42.6134 30.7738 42.6201 30.8066 42.6342 30.8371C42.6475 30.8683 42.6667 30.8948 42.6908 30.9175C42.7149 30.9401 42.744 30.9581 42.7773 30.9714C42.8097 30.9846 42.8455 30.9917 42.8829 30.9917ZM42.9976 30.613C42.9752 30.5958 42.9436 30.5872 42.9028 30.5872H42.7547V30.8878H42.8229V30.7754H42.8546L42.9519 30.8878H43.0334L42.9286 30.7746C42.9619 30.7707 42.9868 30.7606 43.0043 30.7449C43.0226 30.7285 43.0309 30.7082 43.0309 30.6833C43.0309 30.6536 43.0201 30.6302 42.9976 30.613ZM42.823 30.724V30.6436H42.902C42.9195 30.6436 42.9344 30.6467 42.9452 30.6538C42.9552 30.66 42.961 30.6702 42.961 30.6834C42.961 30.6967 42.9552 30.7076 42.9452 30.7139C42.9344 30.7201 42.9195 30.724 42.902 30.724H42.823ZM10.4745 29.2579C10.4745 28.6848 10.8746 28.2141 11.5284 28.2141C12.1531 28.2141 12.5748 28.6645 12.5748 29.2579C12.5748 29.8512 12.1531 30.3017 11.5284 30.3017C10.8746 30.3017 10.4745 29.8309 10.4745 29.2579ZM13.2863 27.6264V29.2566V30.8867H12.531V30.4909C12.2914 30.7845 11.9279 30.9687 11.4338 30.9687C10.4598 30.9687 9.69619 30.2528 9.69619 29.2566C9.69619 28.2612 10.4598 27.5445 11.4338 27.5445C11.9279 27.5445 12.2914 27.7287 12.531 28.0223V27.6264H13.2863ZM38.81 29.2579C38.81 28.6848 39.2101 28.2141 39.8639 28.2141C40.4894 28.2141 40.9103 28.6645 40.9103 29.2579C40.9103 29.8512 40.4894 30.3017 39.8639 30.3017C39.2101 30.3017 38.81 29.8309 38.81 29.2579ZM41.6227 26.3172V29.2566V30.8867H40.8665V30.4909C40.627 30.7845 40.2635 30.9687 39.7694 30.9687C38.7953 30.9687 38.0317 30.2528 38.0317 29.2566C38.0317 28.2612 38.7953 27.5445 39.7694 27.5445C40.2635 27.5445 40.627 27.7287 40.8665 28.0223V26.3172H41.6227ZM22.6617 28.1798C23.1483 28.1798 23.4611 28.4663 23.5409 28.9707H21.7384C21.8191 28.4999 22.1235 28.1798 22.6617 28.1798ZM20.9467 29.2566C20.9467 28.2401 21.6587 27.5445 22.6768 27.5445C23.6501 27.5445 24.3188 28.2401 24.3263 29.2566C24.3263 29.3518 24.3188 29.4408 24.3113 29.5291H21.7319C21.8409 30.1162 22.2842 30.3277 22.7708 30.3277C23.1194 30.3277 23.4903 30.2044 23.7815 29.9866L24.1516 30.512C23.7299 30.8461 23.2508 30.9687 22.7276 30.9687C21.6878 30.9687 20.9467 30.2934 20.9467 29.2566ZM31.7972 29.2579C31.7972 28.6848 32.1973 28.2141 32.8511 28.2141C33.4758 28.2141 33.8975 28.6645 33.8975 29.2579C33.8975 29.8512 33.4758 30.3017 32.8511 30.3017C32.1973 30.3017 31.7972 29.8309 31.7972 29.2579ZM34.609 27.6264V29.2566V30.8867H33.8537V30.4909C33.6133 30.7845 33.2506 30.9687 32.7565 30.9687C31.7825 30.9687 31.0189 30.2528 31.0189 29.2566C31.0189 28.2612 31.7825 27.5445 32.7565 27.5445C33.2506 27.5445 33.6133 27.7287 33.8537 28.0223V27.6264H34.609ZM27.5316 29.2566C27.5316 30.2458 28.2653 30.9687 29.3849 30.9687C29.9081 30.9687 30.2566 30.8594 30.6343 30.5799L30.2716 30.0069C29.9879 30.1981 29.6902 30.3004 29.3624 30.3004C28.7594 30.2934 28.316 29.8843 28.316 29.2566C28.316 28.6289 28.7594 28.2198 29.3624 28.2128C29.6902 28.2128 29.9879 28.315 30.2716 28.5063L30.6343 27.9333C30.2566 27.6538 29.9081 27.5445 29.3849 27.5445C28.2653 27.5445 27.5316 28.2674 27.5316 29.2566ZM36.3535 28.0232C36.5498 27.7367 36.8335 27.5454 37.2693 27.5454C37.4224 27.5454 37.6403 27.5727 37.8075 27.6344L37.5746 28.3027C37.4149 28.241 37.2552 28.2207 37.1021 28.2207C36.6081 28.2207 36.361 28.5205 36.361 29.06V30.8877H35.6049V27.6274H36.3535V28.0232ZM17.0218 27.8856C16.6583 27.6608 16.1576 27.5445 15.6053 27.5445C14.7252 27.5445 14.1588 27.9403 14.1588 28.5883C14.1588 29.12 14.5805 29.4479 15.3574 29.5501L15.7142 29.5978C16.1285 29.6524 16.324 29.7547 16.324 29.9389C16.324 30.1911 16.0478 30.3348 15.5321 30.3348C15.0089 30.3348 14.6312 30.1778 14.3767 29.9936L14.0207 30.5456C14.4349 30.8321 14.9581 30.9687 15.5246 30.9687C16.5278 30.9687 17.1092 30.5253 17.1092 29.9046C17.1092 29.3315 16.6517 29.0317 15.8956 28.9295L15.5396 28.8811C15.2127 28.8405 14.9506 28.7796 14.9506 28.561C14.9506 28.3221 15.1977 28.1792 15.6119 28.1792C16.0553 28.1792 16.4845 28.3361 16.6949 28.4587L17.0218 27.8856ZM25.8524 28.0232C26.0478 27.7367 26.3315 27.5454 26.7674 27.5454C26.9204 27.5454 27.1383 27.5727 27.3055 27.6344L27.0726 28.3027C26.9129 28.241 26.7532 28.2207 26.6002 28.2207C26.1061 28.2207 25.859 28.5205 25.859 29.06V30.8877H25.1037V27.6274H25.8524V28.0232ZM20.322 27.6264H19.0867V26.6373H18.3231V27.6264H17.6186V28.2744H18.3231V29.7617C18.3231 30.5182 18.6359 30.9687 19.5292 30.9687C19.857 30.9687 20.2346 30.8735 20.4742 30.7165L20.2562 30.1091C20.0308 30.2317 19.7838 30.2934 19.5875 30.2934C19.2098 30.2934 19.0867 30.0748 19.0867 29.7477V28.2744H20.322V27.6264ZM9.02861 28.8413V30.8876H8.26501V29.0732C8.26501 28.5205 8.01796 28.2136 7.50224 28.2136C7.00066 28.2136 6.65213 28.5142 6.65213 29.0802V30.8876H5.88853V29.0732C5.88853 28.5205 5.63482 28.2136 5.13324 28.2136C4.61669 28.2136 4.2823 28.5142 4.2823 29.0802V30.8876H3.51953L3.51953 27.6273H4.27565V28.0294C4.55929 27.6476 4.92196 27.5453 5.29295 27.5453C5.82365 27.5453 6.20129 27.7639 6.44085 28.1254C6.7611 27.6679 7.21859 27.5383 7.66195 27.5453C8.5054 27.5524 9.02861 28.0708 9.02861 28.8413Z" fill="#002159" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M43.2915 19.5687V20.0449H43.1984V19.685L43.0553 19.9957H42.958L42.8149 19.6858V20.0449H42.7209V19.5687H42.854L43.0062 19.8958L43.1593 19.5687H43.2915ZM42.4523 19.6495V20.0445H42.3591V19.6495H42.1895V19.5691H42.622V19.6495H42.4523Z" fill="white" />
              <path d="M27.1931 22.0939H15.7461V2.78516H27.1931V22.0939Z" fill="#EC6A2C" />
              <path d="M16.479 12.4388C16.479 8.52193 18.4329 5.03289 21.4757 2.78442C19.2506 1.14022 16.4424 0.158854 13.3905 0.158854C6.16537 0.158854 0.308594 5.65668 0.308594 12.4388C0.308594 19.2209 6.16537 24.7188 13.3905 24.7188C16.4424 24.7188 19.2506 23.7374 21.4757 22.0932C18.4329 19.8447 16.479 16.3557 16.479 12.4388Z" fill="#D82E2B" />
              <path d="M42.6308 12.4388C42.6308 19.2209 36.774 24.7188 29.5489 24.7188C26.497 24.7188 23.6888 23.7374 21.4629 22.0932C24.5065 19.8447 26.4604 16.3557 26.4604 12.4388C26.4604 8.52193 24.5065 5.03289 21.4629 2.78442C23.6888 1.14022 26.497 0.158854 29.5489 0.158854C36.774 0.158854 42.6308 5.65668 42.6308 12.4388Z" fill="#EAA240" />
            </svg>

            <FaAngleDown className='dark:text-white' />
          </div>
        </div>
        <button className="bg-[#5547D7] hover:bg-[#7164e2] text-white text-lg rounded-lg flex max-md:text-sm items-center text-center px-11 py-4  justify-center">
          Send Money
        </button>
      </div>


      <div className='flex flex-col gap-6 bg-white shadowCards rounded-2xl p-7 dark:bg-[#0A1027]'>
        <div className="flex flow-row justify-between">
          <p className="text-[#002159] text-xl dark:text-[#6B6B6B]">Scheduled Transactions</p>
          <span className="text-lg text-[#5846DF] underline decoration-solid cursor-pointer">View All</span>
        </div>

        {Transactions.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl p-5 relative bg-[#F0F0F0] dark:bg-[#0F1631] cursor-pointer"
          >
            <section className='flex flex-col gap-2'>
              <h2 className='text-[#5547D7] text-lg'>{item.title}</h2>
              <section className='flex flex-row gap-3 items-center'>
                <LuUserCheck2 className='text-[#5547D7]' />
                <p className='text-[#000000C9] dark:text-[#CECACAC9]'>{item.name}</p>
              </section>
              <section className='flex flex-row gap-3 items-center'>
                <IoMdStopwatch className='text-[#5547D7]' />
                <p className='text-[#000000C9] dark:text-[#CECACAC9]'>{item.duration}</p>
              </section>
            </section>

            <div className={`absolute right-0 bottom-0 py-2 px-6 borderRadius text-center
             ${item.state === "In Negotiation"
                ? "bg-[#EC6A2C80] text-[#EC6A2C]" // customize for signed state
                : item.state === "Signed"
                  ? "bg-[#D2691E80] text-[#D2691E]" // customize for unsigned state
                  : item.state === "Accepted"
                    ? "bg-[#67AD5B80] text-[#67AD5B]" // customize for accepted state
                    : "" // default styling
              }
            `}>
              <p>{item.state}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default RigthSide;
