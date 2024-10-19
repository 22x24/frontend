import React, { useState } from 'react';
import { FaUser, FaNetworkWired, FaTachometerAlt } from 'react-icons/fa';
import { MdNetworkCheck, MdMenu } from 'react-icons/md'; // Import Menu icon for sidebar toggle
import Sidebar from './Sidebar';
import UserList from './pages/Users/UserList';
import Stats from './pages/Users/UserStats/BandwidthConsumption';
import NetworkPage from './pages/Network/NetworkPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import { useSelector } from 'react-redux';

function Dashboard() {
    const activePage = useSelector((state) => state.page.activePage);
    const [sidebarOpen, setSidebarOpen] = useState(false); // Add sidebar state

    const renderActivePage = () => {
        switch (activePage) {
            case 'Users':
                return <UserList />;
            case 'Network':
                return <NetworkPage />;
            case 'Dashboard':
                return <DashboardPage />;
            case 'Stats':
                return <Stats />;
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
        <div className="overflow-hidden pb-16 bg-slate-50 h-screen">
            <div className="flex gap-5 max-md:flex-col h-full">
                {/* Sidebar and overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    ></div>
                )}
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

                <main className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full h-full">
                    <div className="overflow-auto">
                        <header className="flex flex-row items-center justify-between px-4 py-6 md:px-8 md:py-10 text-2xl md:text-4xl text-black bg-white max-md:text-center max-md:flex-col max-md:gap-4 relative">
                            <button
                                className="md:hidden text-3xl"
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                            >
                                <MdMenu className="w-[40px] h-[40px]" />
                            </button>
                            <span className="md:ml-0">Welcome Admin</span>
                            <MdNetworkCheck className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] mr-0 md:mr-10 mt-4 md:mt-0" />
                        </header>
                        <section className="flex flex-wrap gap-5 justify-between items-center px-12 py-3 bg-gray-300 max-md:px-5 max-md:max-w-full">
                            <h2 className="text-4xl font-medium text-black">{activePage}</h2>
                            <div className="flex flex-col justify-center items-end px-20 py-3 bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
                                <div className="flex justify-center items-center w-[34px] h-[34px]">
                                    {renderIcon()}
                                </div>
                            </div>
                        </section>
                        <div className="flex-1 ">{renderActivePage()}</div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
