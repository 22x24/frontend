import React, { useEffect }from 'react';
import UserListItem from './UserListItem';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { initializeUsersAndServer } from '../../../../store/usersSlice'

function UserList() {
  const dispatch = useDispatch();
  // Dispatch the action to initialize users when the component mounts
  useEffect(() => {
    dispatch(initializeUsersAndServer());  // Dispatching the action on component mount
  }, [dispatch]);
  // Get users from the Redux store
  const users = useSelector((state) => state.user.users);
  // console.log("users getted from store: ", users);
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
      <Pagination />
    </div>
  );
}

export default UserList;
