import React, { useState } from 'react';
import { FaEdit, FaEye } from 'react-icons/fa'; // Assuming you are using react-icons
import { useDispatch } from 'react-redux'; // Import useDispatch and useSelector
import { setActivePage, setCurrentUserId } from '../../../../store/pageSlice'; // Import the action
import {Button} from "@/components/ui/button"
 function UserListItem({userId, username, plan, bandWidth }) {
  const dispatch = useDispatch();
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [newBandwidthLimit, setNewBandwidthLimit] = useState(bandWidth);

  const handleClick = () => {
    dispatch(setActivePage("Stats"));
    dispatch(setCurrentUserId(id));
  };

  const handleEditClick = () => {
    setOverlayVisible(true);
  };

  const handleOverlayClose = () => {
    setOverlayVisible(false);
  };

  const handleInputChange = (e) => {
    setNewBandwidthLimit(e.target.value);
  };

  return (
    <div className="relative">
      {/*<div className="flex gap-4 items-center mt-4 ml-8 max-w-full text-neutral-900 w-[1299px]">
        <div className="w-1/4">{username}</div>
        <div className="w-1/4">{plan}</div>
        <div className="w-1/4 flex items-center gap-2">
          <div>{bandWidth}</div>
          <FaEdit onClick={handleEditClick} className="object-contain shrink-0 w-5 cursor-pointer" />
        </div>
        <FaEye onClick={handleClick} className="object-contain shrink-0 w-5 cursor-pointer" />
      </div>*/}
      <tr className='w-[1000px]'>
   <td className="px-6 py-4 whitespace-nowrap">{username}</td>
   <td className="px-6 py-4 whitespace-nowrap">{plan}</td>
   <td className="px-6 py-4 whitespace-nowrap">{bandWidth}</td>
   <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
     <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-900">
       <FaEdit className="h-4 w-4" />
     </Button>
     <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-900">
       <FaEye className="h-4 w-4" />
     </Button>
   </td>
   </tr>

      {isOverlayVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded shadow-lg flex flex-col justify-center items-center">
            <div className='flex flex-row justify-center items-center'>
              <label className="block mb-2">New Bandwidth Limit</label>
              <input
                type="number"
                value={newBandwidthLimit}
                onChange={handleInputChange}
                className="border p-2 mb-2 w-full"
              />
              <span>Mbps</span>
            </div>
            <div className='flex gap-4'>
              <button onClick={handleOverlayClose} className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-700">
                Cancel
              </button>
              <button onClick={handleOverlayClose} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserListItem;
