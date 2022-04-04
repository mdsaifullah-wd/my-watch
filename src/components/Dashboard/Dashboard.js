import React, { useEffect, useState } from 'react';
import CustomAreaChart from '../CustomAreaChart/CustomAreaChart';
import CustomLineChart from '../LineChart/CustomLineChart';

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className='grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto p-8'>
      <CustomLineChart data={data} key={data.month}></CustomLineChart>
      <CustomAreaChart data={data} key={data.month}></CustomAreaChart>
    </section>
  );
};

export default Dashboard;
