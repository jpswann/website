import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BreadcrumbsNav from "./components/BreadcrumbsNav";
import Home from "./pages/Home";
import "../src/css/Global.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { Box, Breadcrumbs } from "@mui/material";
import About from "./pages/About";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Frontend from "./pages/Frontend";
import Connect4 from "./pages/Connect4";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Box
          minHeight="100vh"
          sx={{
            px: { xs: 0, sm: 4, md: 6 },
            py: { xs: 10, sm: 10, md: 12 },
          }}
        >
          <BreadcrumbsNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/frontend/connect4" element={<Connect4 />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
