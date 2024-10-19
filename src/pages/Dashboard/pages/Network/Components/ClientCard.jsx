import React from 'react';

function ClientCard({ username, plan, bandWidth, isConnected }) {
  console.log(username,plan,bandWidth)
  return (
    <div className="relative flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="absolute top-4 right-4 w-4 h-4 rounded-full border-2 border-white" style={{ backgroundColor: isConnected ? 'green' : 'orange' }}></div>
      <div className="flex flex-col grow text-xl text-stone-700">
        <div className="flex flex-col pt-3.5 pb-10 rounded-3xl bg-slate-300">
          <div className="self-center text-2xl font-medium text-black">{username}</div>
          <div className="shrink-0 mt-3.5 h-0.5 border-2 border-gray-200 border-solid" />
          <p className="mt-10 mr-3.5 ml-3 max-md:mx-2.5 text-base">Max bandwidth : {plan}</p>
          <p className="mt-4 mr-3 ml-3 max-md:mx-2.5 text-base">Bandwidth limit : {bandWidth}</p>
        </div>
      </div>
    </div>
  );
}

export default ClientCard;