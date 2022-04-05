import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const CustomAreaChart = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='investment'
          stackId='1'
          stroke='#8884d8'
          fill='#8884d8'
        />
        <Area
          type='monotone'
          dataKey='revenue'
          stackId='1'
          stroke='#82ca9d'
          fill='#82ca9d'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChart;
