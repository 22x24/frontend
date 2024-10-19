import React, { useContext, useState } from "react";
import { FaUser, FaNetworkWired, FaTachometerAlt } from "react-icons/fa";
import Sidebar from "./Sidebar";
import UserList from "./pages/Users/UserList";
import Stats from "./pages/Users/UserStats/BandwidthConsumption";
import NetworkPage from "./pages/Network/NetworkPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import { UserContext } from "../../provider/userProvider";

function Dashboard() {
  //const activePage = useSelector((state) => state.page.activePage);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Add sidebar state

  const renderIcon = () => {
    switch (activePage) {
      case "Users":
        return <FaUser size={25} />;
      case "Network":
        return <FaNetworkWired size={25} />;
      case "Dashboard":
        return <FaTachometerAlt size={25} />;
      default:
        return <FaUser size={25} />;
    }
  };
  const {activePage,setActivePage} = useContext(UserContext)
  const handleActivePage = (activePage) => {
    setActivePage(activePage);
  };
  const renderActivePage = () => {
    switch (activePage) {
      case "Users":
        return <UserList />;
      case "Network":
        return <NetworkPage />;
      case "Dashboard":
        return <DashboardPage />;
      default:
        return <Stats />;
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
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage={activePage}
          setActivePage={handleActivePage}
        />

        <main className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full h-full">
          <div className="overflow-auto">
            <header className="bg-white shadow p-4">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome Admin
                </h1>
              </div>

              <div>
                    <div className="px-6 flex gap-4 items-center">
                        {renderIcon()} {activePage}
                    </div>
              </div>
            </header>
            <div className="flex-1 ">{renderActivePage()}</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
