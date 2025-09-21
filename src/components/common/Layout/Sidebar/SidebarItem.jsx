import React, { useState } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  Box,
  useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useAppStore } from "../../../../store";
import * as LucideIcons from "lucide-react";

const SidebarItem = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const { setActiveRoute, closeMobileSidebar } = useAppStore();
  const [expanded, setExpanded] = useState(item.id === "user-profile");

  const isActive = location.pathname === item.path;
  const hasSubItems = item.subItems && item.subItems.length > 0;

  const getSvgFilter = () => {
    
    if (isActive) {
      if (theme.palette.mode === 'dark') {
        return 'brightness(0) saturate(100%) invert(100%)';
      } else {
        return 'brightness(0) saturate(100%) invert(0%)'; 
      }
    } else {
      if (theme.palette.mode === 'dark') {
        return 'brightness(0) saturate(100%) invert(100%)';
      } else {
        return 'brightness(0) saturate(100%) invert(60%)';
      }
    }
  };

  const handleClick = () => {
    if (hasSubItems) {
      setExpanded(!expanded);
    } else {
      navigate(item.path);
      setActiveRoute(item.path);
      closeMobileSidebar();
    }
  };

  const handleSubItemClick = (subItem) => {
    navigate(subItem.path);
    setActiveRoute(subItem.path);
    closeMobileSidebar();
  };

  return (
    <>
      <ListItem disablePadding sx={{ px: 0 }}>
        <ListItemButton
          onClick={handleClick}
          sx={{
            mb: 0.5,
            mx: 2,
            px: 1.5,
            py: 0.5, 
            backgroundColor: isActive 
              ? (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)")
              : "transparent",
            color: isActive ? theme.palette.primary.main : "text.primary",
            "&:hover": {
              backgroundColor: isActive 
                ? (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)")
                : (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.04)"),
              color: isActive ? theme.palette.primary.main : "text.primary",
            },
            "&:focus": {
              backgroundColor: isActive 
                ? (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)")
                : (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.04)"),
              color: isActive ? theme.palette.primary.main : "text.primary",
              outline: "none",
            },
            "&:active": {
              backgroundColor: isActive 
                ? (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.16)" : "rgba(0, 0, 0, 0.16)")
                : (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"),
              color: isActive ? theme.palette.primary.main : "text.primary",
            },
            minHeight: 32, 
            position: 'relative',
            borderRadius: '8px',
            "&::before": isActive ? {
              content: '""',
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '3px',
              height: '60%',
              backgroundColor: theme.palette.primary.main,
              borderRadius: '0 2px 2px 0',
            } : {},
          }}
        >

            <Box
              sx={{
                color: isActive ? theme.palette.primary.main : "text.secondary",
                mr: 1,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {expanded ? (
                <ChevronDown size={14} />
              ) : (
                <ChevronRight size={14} />
              )}
            </Box>
          {/* )} */}
          
          <ListItemIcon
            sx={{
              minWidth: 32,
              color: isActive ? theme.palette.primary.main : "text.secondary",
            }}
          >
            {(() => {
              
              if (typeof item.icon === 'string' && LucideIcons[item.icon]) {

                const LucideIcon = LucideIcons[item.icon];
                return <LucideIcon size={16} />;
              } else if (typeof item.icon === 'string' && !LucideIcons[item.icon]) {

                return (
                  <img 
                    src={item.icon} 
                    alt={item.name}
                    width={16}
                    height={16}
                    style={{ 
                      filter: getSvgFilter()
                    }}
                  />
                );
              } else if (item.icon) {
                return (
                  <img 
                    src={item.icon} 
                    alt={item.name}
                    width={16}
                    height={16}
                    style={{ 
                      filter: getSvgFilter()
                    }}
                  />
                );
              } else {
                return <LucideIcons.Circle size={16} />;
              }
            })()}
          </ListItemIcon>
          <ListItemText
            primary={item.name}
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: 400,
              color: "text.primary",
            }}
          />
        </ListItemButton>
      </ListItem>

      {/* Sub Items */}
      {hasSubItems && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            {item.subItems.map((subItem) => {
              const isSubActive = location.pathname === subItem.path;

              return (
                <ListItem key={subItem.path} disablePadding sx={{ px: 0 }}>
                  <ListItemButton
                    onClick={() => handleSubItemClick(subItem)}
                    sx={{
                      mb: 0.5,
                      mx: 2,
                      px: 1.5,
                      py: 0.5,
                      backgroundColor: isSubActive 
                        ? (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)")
                        : "transparent",
                      color: isSubActive ? theme.palette.primary.main : "text.primary",
                      "&:hover": {
                        backgroundColor: isSubActive 
                          ? (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)")
                          : (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.04)"),
                        color: isSubActive ? theme.palette.primary.main : "text.primary",
                      },
                      "&:focus": {
                        backgroundColor: isSubActive 
                          ? (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)")
                          : (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.04)"),
                        color: isSubActive ? theme.palette.primary.main : "text.primary",
                        outline: "none",
                      },
                      "&:active": {
                        backgroundColor: isSubActive 
                          ? (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.16)" : "rgba(0, 0, 0, 0.16)")
                          : (theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"),
                        color: isSubActive ? theme.palette.primary.main : "text.primary",
                      },
                      minHeight: 32,
                      position: 'relative',
                      borderRadius: '8px',
                      "&::before": isSubActive ? {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '3px',
                        height: '60%',
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: '0 2px 2px 0',
                      } : {},
                    }}
                  >

                    <ListItemText
                      primary={subItem.name}
                      primaryTypographyProps={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: isSubActive ? theme.palette.primary.main : "text.primary",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SidebarItem;
