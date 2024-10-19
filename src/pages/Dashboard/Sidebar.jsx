import React from 'react';
import { Icon } from '@chakra-ui/react';
import { FaUsers, FaNetworkWired } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '../../store/pageSlice';
import { MdClose } from 'react-icons/md'; // Import close icon

function Sidebar({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.page.activePage);

  const navItems = [
    { name: 'Users', icon: FaUsers },
    { name: 'Network', icon: FaNetworkWired },
  ];

  return (
    <aside
      className={`fixed md:relative z-30 flex flex-col w-[280px] h-screen bg-gray-900 text-neutral-300 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >
      <nav className="flex flex-col items-start py-10 mx-auto w-full text-xl max-md:px-5 h-full">
        <h1 className="text-3xl text-center mb-10 p-4">Network Manager</h1>
        <div className="w-full h-px bg-white mb-8"></div>
        <ul className="w-full">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className={`flex items-center gap-4 py-4 px-2 mt-${
                index === 0 ? '0' : '6'
              } whitespace-nowrap cursor-pointer ${
                activePage === item.name ? 'text-white bg-gray-700 rounded-md' : ''
              }`}
              onClick={() => {
                dispatch(setActivePage(item.name));
                onClose(); // Close sidebar on mobile after clicking a link
              }}
            >
              <Icon as={item.icon} className="object-contain shrink-0 w-8 aspect-square" />
              <span className="text-left">{item.name}</span>
            </li>
          ))}
        </ul>

        {/* Close button for mobile */}
        <button
          className="md:hidden absolute top-5 right-5 text-white text-3xl"
          onClick={onClose}
        >
          <MdClose />
        </button>

        <button
          className="self-center mt-auto py-2 px-4 text-white hover:underline hover:font-bold transition-colors duration-300"
          onClick={() => window.location.href = '/'}
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
