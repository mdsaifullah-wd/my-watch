import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const CustomPieChart = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <PieChart>
        <Pie
          dataKey='investment'
          data={data}
          innerRadius={80}
          fill='#82ca9d'
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
