import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAppStore } from "../../../../store";
import SidebarSection from "./SidebarSection";
import { sidebarNavigation } from "../../../../data/dummyData";
import { IconButton, Avatar } from "@mui/material";
import ByWind from "../../../../assets/images/ByeWind.svg"; 

const Sidebar = ({ drawerWidth }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { sidebarOpen, sidebarMobile, closeMobileSidebar } = useAppStore();

  const [activeTab, setActiveTab] = useState("Favorites");

  const drawer = (
    <Box sx={{ overflow: "hidden", height: "100%" }}>

      <Box sx={{ display: "flex", alignItems: "center", p: 3 }}>
        <IconButton sx={{ p: 0, ml: 1 }}>
          <Avatar
            alt="User Profile"
            src={ByWind}
            sx={{ width: 32, height: 32 }}
          />
        </IconButton>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            marginLeft: 1,
          }}
        >
          ByeWind
        </Typography>
      </Box>


      <Box sx={{ p: 2, overflow: "visible" }}>
        <Box sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 1.5,
              px: 2,
            }}
          >
            <Typography
              variant="caption"
              onClick={() => setActiveTab("Favorites")}
              sx={{
                color:
                  activeTab === "Favorites" ? "text.primary" : "text.disabled",
                fontWeight: activeTab === "Favorites" ? 500 : 400,
                fontSize: "14px",
                cursor: "pointer",
                "&:hover": {
                  color: "text.primary",
                },
              }}
            >
              Favorites
            </Typography>
            <Typography
              variant="caption"
              onClick={() => setActiveTab("Recently")}
              sx={{
                color:
                  activeTab === "Recently" ? "text.primary" : "text.disabled",
                fontWeight: activeTab === "Recently" ? 500 : 400,
                fontSize: "14px",
                cursor: "pointer",
                "&:hover": {
                  color: "text.primary",
                },
              }}
            >
              Recently
            </Typography>
          </Box>

          <Box sx={{ px: 2 }}>
            {activeTab === "Favorites" && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    ml: 1
                  }}
                >
                  <Box
                    sx={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      backgroundColor: "text.secondary",
                      mr: 2,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontSize: "14px",
                    }}
                  >
                    Overview
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    py: 1,
                    ml: 1
                  }}
                >
                  <Box
                    sx={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      backgroundColor: "text.secondary",
                      mr: 2,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontSize: "14px",
                    }}
                  >
                    Projects
                  </Typography>
                </Box>
              </>
            )}

            {activeTab === "Recently" && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // py: 1,
                    ml: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      backgroundColor: "text.secondary",
                      mr: 2,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontSize: "14px",
                    }}
                  >
                    Dashboard
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    py: 1,
                    ml: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      backgroundColor: "text.secondary",
                      mr: 2,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontSize: "14px",
                    }}
                  >
                    eCommerce
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Box>

        {sidebarNavigation
          .filter(
            (section) =>
              section.section !== "Favorites" && section.section !== "Recently"
          )
          .map((section, index) => (
            <SidebarSection
              key={section.section}
              section={section}
              isFirst={index === 0}
              showFavoritesRecently={true}
            />
          ))}
      </Box>
    </Box>
  );

  return (
    <>

      {isMobile ? (
        <Drawer
          variant="temporary"
          open={sidebarMobile}
          onClose={closeMobileSidebar}
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
          anchor="left"
          open={sidebarOpen}
          sx={{
            display: { xs: "none", md: "block" },
            width: sidebarOpen ? drawerWidth : 0,
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

export default Sidebar;
