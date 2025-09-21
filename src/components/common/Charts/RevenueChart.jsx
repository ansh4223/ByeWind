import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { revenueChartData } from "../../../data/dummyData";
import { useTheme } from "@mui/material/styles";

const RevenueChart = () => {

  const chartData = revenueChartData.currentWeek.data.map((item, idx) => ({
    month: item.month,
    current: item.value,
    previous: revenueChartData.previousWeek.data[idx].value,
  }));


  const splitMonth = "Apr";
  const splitIndex = chartData.findIndex((d) => d.month === splitMonth);


  const processedData = chartData.map((d, i) => ({
    ...d,
    current: i <= splitIndex ? d.current : null,
    currentD: i >= splitIndex ? d.current : null,
  }));
  const theme = useTheme();

  return (
    <Card sx={{ borderRadius: "12px", boxShadow: "none", backgroundColor: 'background.paper' }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2} mb={4}>
          <Box mr={1} borderRight={1} borderColor={"divider"} pr={2}>
            <Typography fontWeight={600}>
              Revenue
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "black" }} />
            <Typography variant="body2">
              {revenueChartData.currentWeek.label}{" "}
              <strong>${revenueChartData.currentWeek.value.toLocaleString()}</strong>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#8bb7f0" }} />
            <Typography variant="body2">
              {revenueChartData.previousWeek.label}{" "}
              <strong>${revenueChartData.previousWeek.value.toLocaleString()}</strong>
            </Typography>
          </Box>
        </Box>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={processedData}>
            <CartesianGrid vertical={false} stroke={theme.palette.mode === 'dark' ? "#FFFFFF1A" : "#1C1C1C0D"} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${Math.round(v / 1000)}k`}
            />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />

            {/* Previous Week (blue) */}
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#A8C5DA"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />

            {/* Current Week solid */}
            <Line
              type="monotone"
              dataKey="current"
              stroke={theme.palette.mode === 'dark' ? "#C6C7F8" : "#000"}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
              connectNulls={true}
            />

            {/* Current Week dotted */}
            <Line
              type="monotone"
              dataKey="currentD"
              stroke={theme.palette.mode === 'dark' ? "#C6C7F8" : "#000"}
              strokeWidth={2}
              dot={false}
              strokeDasharray="6 6"
              isAnimationActive={false}
              connectNulls={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
