import React from 'react';
import UserListItem from './UserListItem';

const users = [
  { name: 'Name', maxBandwidth: 'Max bandwidth', bandwidthLimit: '0.5 Mbps' },
  { name: 'Name', maxBandwidth: 'Max bandwidth', bandwidthLimit: '0.5 Mbps' },
  { name: 'Name', maxBandwidth: 'Max bandwidth', bandwidthLimit: '0.5 Mbps' },
  { name: 'Name', maxBandwidth: 'Max bandwidth', bandwidthLimit: '0.5 Mbps' },
  { name: 'Name', maxBandwidth: 'Max bandwidth', bandwidthLimit: '0.5 Mbps' },
  { name: 'Name', maxBandwidth: 'Max bandwidth', bandwidthLimit: '0.5 Mbps' },
  { name: 'Name', maxBandwidth: 'Max bandwidth', bandwidthLimit: '0.5 Mbps' },
  { name: 'Name', maxBandwidth: 'Max bandwidth', bandwidthLimit: '0.5 Mbps' },
];

function UserList() {
  return (
    <div className="flex flex-col px-6 pt-4 mt-11 mr-12 ml-11 text-2xl bg-white max-md:pl-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-10 self-center w-full text-gray-500 max-w-[1340px] max-md:max-w-full">
        <div>Name</div>
        <div className="grow shrink w-[156px]">Max bandwidth</div>
        <div className="grow shrink w-[157px]">bandwidth limit</div>
        <div className="grow shrink w-[106px]">Dashboard</div>
      </div>
      <hr className="shrink-0 mt-5 max-w-full border-gray-300 border-solid border-[3px] h-[5px] w-[1437px]" />
      {users.map((user, index) => (
        <React.Fragment key={index}>
          <UserListItem {...user} />
          <hr className="shrink-0 mt-5 max-w-full border-gray-300 border-solid border-[3px] h-[5px] w-[1437px]" />
        </React.Fragment>
      ))}
    </div>
  );
}

export default UserList;