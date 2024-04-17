import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button'
import TuneIcon from '@mui/icons-material/Tune';
import Deal from '../components/Deal';

const DealsPage = ({toggleDarkMode}) => {
  return (
    <div className="flex flex-col gap-3 bg-[#F9F9F9] dark:bg-[#0F1631] h-screen">
      <Header header="Deals" search="true" userProfile="false" toggleDarkMode={toggleDarkMode} />
      <div className='relative z-0 flex flex-col mx-10 my-5 gap-7'>
        <div className='realtive'>
          <Button action={'Filter'} icon={<TuneIcon/>} bg={'#5547D7'} hoverBg={'#7094db'}/>
          {/* <div className='absolute left-20 top-10 rounded-xl shadow-lg p-4 z-50'>
            <ul>
              <li>Filter By:</li>
              <ul>
                <li>All Deals</li>
                <li>Scheduled Transactions</li>
                <li>Transaction History</li>
              </ul>
            </ul>
          </div> */}
        </div>
        <div className='flex flex-row justify-between text-md font-semibold'>
          <p>Name/Company</p>
          <p>Deals</p>
          <p>Value</p>
          <p>Method</p>
          <p>Status</p>
          <p>Actions</p> 
        </div>
        <div className='flex flex-col gap-7'>
          <Deal
           image={'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'}
           name={'Kirezi Livia'}
           detail1={'Application Deal'}
           detail2={'Frontend Dev'}
           price1={'10000'}
           price2={'5000'}
          />
          <Deal
           image={'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600'}
           name={'Mack John'}
           detail1={'Application Deal'}
           detail2={'Backend Dev'}
           price1={'10000'}
           price2={'5000'}
          />
          <Deal
           image={'https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=600'}
           name={'Asifiwe Angele'}
           detail1={'Work Deal'}
           detail2={'Designing'}
           price1={'10000'}
           price2={'5000'}
          />
          <Deal
           image={'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'}
           name={'Kirezi Livia'}
           detail1={'Application Deal'}
           detail2={'Frontend Dev'}
           price1={'10000'}
           price2={'5000'}
          />
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
