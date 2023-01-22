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

const SideBar = (props) => {
  return (
    <>
      <Box
        className="container"
        sx={{
          width: "100%",
          maxWidth: 360,
          boxShadow: "0px 0px 4px 0px gray",
          height: "fit-content",
        }}
      >
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton sx={
              props.click === 0
                ? { color: "#1976d2" ,borderLeft: "3px solid #42a5f5" }
                : null}>
              <AccountCircleSharp color={props.click === 0 ? "#1976d2" : "disabled"} />
              <ListItemText
                className="Icons"
                primary="Personal Info"
                sx={
                  props.click === 0
                    ? { color: "#1976d2", paddingLeft: "16px" }
                    : {paddingLeft:"10px"}}
              />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton sx={
              props.click === 1
                ? { color: "#1565c0" ,borderLeft: "3px solid #42a5f5" }
                : null}>
              <WorkHistorySharp color={props.click === 1 ? "#1976d2" : "disabled"}/>
              <ListItemText
                className="Icons"
                primary="Work Experience"
                sx={
                  props.click === 1
                    ? { color: "#1976d2", paddingLeft: "16px" }
                    : {paddingLeft:"10px"}}
              />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton sx={
              props.click === 2
                ? { color: "#1565c0" ,borderLeft: "3px solid #42a5f5" }
                : null}>
              <SchoolSharp color={props.click === 2 ? "#1976d2" : "disabled"}/>
              <ListItemText
                className="Icons"
                primary="Education"
                sx={
                  props.click === 2
                    ? { color: "#1976d2", paddingLeft: "16px" }
                    : {paddingLeft:"10px"}}
              />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton sx={
              props.click === 3
                ? { color: "#1565c0" ,borderLeft: "3px solid #42a5f5" }
                : null}>
              <StarSharp color={props.click === 3 ? "#1976d2" : "disabled"}/>
              <ListItemText
                className="Icons"
                primary="Key Skills"
                sx={
                  props.click === 3
                    ? { color: "#1976d2", paddingLeft: "16px" }
                    : {paddingLeft:"10px"}}
              />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton sx={
              props.click === 4
                ? { color: "#1565c0" ,borderLeft: "3px solid #42a5f5" }
                : null}>
              <EmojiEventsSharp color={props.click === 4 ? "#1976d2" : "disabled"}/>
              <ListItemText
                className="Icons"
                primary="Achievements"
                sx={
                  props.click === 4
                    ? { color: "#1976d2", paddingLeft: "16px" }
                    : {paddingLeft:"10px"}}
              />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton sx={
              props.click === 5
                ? { color: "#1565c0" ,borderLeft: "3px solid #42a5f5" }
                : null}>
              <AccountTreeSharp color={props.click === 5 ? "#1976d2" : "disabled"}/>
              <ListItemText
                className="Icons"
                primary="Projects"
                sx={
                  props.click === 5
                    ? { color: "#1976d2", paddingLeft: "16px" }
                    : {paddingLeft:"10px"}}
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
