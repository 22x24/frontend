import React from 'react';

function NetworkStats({ totalClients, onlineClients }) {
  return (
    <div className="flex gap-5 self-start max-md:flex-col">
      <div className="flex gap-3 py-4 pr-12 pl-3.5 rounded-xl bg-slate-100 max-md:pr-5">
        <div className="shrink-0 w-1 border-4 border-green-500 border-solid h-[91px]" />
        <div className="flex flex-col self-start">
          <div className="text-xl text-gray-500">Total of clients</div>
          <div className="self-start mt-1.5 text-4xl text-black">{totalClients}</div>
        </div>
      </div>
      <div className="flex gap-2.5 items-start py-4 pr-12 pl-3.5 rounded-xl bg-slate-100 max-md:pr-5">
        <div className="shrink-0 w-1 border-4 border-yellow-400 border-solid h-[91px]" />
        <div className="flex flex-col">
          <div className="text-xl text-gray-500">Online clients</div>
          <div className="self-start mt-1.5 text-4xl text-black">{onlineClients}</div>
        </div>
      </div>
    </div>
  );
}

export default NetworkStats;