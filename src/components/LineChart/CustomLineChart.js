import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const CustomLineChart = ({ data }) => {
  return (
    <LineChart width={500} height={400} data={data}>
      <Line type='monotone' dataKey='sell' stroke='#8884d8' strokeWidth={2} />
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <XAxis dataKey='month' />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default CustomLineChart;
