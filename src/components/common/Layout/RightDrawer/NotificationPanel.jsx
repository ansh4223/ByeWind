import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { AlertTriangle, User, Bell } from "lucide-react";

const NotificationPanel = () => {
  const notifications = [
    {
      id: 1,
      title: "You have a bug that needs...",
      time: "Just now",
      type: "bug",
      icon: "AlertTriangle",
    },
    {
      id: 2,
      title: "New user registered",
      time: "59 minutes ago",
      type: "user",
      icon: "User",
    },
    {
      id: 3,
      title: "You have a bug that needs...",
      time: "12 hours ago",
      type: "bug",
      icon: "AlertTriangle",
    },
    {
      id: 4,
      title: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      type: "subscription",
      icon: "Bell",
    },
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case "AlertTriangle":
        return <AlertTriangle size={20} />;
      case "User":
        return <User size={20} />;
      case "Bell":
        return <Bell size={20} />;
      default:
        return <Bell size={20} />;
    }
  };

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: "1.1rem",
          mb: 2,
          color: "text.primary",
        }}
      >
        Notifications
      </Typography>

      <List sx={{ p: 0 }}>
        {notifications.map((notification) => (
          <ListItem
            key={notification.id}
            sx={{
              px: 0,
              py: 0,
              alignItems: "flex-start",
            }}
          >
            <ListItemAvatar sx={{ minWidth: 40, mt: 0.5 }}>
              <Box
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {getIcon(notification.icon)}
              </Box>
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: "text.primary",
                    fontSize: "0.9rem",
                    lineHeight: 1.4,
                    mb: 0.5,
                  }}
                >
                  {notification.title}
                </Typography>
              }
              secondary={
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.8rem",
                  }}
                >
                  {notification.time}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NotificationPanel;
