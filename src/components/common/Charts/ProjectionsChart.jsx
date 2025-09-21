import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

const ProjectionsChart = ({ data, title = "Projections vs Actuals" }) => {

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const projections = payload.find(p => p.dataKey === 'projections')?.value || 0;
      const actuals = payload.find(p => p.dataKey === 'actuals')?.value || 0;
      
      return (
        <Paper
          sx={{
            p: 1.5,
            border: '1px solid #e0e0e0',
            borderRadius: 1,
            boxShadow: 2
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
            {label}
          </Typography>
          <Typography variant="caption" sx={{ color: '#7db3d8' }}>
            Actuals: {(actuals / 1000000).toFixed(0)}M
          </Typography>
          <br />
          <Typography variant="caption" sx={{ color: '#b8d4ea' }}>
            Projections: {(projections / 1000000).toFixed(0)}M
          </Typography>
        </Paper>
      );
    }
    return null;
  };

  const formatYAxis = (value) => {
    if (value === 0) return '0';
    return `${(value / 1000000)}M`;
  };

  const processedData = data.map(item => ({
    ...item,
    actualsPortion: item.actuals,
    projectionsPortion: Math.max(0, item.projections - item.actuals)
  }));

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: 'background.paper',
        borderRadius: 3,
        boxShadow: 1,
        height: '100%',
        minHeight: '400px',
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: '1.1rem',
            color: 'text.primary',
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Chart */}
      <Box sx={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={processedData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap="30%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              tickFormatter={formatYAxis}
              domain={[0, 22000000]}
              ticks={[0, 10000000, 20000000, 30000000]}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {/* Actuals Bar - Darker Blue (bottom part) */}
            <Bar
              dataKey="actualsPortion"
              stackId="a"
              fill="#7db3d8"
              radius={[0, 0, 0, 0]}
            />
            
            {/* Projections Bar - Lighter Blue (top part) */}
            <Bar
              dataKey="projectionsPortion"
              stackId="a"
              fill="#b8d4ea"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ProjectionsChart;
