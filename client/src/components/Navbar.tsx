import React from "react";
import { AppBar, Box, Toolbar, IconButton, Button } from "@mui/material";
import { Download, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import "../css/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar position="fixed" className="appbar">
        <Toolbar
          className="justify-content"
          sx={{
            px: { xs: 1, sm: 2, md: 4 },
          }}
        >
          <Box className="icon">
            <a href="/">
              <Box
                component="img"
                src="js.png"
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
            </a>
          </Box>

          <Box
            className="center-icons"
            sx={{
              gap: { xs: 0.5, sm: 1, md: 2 },
            }}
          >
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
    </>
  );
};

export default Navbar;
