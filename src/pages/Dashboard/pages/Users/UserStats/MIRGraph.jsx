import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', value: 10 },
  { time: '01:00', value: 7.5 },
  { time: '02:00', value: 5 },
  { time: '03:00', value: 2.5 },
  { time: '04:00', value: 1 },
  // Add more data points as needed
];

function MIRGraph({ yAxisLabels = ["10 Mbps", "7.5 Mbps", "5 Mbps", "2.5 Mbps", "1 Mbps"], title = "MIR" }) {
  return (
    <>
      <h2 className="self-start mt-20 text-3xl font-medium text-stone-300 max-md:mt-10">{title}</h2>
      <div className="flex flex-wrap gap-6 items-start mt-20 font-medium max-md:mt-10 max-md:max-w-full">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[0, 10]} ticks={[10, 7.5, 5, 2.5, 1]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default MIRGraph;