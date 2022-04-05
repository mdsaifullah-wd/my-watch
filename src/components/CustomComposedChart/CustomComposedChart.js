import React from 'react';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const CustomComposedChart = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <ComposedChart data={data}>
        <CartesianGrid stroke='#f5f5f5' />
        <XAxis dataKey='month' scale='band' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type='monotone'
          dataKey='revenue'
          fill='#8884d8'
          stroke='#8884d8'
        />
        <Bar dataKey='investment' barSize={20} fill='#413ea0' />
        <Line
          type='monotone'
          dataKey='expectedRevenue'
          stroke='#ff7300'
          strokeWidth={2}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CustomComposedChart;
