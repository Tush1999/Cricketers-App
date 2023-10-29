import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CricketersList from "./components/list";
import PlayerDetails from "./components/details";
import Layout from "./components/layout";

import getPlayers from "./apis/get-players.js";

import "./App.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayers();
      setList(data);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CricketersList list={list} />} />
          <Route path=":name" element={<PlayerDetails list={list} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
