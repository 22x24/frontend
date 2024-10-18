import React, { useState, useEffect } from 'react';
import NetworkStats from './NetworkStats';
import ClientList from './ClientList';
import ServerInfo from './ServerInfo';

function NetworkPage() {
  const [networkData, setNetworkData] = useState({
    totalClients: 0,
    onlineClients: 0,
    serverMaxOffer: '100Mbps',
    clients: []
  });

  useEffect(() => {
    // Simulating API call to fetch network data
    const fetchNetworkData = async () => {
      // In a real application, this would be an API call
      const data = {
        totalClients: 4,
        onlineClients: 3,
        serverMaxOffer: '100Mbps',
        clients: [
          { id: 1, name: 'Client1', maxBandwidth: '5Mbps', bandwidthLimit: '4Mbps', isOnline: true },
          { id: 2, name: 'Client2', maxBandwidth: '5Mbps', bandwidthLimit: '4Mbps', isOnline: true },
          { id: 3, name: 'Client3', maxBandwidth: '5Mbps', bandwidthLimit: '4Mbps', isOnline: true },
          { id: 4, name: 'Client4', maxBandwidth: '5Mbps', bandwidthLimit: '4Mbps', isOnline: false }
        ]
      };
      setNetworkData(data);
    };

    fetchNetworkData();
  }, []);

  return (
    <section className="flex flex-col grow max-md:max-w-full">
      <h2 className="px-12 py-4 text-4xl font-medium text-black whitespace-nowrap bg-gray-300 max-md:px-5 max-md:max-w-full">
        Network
      </h2>
      <div className="flex flex-col items-end pt-7 pr-14 pb-16 pl-6 mx-12 mt-11 bg-white max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <NetworkStats totalClients={networkData.totalClients} onlineClients={networkData.onlineClients} />
        <ServerInfo maxOffer={networkData.serverMaxOffer} />
        <ClientList clients={networkData.clients} />
      </div>
    </section>
  );
}

export default NetworkPage;