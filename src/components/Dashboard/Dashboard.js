import React, { useEffect, useState } from 'react';
import CustomAreaChart from '../CustomAreaChart/CustomAreaChart';
import CustomComposedChart from '../CustomComposedChart/CustomComposedChart';
import CustomPieChart from '../CustomPieChart/CustomPieChart';
import CustomLineChart from '../LineChart/CustomLineChart';

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className='grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto p-8 pb-20'>
      <div>
        <h2 className='text-2xl text-blue-800 text-center mb-8'>
          Monthly Sales
        </h2>
        <CustomLineChart data={data} key={data.month}></CustomLineChart>
      </div>
      <div>
        <h2 className='text-2xl text-blue-800 text-center mb-8'>
          Investment vs Revenue
        </h2>
        <CustomAreaChart data={data} key={data.month}></CustomAreaChart>
      </div>
      <div>
        <h2 className='text-2xl text-blue-800 text-center mb-8'>
          Investment vs Expected Revenue vs Revenue
        </h2>
        <CustomComposedChart data={data} key={data.month}></CustomComposedChart>
      </div>
      <div>
        <h2 className='text-2xl text-blue-800 text-center mb-8'>
          Investment Pie Chart
        </h2>
        <CustomPieChart data={data} key={data.month}></CustomPieChart>
      </div>
    </section>
  );
};

export default Dashboard;
