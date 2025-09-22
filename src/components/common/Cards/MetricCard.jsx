import React, { useState } from "react";
import { Card, Typography, Box, useTheme } from "@mui/material";
import ArrowUpwardIcon from "../../../assets/images/uparrow.svg";
import ArrowDownwardIcon from "../../../assets/images/donwarrow.svg";

const getChangeColor = (changeType) =>
  changeType === "increase" ? "success.main" : "error.main";

const getBgColor = (title, theme) => {
  const isDark = theme.palette.mode === 'dark';
  
  if (title === "Customers") {
    return "#E3F5FF"; 
  }
  if (title === "Growth") {
    return  "#E5ECF6"; 
  }
  return isDark ? "rgba(158, 158, 158, 0.1)" : "#F7F8FA";
};

const getTextColor = (title) => {
  if (title === "Customers" || title === "Growth") {
    return "#000000";
  }
  return "text.primary"; 
};

export default function MetricCard({
  value,
  change,
  changeType,
  title,
  currency,
  unit,
  onClick,
  isClickable = false,
}) {
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();

  const getArrowFilter = () => {
    if (title === "Customers" || title === "Growth") {
      return 'brightness(0)'; 
    }
    return theme.palette.mode === 'dark' ? 'brightness(0) invert(1)' : 'none';
  };

  const arrowIcon =
    changeType === "increase" ? (
      <img 
        src={ArrowUpwardIcon} 
        alt="up arrow" 
        style={{ 
          marginLeft: '4px', 
          width: '12px', 
          height: '12px',
          filter: getArrowFilter()
        }} 
      />
    ) : (
      <img 
        src={ArrowDownwardIcon} 
        alt="down arrow" 
        style={{ 
          marginLeft: '4px', 
          width: '12px', 
          height: '12px',
          filter: getArrowFilter()
        }} 
      />
    );
  const displayValue = currency
    ? `${currency}${value}`
    : unit
    ? `${value}${unit}`
    : value;
  const displayChange = (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      {changeType === "increase" ? "+" : ""}
      {change}
      {unit ? unit : "%"}
      {arrowIcon}
    </span>
  );

  return (
    <Card
      sx={{
        background: getBgColor(title, theme),
        borderRadius: 3,
        boxShadow: "none",
        p: 2,
        minWidth: 180,
        cursor: isClickable ? "pointer" : "default",
        transition: "box-shadow 0.2s",
        "&:hover": { 
          boxShadow: theme.palette.mode === 'dark' 
            ? "0 4px 6px -1px rgba(255, 255, 255, 0.1)" 
            : 2 
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={isClickable ? onClick : undefined}
      elevation={0}
    >
      <Typography variant="subtitle1" color={getTextColor(title)} sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          // gap: 8,
          flexDirection: hovered ? "row-reverse" : "row",
          justifyContent: "space-between",
          width:"100%",
          transition: "flex-direction 0.2s",
        }}
      >
        <Typography sx={{fontSize:"24px"}} fontWeight={600} color={getTextColor(title)}>
          {displayValue}
        </Typography>
        <Typography
          variant="body2"
          color={getChangeColor(changeType)}
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: hovered ? 0 : 1,
            mr: hovered ? 1 : 0,
          }}
        >
          {displayChange}
        </Typography>
      </Box>
    </Card>
  );
}
