import React from 'react';

function Pagination() {
  return (
    <nav className="flex gap-5 justify-between items-center self-center mt-20 max-w-full text-2xl text-black whitespace-nowrap w-[276px] max-md:mt-10" aria-label="Pagination">
      <button className="flex shrink-0 self-stretch my-auto w-10 bg-white h-[33px]" aria-label="Previous page"></button>
      <div className="flex flex-col justify-center self-stretch px-5 py-2.5 bg-white">
        <div className="px-7 py-2 bg-zinc-100 max-md:px-5">1</div>
      </div>
      <button className="flex shrink-0 self-stretch my-auto w-10 bg-white h-[33px]" aria-label="Next page"></button>
    </nav>
  );
}

export default Pagination;