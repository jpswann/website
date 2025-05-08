import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SkillsPage from "./pages/SkillsPage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technicialskills" element={<SkillsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
