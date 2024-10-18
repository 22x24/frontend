import React, { useState } from 'react';
import Sidebar from './Sidebar';
import UserList from './UserList';
import NetworkPage from './pages/NetworkPage';
import DashboardPage from './pages/DashboardPage';
import Pagination from './Pagination';

function Dashboard() {
  const [activePage, setActivePage] = useState('Users');

  const renderActivePage = () => {
    switch (activePage) {
      case 'Users':
        return <UserList />;
      case 'Network':
        return <NetworkPage />;
      case 'Dashboard':
        return <DashboardPage />;
      default:
        return <UserList />;
    }
  };

  return (
    <div className="overflow-hidden pb-16 bg-slate-50">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
          <header className="px-12 py-14 text-4xl text-black bg-white max-md:px-5 max-md:max-w-full">
            Welcome Admin
          </header>
          <section className="flex flex-wrap gap-5 justify-between px-12 py-3 bg-gray-300 max-md:px-5 max-md:max-w-full">
            <h2 className="text-4xl font-medium text-black">{activePage}</h2>
            <div className="flex flex-col justify-center items-end px-20 py-3 bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
              <img loading="lazy" src="http://b.io/ext_9-" className="object-contain aspect-square w-[34px]" alt="" />
            </div>
          </section>
          {renderActivePage()}
          <Pagination />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;