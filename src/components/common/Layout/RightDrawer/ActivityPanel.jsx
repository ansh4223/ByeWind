import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { Activity } from "lucide-react";
import { activitiesData } from "../../../../data/dummyData";

const ActivityPanel = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1, ml:2 }}>
        {/* <Activity size={18} /> */}
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1rem" }}>
          Activities
        </Typography>
      </Box>

      <List sx={{ p: 0 }}>
        {activitiesData.slice(0, 6).map((activity) => (
          <ListItem
            key={activity.id}
            sx={{
              px: 0,
              py: 1,
              ml:2,
              borderBottom: "1px solid",
              borderColor: "divider",
              "&:last-child": {
                borderBottom: "none",
              },
            }}
          >
            <ListItemAvatar>
              <Avatar
                src={activity.user.avatar}
                alt={activity.user.name}
                sx={{ width: 32, height: 32 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, fontSize: "0.8rem" }}
                >
                  {activity.message}
                </Typography>
              }
              secondary={
                <Typography variant="caption" color="text.secondary">
                  {activity.time}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ActivityPanel;
