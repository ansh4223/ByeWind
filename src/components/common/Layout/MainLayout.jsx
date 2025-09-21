import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import RightDrawer from "./RightDrawer/RightDrawer";

const MainLayout = ({ children }) => {

  const leftDrawerWidth = 250;
  const rightDrawerWidth = 320;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />

      {/* Header */}
      <Header
        drawerWidth={leftDrawerWidth}
        rightDrawerWidth={rightDrawerWidth}
      />

      {/* Left Sidebar */}
      <Sidebar drawerWidth={leftDrawerWidth} />

      {/* Main Content Container */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 2 },
          pt: { xs: 10, sm: 8 }, 
          backgroundColor: "background.default",
          minHeight: "100vh",
          overflow: "auto",
        }}
      >
        {children}
      </Box>

      {/* Right Drawer */}
      <RightDrawer drawerWidth={rightDrawerWidth} />
    </Box>
  );
};

export default MainLayout;
