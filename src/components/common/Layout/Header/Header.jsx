import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
  Badge,
  Avatar,
  useMediaQuery,
  useTheme,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import {
  Menu,
  Search,
  Bell,
  Settings,
  Sun,
  Moon,
  PanelRight,
  PanelLeft,
  ChevronRight,
  Home,
} from "lucide-react";
import { useAppStore } from "../../../../store";
import { PersonalInjury } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import StarIcon from "../../../../assets/images/star.svg";

const SearchBox = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.common.white, 0.1)
      : alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? alpha(theme.palette.common.white, 0.15)
        : alpha(theme.palette.common.black, 0.08),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = ({ drawerWidth, rightDrawerWidth = 320 }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();
  const {
    sidebarOpen,
    toggleSidebar,
    toggleMobileSidebar,
    rightDrawerOpen,
    toggleRightDrawer,
    toggleMobileRightDrawer,
    darkMode,
    toggleDarkMode,
    searchQuery,
    setSearchQuery,
  } = useAppStore();

  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);

    const breadcrumbMap = {
      "": "Dashboard",
      default: "Default",
      ecommerce: "eCommerce",
      projects: "Projects",
      courses: "Online Courses",
      profile: "User Profile",
      account: "Account",
      corporate: "Corporate",
      blog: "Blog",
      social: "Social",
      orders: "Orders",
      overview: "Overview",
      campaigns: "Campaigns",
      documents: "Documents",
      followers: "Followers",
    };

    const breadcrumbs = [
      {
        label: "Dashboard",
        path: "/",
        icon: (
          <img
            src={StarIcon}
            alt="Dashboard"
            width={20}
            height={20}
            style={{
              filter: darkMode
                ? "invert(1) sepia(1) saturate(0) hue-rotate(180deg) brightness(1)"
                : "none",
            }}
          />
        ),
      },
    ];

    let currentPath = "";
    pathnames.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label =
        breadcrumbMap[segment] ||
        segment.charAt(0).toUpperCase() + segment.slice(1);

      breadcrumbs.push({
        label,
        path: currentPath,
        isLast: index === pathnames.length - 1,
      });
    });

    return breadcrumbs;
  };

  const handleMenuClick = () => {
    if (isMobile) {
      toggleMobileSidebar();
    } else {
      toggleSidebar();
    }
  };

  const handleRightDrawerToggle = () => {
    if (isMobile) {
      toggleMobileRightDrawer();
    } else {
      toggleRightDrawer();
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,

        ml: {
          xs: 0,
          md: sidebarOpen ? `${drawerWidth}px` : 0,
        },

        mr: {
          xs: 0,
          md: rightDrawerOpen ? `${rightDrawerWidth}px` : 0,
        },

        width: {
          xs: "100%",
          md: `calc(100% - ${
            (sidebarOpen ? drawerWidth : 0) +
            (rightDrawerOpen ? rightDrawerWidth : 0)
          }px)`,
        },
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        borderBottom: `1px solid ${
          theme.palette.mode === "dark" ? "#333333" : "#e0e0e0"
        }`,
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="toggle left drawer"
          onClick={handleMenuClick}
          edge="start"
          sx={{ mr: 2 }}
        >
          <PanelLeft size={20} />
        </IconButton>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Breadcrumbs
            separator={"   /   "}
            aria-label="breadcrumb"
            sx={{
              "& .MuiBreadcrumbs-separator": {
                color: "text.secondary",
                mx: 1,
              },
            }}
          >
            {getBreadcrumbs().map((crumb, index) => (
              <Box
                key={crumb.path}
                sx={{ display: "flex", alignItems: "center" }}
              >
                {crumb.icon && (
                  <Box sx={{ mr: 0.5, display: "flex", alignItems: "center" }}>
                    {crumb.icon}
                  </Box>
                )}
                {crumb.isLast ? (
                  <Typography
                    variant="body2"
                    // sx={{
                    //   // fontWeight: 600,
                    //   color: 'text.primary',
                    //   fontSize: '0.875rem'
                    // }}
                  >
                    {crumb.label}
                  </Typography>
                ) : (
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => navigate(crumb.path)}
                    sx={{
                      textDecoration: "none",
                      color: "text.secondary",
                      "&:hover": {
                        color: "primary.main",
                        textDecoration: "underline",
                      },
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: "0.875rem",
                    }}
                  >
                    {crumb.label}
                  </Link>
                )}
              </Box>
            ))}
          </Breadcrumbs>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <SearchBox
          sx={{
            ml: { xs: 0, sm: 2 },
            mr: 2,
            width: { xs: "150px", sm: "200px", md: "250px" },
            maxWidth: 250,
            borderRadius: 10,
          }}
        >
          <SearchIconWrapper>
            <Search size={20} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            inputProps={{ "aria-label": "search" }}
          />
        </SearchBox>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mr: rightDrawerOpen ? 0 : 2,
          }}
        >
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>

          <IconButton color="inherit">
            <Bell size={20} />
          </IconButton>

          <IconButton
            color="inherit"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Settings size={20} />
          </IconButton>

          <IconButton
            color="inherit"
            onClick={handleRightDrawerToggle}
            sx={{ ml: 1 }}
            aria-label="toggle right drawer"
          >
            <PanelRight size={20} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
