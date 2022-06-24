import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Create from "./components/Create/Create";
import { useEffect } from "react";
import { pokeDetail } from "../src/redux/actions/index";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/home/create" element={<Create />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
