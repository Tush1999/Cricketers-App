import React, { useEffect, useState } from "react";

import getPlayers from "../apis/get-players.js";

const CricketersList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const data = await getPlayers();
      setList(data)
    };
    
    fetchData();
  }, []);

  return <div>Cricker</div>;
};

export default CricketersList;
