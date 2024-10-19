import React from 'react';
import { Icon } from '@chakra-ui/react';
import { FaUsers, FaNetworkWired } from 'react-icons/fa';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md'; // Import close icon

function Sidebar({ isOpen, onClose,setActivePage,activePage }) {
 // const dispatch = useDispatch();
  //const activePage = useSelector((state) => state.page.activePage);

  return (
    <aside
      className={`fixed md:relative z-30 flex flex-col w-[280px] h-screen bg-gray-900 text-neutral-300 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >
      <div className="w-64 bg-gray-900 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Network Manager</h1>
        </div>
        <nav className="mt-8">
          <div href="#" className={`flex items-center px-4 py-2 text-gray-400 hover:bg-gray-800 ${activePage == "Users" && "bg-gray-700"}`} onClick={()=>setActivePage("Users")}>
            <FaUsers className="mr-3" />
            Users
          </div>
          <div className={`flex items-center px-4 py-2 text-gray-400 hover:bg-gray-800 ${activePage == "Network" && "bg-gray-700"}`}  onClick={()=>setActivePage("Network")}>
            <FaNetworkWired className="mr-3" />
            Network
          </div>
          <div className={`flex items-center px-4 py-2 text-gray-400 hover:bg-gray-800 ${activePage == "Dashboard" && "bg-gray-700"}`}  onClick={()=>setActivePage("Dashboard")}>
            <AiOutlineDashboard className="mr-3" />
            Dashboard
          </div>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <a href="#" className="flex items-center text-gray-400 hover:text-white">
            <IoMdLogOut className="mr-3" />
            Logout
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
