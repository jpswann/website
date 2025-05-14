import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Download, Menu as MenuIcon } from "@mui/icons-material";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };

  return (
    <>
      <AppBar position="fixed" className="appbar">
        <Toolbar
          className="justify-content"
          sx={{
            px: { xs: 1, sm: 2, md: 4 },
            justifyContent: { xs: "space-between", sm: "flex-start" },
          }}
        >
          <Box className="icon">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Box
                component="img"
                src="/src/assets/logos/js.png"
                alt="JPSwann"
                sx={{
                  width: {
                    xs: "36px",
                    sm: "44px",
                    md: "54px",
                  },
                  mt: 0.5,
                }}
              />
            </Link>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{
              display: { xs: "block", sm: "none" },
            }}
            color="inherit"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop navigation buttons */}
          <Box
            className="center-icons"
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              gap: { xs: 0.5, sm: 1, md: 2 },
              flexGrow: 1,
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              About
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/skills"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Skills
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/experience"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Experience
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/education"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Education
            </Button>
          </Box>

          {/* Resume button */}
          <Button
            variant="contained"
            href="/JPSwann.pdf"
            target="_blank"
            download
            className="button"
            sx={{
              height: { xs: 36, sm: 42 },
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              px: { xs: 1, sm: 2 },
              display: "flex",
              gap: 1,
            }}
          >
            <Box className="button-content">
              Resume
              <Download />
            </Box>
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile screens */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <List>
          <ListItem
            component={Link}
            to="/about"
            onClick={() => toggleDrawer(false)}
          >
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            component={Link}
            to="/skills"
            onClick={() => toggleDrawer(false)}
          >
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem
            component={Link}
            to="/experience"
            onClick={() => toggleDrawer(false)}
          >
            <ListItemText primary="Experience" />
          </ListItem>
          <ListItem
            component={Link}
            to="/education"
            onClick={() => toggleDrawer(false)}
          >
            <ListItemText primary="Education" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
