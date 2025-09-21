import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useTheme } from "@mui/material/styles";

const DonutChart = ({ data, title = "Total Sales", centerValue = "" }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Theme-aware colors for chart segments
  const getChartColors = () => {
    if (isDark) {
      return ["#C6C7F8", "#95A4FC", "#B1E3FF", "#BAEDBD"];
    } else {
      return ["#1C1C1C", "#BAEDBD", "#B1E3FF", "#95A4FC"];
    }
  };

  const colors = getChartColors();

  const chartData = data?.breakdown || [
    { category: "Direct", value: 300.56, color: colors[0] },
    { category: "Affiliate", value: 135.18, color: colors[1] },
    { category: "Sponsored", value: 154.02, color: colors[2] },
    { category: "E-mail", value: 48.96, color: colors[3] },
  ];

  return (
    <Card
      sx={{
        minWidth: 300,
        borderRadius: 3,
        boxShadow: 1,
        backgroundColor: "background.paper",
        height: "100%",
      }}
    >
      <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
            color: "text.primary",
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            height: 200,
            position: "relative",
            mb: 2,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={75}
                paddingAngle={1}
                cornerRadius={0}
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Value */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "text.primary",
                lineHeight: 1,
              }}
            >
              {centerValue}%
            </Typography>
          </Box>
        </Box>

        {/* Legend */}
        <List sx={{ p: 0 }}>
          {chartData.map((item, index) => (
            <ListItem
              key={item.category}
              sx={{
                px: 0,
                py: 0.5,
                minHeight: "auto",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  mr: 1.5,
                  flexShrink: 0,
                }}
              />
              <ListItemText
                sx={{
                  margin: 0,
                  "& .MuiListItemText-primary": {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                }}
                primary={
                  <>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        fontSize: "0.875rem",
                      }}
                    >
                      {item.category}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        fontSize: "0.875rem",
                      }}
                    >
                      ${item.value.toFixed(2)}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default DonutChart;
