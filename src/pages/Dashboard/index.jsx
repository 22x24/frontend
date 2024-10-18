import React, { useState } from 'react';
import { FaUser, FaNetworkWired, FaTachometerAlt } from 'react-icons/fa'; // Import icons
import Sidebar from './Sidebar';
import UserList from './pages/Users/UserList';
import NetworkPage from './pages/Network/NetworkPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
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

    const renderIcon = () => {
        switch (activePage) {
            case 'Users':
                return <FaUser className="w-[34px] h-[34px]" />;
            case 'Network':
                return <FaNetworkWired className="w-[34px] h-[34px]" />;
            case 'Dashboard':
                return <FaTachometerAlt className="w-[34px] h-[34px]" />;
            default:
                return <FaUser className="w-[34px] h-[34px]" />;
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
                    <section className="flex flex-wrap gap-5 justify-between items-center px-12 py-3 bg-gray-300 max-md:px-5 max-md:max-w-full">
                        <h2 className="text-4xl font-medium text-black">{activePage}</h2>
                        <div className="flex flex-col justify-center items-end px-20 py-3 bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
                            {renderIcon()}
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