import "./App.css";
import Header from "./components/header/MainHeader";
import { Routes, Route } from "react-router-dom";

import Home from "./components/body/home/Home";
import Places from "./components/body/places/Places";
import Status from "./components/body/status/Status";
import Tickets from "./components/body/tickets/Tickets";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/status" element={<Status/>}/>
        <Route path="/bilets" element={<Tickets/>}/>
        <Route path="/places" element={<Places/>}/>
      </Routes>
    </>
  );
}

export default App;
