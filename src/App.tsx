import "./App.css";
import Header from "./components/header/MainHeader";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import MenuSidebar from "./components/header/headerComponent/MenuSidebar";

import Home from "./components/body/home/Home";
import Places from "./components/body/places/Places";
import Status from "./components/body/status/Status";
import Tickets from "./components/body/tickets/Tickets";
import Footer from "./components/footer/Footer";

import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <LanguageProvider>
        <Header toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/status" element={<Status />} />
          <Route path="/bilets" element={<Tickets />} />
          <Route path="/places" element={<Places />} />
        </Routes>
        <Footer />
        <MenuSidebar isOpen={isMenuOpen} onClose={toggleMenu} />
      </LanguageProvider>
    </>
  );
}

export default App;
