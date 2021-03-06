import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorite from "./components/Favorite";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;
