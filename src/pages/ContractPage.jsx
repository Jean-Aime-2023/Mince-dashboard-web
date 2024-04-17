import Header from '../components/Header';
import Button from '../components/Button';
import TuneIcon from '@mui/icons-material/Tune';
import { IoSearch } from 'react-icons/io5';
import ContractAccordion from '../components/ContractAccordion';
import { useNavigate } from 'react-router-dom';


const ContractPage = ({ toggleDarkMode }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 bg-[#F9F9F9] dark:bg-[#0F1631] h-screen">
      <Header header="Contracts" search="true" userProfile="false" toggleDarkMode={toggleDarkMode} />
      <div className='flex flex-col mx-10 my-5 gap-7'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-10'>
            <section className='flex flex-row items-center justify-center px-[20px] py-[10px] gap-3 bg-white border border-gray-300 rounded-2xl dark:border-[#D9D9D9]'>
              <IoSearch size={25} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none outline-none"
              />
            </section>
            <Button action={'Filter'} icon={<TuneIcon />} bg={'#5547D7'} hoverBg={'#7094db'} />
          </div>


          <div><Button onClick={()=>navigate("/activities/contracts/newContract")} action={'New Contract'} icon={false} bg={'#5547D7'} hoverBg={'#7094db'} /></div>
        </div>

        <div className='flex flex-row justify-between text-md font-semibold'>
          <p>Contract ID</p>
          <p>Contractee</p>
          <p>Doc</p>
          <p>Category</p>
          <p>Price</p>
          <p>Status</p>
        </div>

        <section className='h-full overflow-y-scroll scrollbar-hidden mb-[10rem]'>
          <div className='flex flex-col gap-6'>
            <ContractAccordion />
            <ContractAccordion />
            <ContractAccordion />
            <ContractAccordion />
            <ContractAccordion />
            <ContractAccordion />
            <ContractAccordion />
            <ContractAccordion />
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContractPage;

