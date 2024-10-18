import React from 'react';
import { Icon } from '@chakra-ui/react';
import { FaUsers, FaNetworkWired, FaTachometerAlt } from 'react-icons/fa';

function Sidebar({ activePage, setActivePage }) {
  const navItems = [
    { name: 'Users', icon: FaUsers },
    { name: 'Network', icon: FaNetworkWired },
    { name: 'Dashboard', icon: FaTachometerAlt }
  ];

  return (
    <aside className="flex flex-col w-[18%] h-screen max-md:ml-0 max-md:w-full">
      <nav className="flex flex-col items-start px-12 py-10 mx-auto w-full text-2xl bg-gray-900 text-neutral-300 max-md:px-5 h-full">
        <h1 className="text-4xl text-center mb-16">Network Manager</h1>
        <ul className="w-full">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className={`flex gap-8 py-4 px-2 mt-${index === 0 ? '0' : '6'} whitespace-nowrap cursor-pointer ${
                activePage === item.name ? 'text-white bg-gray-700 rounded-md' : ''
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <Icon as={item.icon} className="object-contain shrink-0 w-8 aspect-square" />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <button className="self-center mt-auto py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300">Logout</button>
      </nav>
    </aside>
  );
}

export default Sidebar;