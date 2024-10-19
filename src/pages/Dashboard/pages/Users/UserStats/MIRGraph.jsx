import React, { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { UserContext } from '../../../../../provider/userProvider';
import { getBandWidthHistory } from '../../../../../actions/manager';
import ChartDataLabels from "chartjs-plugin-datalabels"
import "chart.js/auto"
function MIRGraph({ id, title = "MIR" }) {
  const {users} = useContext(UserContext)
  const user = users.find(user => user.userId === id)
  const [history,setHistory] = useState([])
  if (!user) {
    return <div>User not found</div>;
  }

  console.log(user)
  const [charData,setCharData] = useState({})

  useEffect(()=>{
    const getHistory = async()=>{
      console.log("valled")
      const history = await getBandWidthHistory(user.userId)
      setHistory(history)
      if(history.length > 0){
        const timestamps = history.map(log => new Date(log.timestamp).toLocaleDateString("en-US",{
          year: '2-digit', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'
        }))
        const bandwidths = history.map(log => log.bandwidth)

        //  set up data for chart
        setCharData({
          labels:timestamps,
          datasets:[
            {
              label : "Brandwidth (Unit/s)",
              data : bandwidths,
              fill:false,
              backgroundColor: "rgba(75,192,192,1)",
              tension:0
            }
          ]
        })
      }
    }

    getHistory()
    // set boucle to get new values each 10 minutes
    setInterval(async()=>{
      await getHistory()
    },600000)
  },[])

  //const { history, stats } = user;
  //const yAxisLabels = Object.values(stats);

  console.log(charData)
  const options = {
    scales : {
      x:{
        title:{
          display:true,
          text:"Time"
        }
      },
      y:{
        title:{
          display:true,
          text:"Bandwidth (Kb/S)",
          beginAtZero:true,
          suggestMax:
          Math.max(...history.map(log =>log.bandwidth)) * 1.2,
          ticks : {
            stepSize:
            Math.max(...history.map(log =>log.bandwidth)) / 5
          }
        }
      },
      },
      responsive:true,
      maintainAspectRation:false,
      plugins:{
        datalabels: {
          color: "black",
          display: true,
          align:'top',
          formatter:(value)=>`${value} Kbps`,

          font:{
            weight: "bold",
          }
        }
    }
  }
  return (
    <>
      <h2 className="self-start mt-20 text-3xl font-medium text-stone-300 max-md:mt-10">{title}</h2>
      <div className="flex flex-wrap gap-6 items-start mt-20 font-medium max-md:mt-10 max-md:max-w-full">
          {charData.labels && <Line data={charData} options={options} />}
      </div>
    </>
  );
}

export default MIRGraph;