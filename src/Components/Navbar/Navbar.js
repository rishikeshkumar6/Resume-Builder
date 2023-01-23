import React, { useState } from 'react';
import "./Navbar.css";
import { AppBar, Box, createTheme, Divider, Drawer, IconButton, List, ThemeProvider, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import Logo from '../Assets/mainLogo.png'


// Define a custom theme for the navbar with a white primary color
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff"
    }
  }
});

// Navbar component 
const Navbar = (props) => {
  // state to keep track of whether the mobile navigation drawer is open or closed
  const [mobileOpen, setMobileOpen] = useState(false);

  // function to toggle the mobile navigation drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // content for the mobile navigation drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <NavLink to="/" >
          <img
            src={Logo}
            height="42px"
            alt="Logo"
          />
        </NavLink>
      </Typography>
      <Divider />
      <List
        className="drawerLinks"
        sx={{
          display: "flex",
          textAlign: "left",
          paddingLeft: "20px",
          flexDirection: "column",
        }}>
        <NavLink className="nav-link" to="/" color="inherit">
          Resume Templates
        </NavLink>
        <NavLink to="/my/resumes" className="nav-link" color="inherit">
          My Resumes
        </NavLink>
        <NavLink to="/about-us" color="inherit" className="nav-link">
          About us
        </NavLink>
      </List>
    </Box>
  );

  return (

    <>
      <Box sx={{ display: "flex" }}>
        <ThemeProvider theme={theme}  >
          <AppBar className='Appbar' sx={{ boxShadow: "5" }} >
            <Toolbar >
              <IconButton color='inherit' id='icon' onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }} >
                <MenuIcon />
              </IconButton>

              <Typography variant='h6' sx={{
                flexGrow: 1,
                display: { sm: "block" },
                fontSize: "25px",
                position: "relative",
                top: "5px",
              }}>
                <NavLink to="/" className='navicon'>
                  <img
                    src={Logo}
                    height="30px"
                    alt="Logo" />
                </NavLink>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <NavLink to="/" className="nav-link" color="inherit">
                  Resume Templates
                </NavLink>
                <NavLink to="/my/resumes" className="nav-link" color="inherit">
                  My Resumes
                </NavLink>
                <NavLink to="/about-us" className="nav-link aboutUs" color="inherit">
                  About Us
                </NavLink>
              </Box>

            </Toolbar>

          </AppBar>
        </ThemeProvider>
        <Box >
          <Drawer
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepmounted: true
            }} sx={{
              display: { xs: "block", sm: "none" },

            }}>
            {drawer}
          </Drawer>
        </Box>

      </Box>
    </>
  )
}

export default Navbar