import React from 'react';
import { Icon } from '@chakra-ui/react';
import { FaUsers, FaNetworkWired, FaTachometerAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { setActivePage } from '../../store/pageSlice'; // Import the action

function Sidebar() {

  const dispatch = useDispatch(); // Initialize dispatch
  const activePage = useSelector((state) => state.page.activePage); // Get activePage from Redux

  const navItems = [
    { name: 'Users', icon: FaUsers },
    { name: 'Network', icon: FaNetworkWired },
    // { name: 'Dashboard', icon: FaTachometerAlt }
  ];

  return (
    <aside className="flex flex-col w-[280px] h-screen max-md:ml-0 max-md:w-full">
      <nav className="flex flex-col items-start py-10 mx-auto w-full text-xl bg-gray-900 text-neutral-300 max-md:px-5 h-full">
        <h1 className="text-3xl text-center mb-10 p-4">Network Manager</h1>
        <div className="w-full h-px bg-white mb-8"></div>
        <ul className="w-full">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className={`flex items-center gap-4 py-4 px-2 mt-${index === 0 ? '0' : '6'} whitespace-nowrap cursor-pointer ${
                activePage === item.name ? 'text-white bg-gray-700 rounded-md' : ''
              }`}
              onClick={() => dispatch(setActivePage(item.name))} // Dispatch setActivePage action
            >
              <Icon as={item.icon} className="object-contain shrink-0 w-8 aspect-square" />
              <span className="text-left">{item.name}</span>
            </li>
          ))}
        </ul>
        <button
          className="self-center mt-auto py-2 px-4 text-white hover:underline hover:font-bold transition-colors duration-300"
          onClick={() => window.location.href = '/'} // Navigate to home page
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;