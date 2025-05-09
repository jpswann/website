import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SkillsPage from "./pages/SkillsPage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "../src/css/Global.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technicialskills" element={<SkillsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
