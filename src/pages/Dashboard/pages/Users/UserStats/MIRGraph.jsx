import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function MIRGraph({ id, title = "MIR" }) {
  const user = useSelector((state) => state.user.users.find((user) => user.id === id));



  if (!user) {
    return <div>User not found</div>;
  }

  const { history, stats } = user;
  const yAxisLabels = Object.values(stats);

  return (
    <>
      <h2 className="self-start mt-20 text-3xl font-medium text-stone-300 max-md:mt-10">{title}</h2>
      <div className="flex flex-wrap gap-6 items-start mt-20 font-medium max-md:mt-10 max-md:max-w-full">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={history}>
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