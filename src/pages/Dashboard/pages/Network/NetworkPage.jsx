import React, { useContext } from 'react';
import NetworkStats from './Components/NetworkStats';
import ClientList from './Components/ClientList';
import ServerInfo from './Components/ServerInfo';
import { useSelector } from 'react-redux';
import { UserContext } from '../../../../provider/userProvider';

function NetworkPage() {
  const {users,max} = useContext(UserContext)
  const onlineClients = users.filter(user => user.isConnected).length
   // Use useSelector to retrieve the data from Redux store
   //const { totalClients, serverMaxOffer } = useSelector((state) => state.user.serverInfo);
   //const clients = useSelector((state) => state.user.users);
console.log(max)
  return (
    <section className="flex flex-col grow max-md:max-w-full">
      <div className="flex flex-col items-end pt-7 pr-14 pb-16 pl-6 mx-12 mt-11 bg-white max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <NetworkStats totalClients={users.length} onlineClients={onlineClients} />
        <ServerInfo maxOffer={max} />
        <ClientList clients={users} />
      </div>
    </section>
  );
}

export default NetworkPage;