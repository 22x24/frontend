import React from 'react';

function MIRGraph({ yAxisLabels = ["10 Mbps", "7.5 Mbps", "5 Mbps", "2.5 Mbps", "1 Mbps"], title = "MIR" }) {
  return (
    <>
      <h2 className="self-start mt-20 text-3xl font-medium text-stone-300 max-md:mt-10">{title}</h2>
      <div className="flex flex-wrap gap-6 items-start mt-20 font-medium max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-start text-base text-neutral-500">
          {yAxisLabels.map((label, index) => (
            <div key={index} className={index > 0 ? "mt-9" : "max-md:mr-1"}>
              {label}
            </div>
          ))}
        </div>
        <div className="flex flex-col grow shrink-0 self-end mt-12 text-3xl whitespace-nowrap basis-0 text-stone-300 w-fit max-md:mt-10 max-md:max-w-full">
          <div className="flex shrink-0 max-w-full border-cyan-100 border-solid border-[5px] h-[157px] w-[1117px]" />
          <div className="self-end mt-44 max-md:mt-10">Time</div>
        </div>
      </div>
    </>
  );
}

export default MIRGraph;