import React from 'react';
import { FaEdit, FaEye } from 'react-icons/fa'; // Assuming you are using react-icons
import { useDispatch } from 'react-redux'; // Import useDispatch and useSelector
import { setActivePage } from '../../../../store/pageSlice'; // Import the action


function UserListItem({ name, maxBandwidth, bandwidthLimit }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActivePage("Stats"))
  };

  return (
    <div className="flex gap-4 items-center mt-4 ml-8 max-w-full text-neutral-900 w-[1299px]">
      <div className="w-1/4">{name}</div>
      <div className="w-1/4">{maxBandwidth}</div>
      <div className="w-1/4 flex items-center gap-2">
        <div>{bandwidthLimit}</div>
        <FaEdit className="object-contain shrink-0 w-5" />
      </div>
      <FaEye onClick={handleClick} className="object-contain shrink-0 w-5 cursor-pointer" />
    </div>
  );
}

export default UserListItem;