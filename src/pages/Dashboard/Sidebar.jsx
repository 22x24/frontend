import React from 'react';

function Sidebar({ activePage, setActivePage }) {
  const navItems = [
    { name: 'Users', icon: 'http://b.io/ext_10-' },
    { name: 'Network', icon: 'http://b.io/ext_11-' },
    { name: 'Dashboard', icon: 'http://b.io/ext_12-' }
  ];

  return (
    <aside className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
      <nav className="flex flex-col items-start px-12 py-10 mx-auto w-full text-2xl bg-gray-900 text-neutral-300 max-md:px-5">
        <h1 className="text-4xl text-center">Network Manager</h1>
        <ul className="mt-32 w-full max-md:mt-10">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className={`flex gap-8 mt-${index === 0 ? '0' : '14'} whitespace-nowrap max-md:mt-10 cursor-pointer ${
                activePage === item.name ? 'text-white' : ''
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <img loading="lazy" src={item.icon} className="object-contain shrink-0 w-8 aspect-square" alt="" />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <button className="self-center mt-[559px] max-md:mt-10">Logout</button>
      </nav>
    </aside>
  );
}

export default Sidebar;