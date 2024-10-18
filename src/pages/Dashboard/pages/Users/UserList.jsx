import React from 'react';
import UserListItem from './UserListItem';

const users = [
  { name: 'John Doe', maxBandwidth: '100 Mbps', bandwidthLimit: '50 Mbps' },
  { name: 'Jane Smith', maxBandwidth: '200 Mbps', bandwidthLimit: '100 Mbps' },
  { name: 'Alice Johnson', maxBandwidth: '150 Mbps', bandwidthLimit: '75 Mbps' },
  { name: 'Bob Brown', maxBandwidth: '250 Mbps', bandwidthLimit: '125 Mbps' },
  { name: 'Charlie Davis', maxBandwidth: '300 Mbps', bandwidthLimit: '150 Mbps' },
  { name: 'Diana Evans', maxBandwidth: '350 Mbps', bandwidthLimit: '175 Mbps' },
  { name: 'Eve Foster', maxBandwidth: '400 Mbps', bandwidthLimit: '200 Mbps' },
  { name: 'Frank Green', maxBandwidth: '450 Mbps', bandwidthLimit: '225 Mbps' },
];

function UserList() {
  return (
    <div className="flex flex-col px-6 pt-4 mt-11 mr-12 ml-11 text-2xl bg-white max-md:pl-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-10 self-center w-full text-gray-500 max-w-[1340px] max-md:max-w-full">
        <div className="w-1/4">Name</div>
        <div className="w-1/4">Max bandwidth</div>
        <div className="w-1/4">Bandwidth limit</div>
        <div className="w-1/4">Dashboard</div>
      </div>
      <hr className="shrink-0 mt-5 max-w-full border-gray-300 border-solid border-[2px] w-full" />
      {users.map((user, index) => (
        <React.Fragment key={index}>
          <UserListItem {...user} />
          <hr className="shrink-0 mt-5 max-w-full border-gray-300 border-solid border-[1px] w-full" />
          </React.Fragment>
      ))}
    </div>
  );
}

export default UserList;
