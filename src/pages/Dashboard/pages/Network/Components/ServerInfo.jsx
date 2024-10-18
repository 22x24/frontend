import React from 'react';

function ServerInfo({ maxOffer }) {
  return (
    <div className="flex flex-col self-center mt-36 max-w-full w-[266px] max-md:mt-10">
      <div className="flex flex-col px-7 pt-5 pb-20 bg-gray-200 rounded-2xl max-md:px-5">
        <div className="self-center text-3xl text-black">Server</div>
        <div className="mt-10 text-xl text-zinc-600 max-md:mt-10">Max offer : {maxOffer}</div>
      </div>
      <div className="shrink-0 self-center border-solid border-[3px] border-zinc-400 h-[72px] w-[3px]" />
    </div>
  );
}

export default ServerInfo;