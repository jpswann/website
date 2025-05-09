import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../css/Navbar.css";

const navLinks = ["About", "Projects", "Contact"];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => setOpen(!open);

  const drawerContent = (
    <Box className="drawer-content" onClick={toggleDrawer}>
      <List>
        {navLinks.map((text) => (
          <ListItem component="button" key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Box className="icon">
            <a href="/">
              <img src="js.png" alt="JPSwann" width="54px" />
            </a>
          </Box>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                onClick={toggleDrawer}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={toggleDrawer}>
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <Box>
              {navLinks.map((link) => (
                <Button key={link} color="inherit">
                  {link}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
