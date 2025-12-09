import "./App.css";
import Header from "./components/header/MainHeader";
import { Routes, Route } from "react-router-dom";

import Home from "./components/body/home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
