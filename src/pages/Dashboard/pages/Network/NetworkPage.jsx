import React from 'react';
import NetworkStats from './Components/NetworkStats';
import ClientList from './Components/ClientList';
import ServerInfo from './Components/ServerInfo';
import { useSelector } from 'react-redux';

function NetworkPage() {
   // Use useSelector to retrieve the data from Redux store
   const { totalClients, onlineClients, serverMaxOffer } = useSelector((state) => state.user.serverInfo);
   const clients = useSelector((state) => state.user.users);

  return (
    <section className="flex flex-col grow max-md:max-w-full">
      <div className="flex flex-col items-end pt-7 pr-14 pb-16 pl-6 mx-12 mt-11 bg-white max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <NetworkStats totalClients={totalClients} onlineClients={onlineClients} />
        <ServerInfo maxOffer={serverMaxOffer} />
        <ClientList clients={clients} />
      </div>
    </section>
  );
}

export default NetworkPage;