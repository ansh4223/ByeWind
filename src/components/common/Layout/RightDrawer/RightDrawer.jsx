import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { X } from "lucide-react";
import { useAppStore } from "../../../../store";
import NotificationPanel from "./NotificationPanel";
import ActivityPanel from "./ActivityPanel";
import ContactPanel from "./ContactPanel";

const RightDrawer = ({ drawerWidth = 320 }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const {
    rightDrawerOpen,
    rightDrawerMobile,
    toggleRightDrawer,
    closeMobileRightDrawer,
  } = useAppStore();

  const drawer = (
    <Box sx={{ overflow: "auto", height: "100%", p: 2 }}>

      {/* Notifications Section */}
      <Box sx={{ mb: 3 }}>
        <NotificationPanel />
      </Box>

      {/* Activities Section */}
      <Box sx={{ mb: 3 }}>
        <ActivityPanel />
      </Box>

      {/* Contacts Section */}
      <Box>
        <ContactPanel />
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          anchor="right"
          open={rightDrawerMobile}
          onClose={closeMobileRightDrawer}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Drawer
          variant="persistent"
          anchor="right"
          open={rightDrawerOpen}
          sx={{
            display: { xs: "none", md: "block" },
            width: rightDrawerOpen ? drawerWidth : 0,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default RightDrawer;
