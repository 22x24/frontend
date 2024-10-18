import React from 'react';
import ClientCard from './ClientCard';

function ClientList({ clients }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative w-full">
        <div className="h-[4px] w-full bg-zinc-400"></div>
        <div className="flex justify-around w-full gap-5 max-md:flex-col">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="border-solid border-[3px] border-zinc-400 h-[72px] w-[3px]"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-start gap-5 max-w-full w-[1305px] max-md:flex-col">
        {clients.map((client) => (
          <ClientCard key={client.id} {...client} />
        ))}
      </div>
    </div>
  );
}

export default ClientList;