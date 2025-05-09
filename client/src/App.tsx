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
import SkillCards from "./components/SkillCards";
import Footer from "./components/Footer";

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
            <Route path="/skills" element={<SkillCards />} />
          </Routes>
        </Box>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
