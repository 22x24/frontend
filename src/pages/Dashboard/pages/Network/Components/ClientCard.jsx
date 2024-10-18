import React from 'react';

function ClientCard({ name, maxBandwidth, bandwidthLimit, isOnline }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-xl text-stone-700">
        {/* <img src={isOnline ? "http://b.io/ext_11-" : "http://b.io/ext_12-"} alt="" className="object-contain self-center w-3.5 aspect-[0.13]" /> */}
        <div className="flex flex-col pt-3.5 pb-10 rounded-3xl bg-slate-300">
          <div className="self-center text-3xl text-black">{name}</div>
          <div className="shrink-0 mt-3.5 h-0.5 border-2 border-gray-200 border-solid" />
          <p className="mt-10 mr-3.5 ml-3 max-md:mx-2.5 text-base">Max bandwidth : {maxBandwidth}</p>
          <p className="mt-4 mr-3 ml-3 max-md:mx-2.5 text-base">Bandwidth limit : {bandwidthLimit}</p>
        </div>
      </div>
    </div>
  );
}

export default ClientCard;