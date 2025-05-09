import React from "react";
import { AppBar, Box, Toolbar, IconButton, Button } from "@mui/material";
import { Download, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import "../css/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar position="fixed" className="appbar">
        <Toolbar className="justify-content">
          <Box className="icon">
            <a href="/">
              <img src="js.png" alt="JPSwann" width="54px" />
            </a>
          </Box>

          <Box className="center-icons">
            <IconButton
              aria-label="GitHub"
              href="https://github.com/jpswann?tab=repositories"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/jpswann/"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              href="https://x.com/jpswann2192"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </IconButton>
          </Box>
          <Button
            variant="contained"
            href="/JPSwann.pdf"
            target="_blank"
            download
            className="button"
          >
            <Box className="button-content">
              Resume
              <Download />
            </Box>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
