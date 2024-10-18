import React from 'react';
import { FaEdit, FaEye } from 'react-icons/fa'; // Assuming you are using react-icons

function UserListItem({ name, maxBandwidth, bandwidthLimit }) {
  return (
    <div className="flex gap-4 items-center mt-4 ml-8 max-w-full text-neutral-900 w-[1299px]">
      <div className="w-1/4">{name}</div>
      <div className="w-1/4">{maxBandwidth}</div>
      <div className="w-1/4 flex items-center gap-2">
        <div>{bandwidthLimit}</div>
        <FaEdit className="object-contain shrink-0 w-5" />
      </div>
      <FaEye className="object-contain shrink-0 w-5" />
    </div>
  );
}

export default UserListItem;