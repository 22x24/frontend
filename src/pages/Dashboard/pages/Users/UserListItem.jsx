import React, { useState } from 'react';
import { FaEdit, FaEye } from 'react-icons/fa'; // Assuming you are using react-icons
import { useDispatch } from 'react-redux'; // Import useDispatch and useSelector
import { setActivePage } from '../../../../store/pageSlice'; // Import the action

function UserListItem({id, name, maxBandwidth, bandwidthLimit }) {
  const dispatch = useDispatch();
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [newBandwidthLimit, setNewBandwidthLimit] = useState(bandwidthLimit);

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
      <div className="flex gap-4 items-center mt-4 ml-8 max-w-full text-neutral-900 w-[1299px]">
        <div className="w-1/4">{name}</div>
        <div className="w-1/4">{maxBandwidth}</div>
        <div className="w-1/4 flex items-center gap-2">
          <div>{bandwidthLimit}</div>
          <FaEdit onClick={handleEditClick} className="object-contain shrink-0 w-5 cursor-pointer" />
        </div>
        <FaEye onClick={handleClick} className="object-contain shrink-0 w-5 cursor-pointer" />
      </div>

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
