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

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
