import React from 'react';

function UserListItem({ name, maxBandwidth, bandwidthLimit }) {
  return (
    <div className="flex gap-10 items-start mt-4 ml-8 max-w-full text-neutral-900 w-[1299px]">
      <div className="mt-2.5">{name}</div>
      <div className="grow shrink mt-2.5 w-[161px]">{maxBandwidth}</div>
      <div className="flex gap-9 text-black">
        <div>{bandwidthLimit}</div>
        <img loading="lazy" src="http://b.io/ext_13-" className="object-contain shrink-0 w-8 aspect-[0.97]" alt="" />
      </div>
      <img loading="lazy" src="http://b.io/ext_14-" className="object-contain shrink-0 aspect-square w-[38px]" alt="" />
    </div>
  );
}

export default UserListItem;