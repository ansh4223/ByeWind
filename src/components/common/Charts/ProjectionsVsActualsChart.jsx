import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { projectionsActualsData } from "../../../data/dummyData"; 
import { useTheme } from "@mui/material/styles";

const ProjectionsVsActualsChart = ({ title = "Projections vs Actuals" }) => {
  const theme = useTheme();
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ p: 3, height: "100%" }}>
        {/* Title */}
        <Typography
          
          sx={{ fontWeight: 600, mb: 3 }}
        >
          {title}
        </Typography>

        {/* Chart Wrapper */}
        <Box sx={{ width: "100%", height: "calc(100% - 30px)" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={projectionsActualsData} 
              barCategoryGap={30}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <CartesianGrid vertical={false} stroke={theme.palette.mode === 'dark' ? "#FFFFFF1A" : "#1C1C1C0D"} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 14 }}
              />
              <YAxis
                tickFormatter={(val) => `${val / 1000000}M`}
                axisLine={false}
                tickLine={false}
                domain={[0, 30000000]}
                ticks={[0, 10000000, 20000000, 30000000]}
                tick={{ fill: "#9CA3AF", fontSize: 14 }}
              />
              <Tooltip
                formatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                cursor={{ fill: "transparent" }}
              />
              {/* Actuals */}
              <Bar
                dataKey="actuals"
                stackId="a"
                fill="#A8C5DA"
                
                barSize={20}
                // opacity={0.5}
              />
              {/* Projection difference */}
              <Bar
                dataKey={(d) => d.projections - d.actuals}
                stackId="a"
                fill="#A8C5DA"
                radius={[4, 4, 0, 0]}
                barSize={20}
                opacity={0.5}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectionsVsActualsChart;
