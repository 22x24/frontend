import React, { useContext, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateBandWidthLimit } from "../../../../actions/manager";
import { IoEyeOutline } from "react-icons/io5";
import { getUsers } from "../../../../actions/manager";
import { UserContext } from "../../../../provider/userProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function UserList() {
  //const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  // Dispatch the action to initialize users when the component mounts
  //useEffect(() => {
  //dispatch(initializeUsersAndServer());  // Dispatching the action on component mount
  //}, [dispatch]);
  // Get users from the Redux store
  //const users = useSelector((state) => state.user.users);
  // console.log("users getted from store: ", users);
  const { setUsers,setActivePage,setSelectedUserId } = useContext(UserContext);
  const [users, setUsersL] = useState([]);
  const [userId, setUserId] = useState("");
  const [selectedBandWidth,setSelectedBandWidth]=useState("")
  const [openOverlay, setOverlay] = useState(false);
  const handleUserStats=(userId)=>{
    setSelectedUserId(userId);
    setActivePage(`User ${userId} - Bandwidth Consumption`)
  }

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((data) => {
        setUsersL(data);
        setUsers(data);
      })
      .catch(() => setIsLoading(false))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="flex-1 overflow-hidden">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Search bar */}
        <div className="mb-4">
          <Input type="text" placeholder="Users" className="w-full" />
        </div>

        {/* Users table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Max bandwidth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  bandwidth limit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dashboard
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.length ? (
                users.map((user, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.plan}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.bandWidth}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => {
                          setOverlay(true);
                          setUserId(user.userId);
                          setSelectedBandWidth(user.bandWidth)
                        }}
                      >
                        <FaRegEdit className="h-4 w-4"
                        />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={()=>handleUserStats(user.userId)}
                      >
                        <IoEyeOutline className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <span>no user found</span>
              )}
            </tbody>
          </table>
        </div>

              {
                openOverlay &&
              
        <div className="absolute inset-0 bg-black/80 w-full h-full flex items-center justify-center z-50">
          <EditLimitForm  userId={userId} bandWidth={selectedBandWidth} setOverlay={setOverlay}/>
        </div>
              }
        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <Button variant="outline">Previous</Button>
            <Button variant="outline">Next</Button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">10</span> of{" "}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <Button
                  variant="outline"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  {/* Add chevron-left icon here */}
                </Button>
                <Button
                  variant="outline"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  {/* Add chevron-right icon here */}
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserList;

const EditLimitForm = ({ userId,bandWidth,setOverlay }) => {
  const [newBandLimit,setNewBandLimit] = useState(bandWidth.split(" ")[0])
  const handleInputChange=(e)=>{
    setNewBandLimit(e.target.value)
  }
  const handleOverlayClose=()=>setOverlay(false)
  const handleEditLimit=async()=>{
    const res = await updateBandWidthLimit(userId,newBandLimit)
    if(typeof res == "object" && res.message){
      toast.success(res.message)
      setOverlay(false)
      window.location.reload()
    }
  }
  return (
    <div className="bg-white px-6 py-4 rounded-lg shadow-lg flex flex-col justify-center items-center">
      <h3 className="font-semibold text-slate-800">New Bandwidth Limit</h3>
      <div className="flex justify-center items-center">
        <input
          type="number"
          value={newBandLimit}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <span>bytes</span>
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleOverlayClose}
          className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-700"
        >
          Cancel
        </button>
        <button
          onClick={handleEditLimit}
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
{
  /*
  <tr key={index}>
   <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
   <td className="px-6 py-4 whitespace-nowrap">{user.plan}</td>
   <td className="px-6 py-4 whitespace-nowrap">{user.bandWidth}</td>
   <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
     <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-900">
       <FaRegEdit className="h-4 w-4" />
     </Button>
     <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-900">
       <IoEyeOutline className="h-4 w-4" />
     </Button>
   </td>
 </tr>
  */
}
