import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Links from "./components/Links.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </Router>
  </StrictMode>
);
