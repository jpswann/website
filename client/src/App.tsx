import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "../src/css/Global.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { Box } from "@mui/material";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box
          sx={{
            px: { xs: 0, sm: 4, md: 6 },
            py: { xs: 10, sm: 10, md: 12 },
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </Box>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
