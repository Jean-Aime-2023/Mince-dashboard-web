import React, { useState } from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/WalletPage';
import Contract from './pages/ContractPage';
import Deals from './pages/DealsPage';
import Analytics from './pages/AnalyticsPage';
import Settings from './pages/SettingPage';
import GetHelp from './pages/GetHelpPage';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log('hey');
  };
  return (
    <div className={`${darkMode && 'dark'}`}>
      <div className="w-screen flex flow-row overflow-hidden">
        <div className="">
          <Sidebar />
        </div>
        <div className=" w-full lg:ml-[22.2rem] md:ml-[14.4rem]">
          <Routes>
            <Route path="/" element={<Dashboard toggleDarkMode={toggleDarkMode}/>} />
            <Route path="/wallet" element={<Wallet toggleDarkMode={toggleDarkMode} />} />
            <Route path="/activities/contracts" element={<Contract toggleDarkMode={toggleDarkMode} />} />
            <Route path="/activities/deals" element={<Deals toggleDarkMode={toggleDarkMode} />} />
            <Route path="/analytics" element={<Analytics toggleDarkMode={toggleDarkMode} />} />
            <Route path="/settings" element={<Settings toggleDarkMode={toggleDarkMode} />} />
            <Route path="/gethelp" element={<GetHelp toggleDarkMode={toggleDarkMode} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
