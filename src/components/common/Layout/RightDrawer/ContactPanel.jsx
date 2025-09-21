import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Badge,
  styled,
} from "@mui/material";
import { Users } from "lucide-react";
import { contactsData } from "../../../../data/dummyData";

const StyledBadge = styled(Badge)(({ theme, status }) => {
  const getColor = () => {
    switch (status) {
      case "online":
        return "#44b700";
      case "busy":
        return "#ff9800";
      case "away":
        return "#ffc107";
      case "offline":
        return "#9e9e9e";
      default:
        return "#9e9e9e";
    }
  };

  return {
    "& .MuiBadge-badge": {
      backgroundColor: getColor(),
      color: getColor(),
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation:
          status === "online" ? "ripple 1.2s infinite ease-in-out" : "none",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  };
});

const ContactPanel = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1, ml:2 }}>
        {/* <Users size={18} /> */}
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1rem" }}>
          Contacts
        </Typography>
      </Box>

      <List sx={{ p: 0, ml: 2 }}>
        {contactsData.slice(0, 5).map((contact) => (
          <ListItem
            key={contact.id}
            sx={{
              px: 0,
              py: 1,
            //   borderBottom: "1px solid",
              borderColor: "divider",
            //   "&:last-child": {
            //     borderBottom: "none",
            //   },
            }}
          >
            <ListItemAvatar>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                status={contact.status}
              >
                <Avatar
                  src={contact.avatar}
                  alt={contact.name}
                  sx={{ width: 36, height: 36 }}
                />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 400, fontSize: "0.85rem" }}
                >
                  {contact.name}
                </Typography>
              }
            //   }
            //   secondary={
            //     <Typography variant="caption" color="text.secondary">
            //       {contact.role}
            //     </Typography>
            //   }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContactPanel;
