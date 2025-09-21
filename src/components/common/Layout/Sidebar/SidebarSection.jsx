import React from "react";
import { Typography, Box } from "@mui/material";
import SidebarItem from "./SidebarItem";

const SidebarSection = ({ section, isFirst, showFavoritesRecently }) => {
  const { section: sectionName, items } = section;

  if (
    showFavoritesRecently &&
    (sectionName === "Favorites" || sectionName === "Recently")
  ) {
    return null; 
  }

  return (
    <Box>
      {sectionName && items.length > 0 && (
        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
            fontWeight: 400,
            fontSize: "14px",
            mt: isFirst ? 0 : 2,
            display: "block",
            px: 2,
            py: 1,
          }}
        >
          {sectionName}
        </Typography>
      )}

      {items.map((item) => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default SidebarSection;
