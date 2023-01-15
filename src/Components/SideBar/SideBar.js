import React from "react";
import "../SideBar/SideBar.css";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  AccountCircleSharp,
  AccountTreeSharp,
  EmojiEventsSharp,
  SchoolSharp,
  StarSharp,
  WorkHistorySharp,
} from "@mui/icons-material";

const SideBar = () => {
  return (
    <>
      <Box
        className="container"
        sx={{
          width: "100%",
          maxWidth: 360,
          boxShadow: "0px 0px 4px 0px rgb(228, 228, 228)",
          height: "fit-content",
        }}
      >
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton sx={{ borderLeft: "3px solid rgb(0, 128, 255)" }}>
              <AccountCircleSharp />
              <ListItemText
                className="Icons"
                primary="Personal Info"
                sx={{ color: "#1976d2", paddingLeft: "8px" }}
              />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton sx={{ borderLeft: "3px solid rgb(0, 128, 255)" }}>
              <WorkHistorySharp />
              <ListItemText
                className="Icons"
                primary="Work Experience"
                sx={{ color: "#1976d2", paddingLeft: "8px" }}
              />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton sx={{ borderLeft: "3px solid rgb(0, 128, 255)" }}>
              <SchoolSharp />
              <ListItemText
                className="Icons"
                primary="Education"
                sx={{ color: "#1976d2", paddingLeft: "8px" }}
              />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton sx={{ borderLeft: "3px solid rgb(0, 128, 255)" }}>
              <StarSharp />
              <ListItemText
                className="Icons"
                primary="Key Skills"
                sx={{ color: "#1976d2", paddingLeft: "8px" }}
              />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton sx={{ borderLeft: "3px solid rgb(0, 128, 255)" }}>
              <EmojiEventsSharp />
              <ListItemText
                className="Icons"
                primary="Achievements"
                sx={{ color: "#1976d2", paddingLeft: "8px" }}
              />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton sx={{ borderLeft: "3px solid rgb(0, 128, 255)" }}>
              <AccountTreeSharp />
              <ListItemText
                className="Icons"
                primary="Projects"
                sx={{ color: "#1976d2", paddingLeft: "8px" }}
              />
            </ListItemButton>
          </ListItem>

          <Divider />
        </List>
      </Box>
    </>
  );
};

export default SideBar;
