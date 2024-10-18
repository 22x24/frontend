import React from 'react';
import ClientCard from './ClientCard';

function ClientList({ clients }) {
  return (
    <div className="flex gap-5 max-w-full w-[1305px] max-md:flex-col">
      {clients.map((client) => (
        <ClientCard key={client.id} {...client} />
      ))}
    </div>
  );
}

export default ClientList;