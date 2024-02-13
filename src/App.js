import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import WalletPage from './pages/WalletPage';
import ContractPage from './pages/ContractPage';
import DealsPage from './pages/DealsPage';
import SettingPage from './pages/SettingPage';
import GetHelpPage from './pages/GetHelpPage';
import Dashboard from './pages/Dashboard';
import AnalyticsPage from './pages/AnalyticsPage';

export default function App() {
  return (
    <div className="flex h-screen w-screen">
      <div className="bg-green-400">
        <Sidebar />
      </div>

      <main className="flex-1">
        <Routes>
          {/* Default route at the top level */}
          <Route path="/" element={<Dashboard />} />

          {/* Other routes directly under Routes */}
          {/* <Route path="/dashboard" element={< Dashboard/>} /> */}
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/activities/contracts" element={<ContractPage />} />
          <Route path="/activities/deals" element={<DealsPage />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/gethelp" element={<GetHelpPage />} />

          {/* Catch-all route for unknown paths */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

function NotFoundPage() {
  return <h1>Page Not Found</h1>;
}
