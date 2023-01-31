import React from "react";
import "../SideBar/SideBar.css";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  AccountCircleSharp,
  AccountTreeSharp,
  EmojiEventsSharp,
  MoreVertRounded,
  SchoolSharp,
  StarSharp,
  WorkHistorySharp,
} from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";

// SideBar component that renders the navigation sidebar
const SideBar = (props) => {

    const getWindowSize = () => {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
    };
  
    const [anchorEl, setAnchorEl] = useState(null);
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
    
      window.addEventListener("resize", handleWindowResize);
    
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);

  return (
    <>
        {windowSize.innerWidth > 900 ? (
        <Box
            sx={{
              width: "100%",
              maxWidth: 360,
              height: "fit-content",
            }}>
            <List disablePadding>
              <ListItem disablePadding>
                <ListItemButton sx={
                  props.click === 0
                    ? { color: "#1976d2", borderLeft: "3px solid #42a5f5" }
                    : null}>
                  <AccountCircleSharp color={props.click === 0 ? "#1976d2" : "disabled"} />
                  <ListItemText
                    className="Icons"
                    primary="Personal Info"
                    sx={
                      props.click === 0
                        ? { color: "#1976d2", paddingLeft: "16px" }
                        : { paddingLeft: "10px" }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton sx={
                  props.click === 1
                    ? { color: "#1565c0", borderLeft: "3px solid #42a5f5" }
                    : null}>
                  <WorkHistorySharp color={props.click === 1 ? "#1976d2" : "disabled"} />
                  <ListItemText
                    className="Icons"
                    primary="Work Experience"
                    sx={
                      props.click === 1
                        ? { color: "#1976d2", paddingLeft: "16px" }
                        : { paddingLeft: "10px" }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton sx={
                  props.click === 2
                    ? { color: "#1565c0", borderLeft: "3px solid #42a5f5" }
                    : null}>
                  <SchoolSharp color={props.click === 2 ? "#1976d2" : "disabled"} />
                  <ListItemText
                    className="Icons"
                    primary="Education"
                    sx={
                      props.click === 2
                        ? { color: "#1976d2", paddingLeft: "16px" }
                        : { paddingLeft: "10px" }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton sx={
                  props.click === 3
                    ? { color: "#1565c0", borderLeft: "3px solid #42a5f5" }
                    : null}>
                  <StarSharp color={props.click === 3 ? "#1976d2" : "disabled"} />
                  <ListItemText
                    className="Icons"
                    primary="Key Skills"
                    sx={
                      props.click === 3
                        ? { color: "#1976d2", paddingLeft: "16px" }
                        : { paddingLeft: "10px" }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton sx={
                  props.click === 4
                    ? { color: "#1565c0", borderLeft: "3px solid #42a5f5" }
                    : null}>
                  <EmojiEventsSharp color={props.click === 4 ? "#1976d2" : "disabled"} />
                  <ListItemText
                    className="Icons"
                    primary="Achievements"
                    sx={
                      props.click === 4
                        ? { color: "#1976d2", paddingLeft: "16px" }
                        : { paddingLeft: "10px" }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton sx={
                  props.click === 5
                    ? { color: "#1565c0", borderLeft: "3px solid #42a5f5" }
                    : null}>
                  <AccountTreeSharp color={props.click === 5 ? "#1976d2" : "disabled"} />
                  <ListItemText
                    className="Icons"
                    primary="Projects"
                    sx={
                      props.click === 5
                        ? { color: "#1976d2", paddingLeft: "16px" }
                        : { paddingLeft: "10px" }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </List>
          </Box>
        ) : (
          <>
            <IconButton
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}>
              <MoreVertRounded />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                  width: "20ch",
                },
              }}>
              <MenuItem
                sx={props.click === 0 ? { color: "rgb(0, 128, 255)" } : null}
                onClick={() => {
                  handleClose();
                }}>
                <AccountCircleSharp
                  color={props.click === 0 ? "info" : "disabled"}
                />
                <ListItemText
                  className="Icons"
                  primary="Personal Info"
                  sx={
                    props.click === 0
                      ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                      : null
                  }
                />
              </MenuItem>
              <Divider />
              <MenuItem
                sx={props.click === 1 ? { color: "rgb(0, 128, 255)" } : null}
                onClick={() => {
                  handleClose();
                }}>
                <WorkHistorySharp
                  color={props.click === 1 ? "info" : "disabled"}
                />
                <ListItemText
                  className="Icons"
                  primary="Work Exp"
                  sx={
                    props.click === 1
                      ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                      : null
                  }
                />
              </MenuItem>
              <Divider />
              <MenuItem
                sx={props.click === 2 ? { color: "rgb(0, 128, 255)" } : null}
                onClick={() => {
                  handleClose();
                }}>
                <SchoolSharp
                  color={props.click === 2 ? "info" : "disabled"}
                />
                <ListItemText
                  className="Icons"
                  primary="Education"
                  sx={
                    props.click === 2
                      ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                      : null
                  }
                />
              </MenuItem>
              <Divider />
              <MenuItem
                sx={props.click === 3 ? { color: "rgb(0, 128, 255)" } : null}
                onClick={() => {
                  handleClose();
                }}>
                <StarSharp color={props.click === 3 ? "info" : "disabled"} />
                <ListItemText
                  className="Icons"
                  primary="Key Skills"
                  sx={
                    props.click === 3
                      ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                      : null
                  }
                />
              </MenuItem>
              <Divider/>
              <MenuItem
                sx={props.click === 4 ? { color: "rgb(0, 128, 255)" } : null}
                onClick={() => {
                  handleClose();
                }}>
                <StarSharp color={props.click === 4 ? "info" : "disabled"} />
                <ListItemText
                  className="Icons"
                  primary="Achievements"
                  sx={
                    props.click === 4
                      ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                      : null
                  }
                />
              </MenuItem>
              <Divider/>
              <MenuItem
                sx={props.click === 5 ? { color: "rgb(0, 128, 255)" } : null}
                onClick={() => {
                  handleClose();
                }}>
                <StarSharp color={props.click === 5 ? "info" : "disabled"} />
                <ListItemText
                  className="Icons"
                  primary="Projects"
                  sx={
                    props.click === 5
                      ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                      : null
                  }
                />
              </MenuItem>
            </Menu>
          </>
        )}
      </>
    );
  };

  export default SideBar;