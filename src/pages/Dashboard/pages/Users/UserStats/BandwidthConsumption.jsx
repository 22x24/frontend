import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '../../../../../store/pageSlice'; // Update this path to your actual actions file
import BandwidthStats from './BandwidthStats';
import MIRGraph from './MIRGraph';
import { FaArrowLeft } from 'react-icons/fa'; // Import an icon from react-icons
import { UserContext } from '../../../../../provider/userProvider';

function BandwidthConsumption() {
  //const dispatch = useDispatch();
  //const selectedUserId = useSelector((state) => state.page.currentUserId); // Get activePage from Redux
  //console.log("selected user id: ", selectedUserId);
  console.log("whajhsvhde")
  const {selectedUserId}=useContext(UserContext)
  const handleReturnClick = () => {
    dispatch(setActivePage("Users"));
  };

  return (
    <div className="flex flex-col px-12 pt-10 pb-16 mt-11 mr-11 ml-12 bg-white max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <button onClick={handleReturnClick} className="self-start mb-4">
        <FaArrowLeft className="text-xl" /> {/* Adjust the icon size and styling as needed */}
      </button>
      <div className="self-center max-w-full w-[1184px]">
        <BandwidthStats id={selectedUserId}/>
        <MIRGraph id={selectedUserId}/>
      </div>
    </div>
  );
}

export default BandwidthConsumption;