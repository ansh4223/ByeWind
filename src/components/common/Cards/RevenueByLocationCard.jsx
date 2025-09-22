import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const RevenueByLocationCard = ({ data, title = "Revenue by Location" }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  return (
    <Box
      sx={{
        p: 2.5,
        backgroundColor: 'background.paper',
        borderRadius: 3,
        boxShadow: 'none',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography 
        sx={{ 
          fontWeight: 600, 
          mb: 1,
          color: 'text.primary'
        }}
      >
        {title}
      </Typography>
      
      <Box sx={{ 
        mb: 1, 
        height: '90px',
        width: '100%'
      }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 170,
            center: [0, 10]
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#e3f2fd"
                  stroke="#bbdefb"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "#bbdefb" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          <Marker coordinates={[-74.006, 40.7128]}>
            <circle r={16} fill="#1f2937" stroke="#ffffff" strokeWidth={8} />
          </Marker>
          <Marker coordinates={[-122.4194, 37.7749]}>
            <circle r={16} fill="#1f2937" stroke="#ffffff" strokeWidth={8} />
          </Marker>
          <Marker coordinates={[151.2093, -33.8688]}>
            <circle r={16} fill="#1f2937" stroke="#ffffff" strokeWidth={8} />
          </Marker>
          <Marker coordinates={[103.8198, 1.3521]}>
            <circle r={16} fill="#1f2937" stroke="#ffffff" strokeWidth={8} />
          </Marker>
        </ComposableMap>
      </Box>
      
      {/* Location Data List with Progress Bars */}
      <Box>
        {data.map((location, index) => {
          const currentValue = parseFloat(location.value.replace(/[$,k]/g, ''));
          const progressPercent = Math.min((currentValue / 100) * 100, 100); 
          
          return (
            <Box
              key={location.city}
              sx={{
                py: 1,
                // borderBottom: index === data.length - 1 ? "none" : "1px solid",
                // borderColor: "divider",
              }}
            >
              {/* City name and value row */}
              <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1
              }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 500,
                    color: 'text.primary'
                  }}
                >
                  {location.city}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600,
                    color: 'text.primary'
                  }}
                >
                  {location.value}
                </Typography>
              </Box>
              
              {/* Progress bar */}
              <Box sx={{
                width: '100%',
                height: '4px',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(158, 158, 158, 0.2)',
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <Box sx={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  backgroundColor: '#A8C5DA',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease-in-out'
                }} />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default RevenueByLocationCard;
