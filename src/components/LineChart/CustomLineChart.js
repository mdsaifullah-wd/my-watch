import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const CustomLineChart = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <LineChart data={data}>
        <Line type='monotone' dataKey='sell' stroke='#8884d8' strokeWidth={2} />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
