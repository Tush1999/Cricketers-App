import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import getPlayers from "../apis/get-players.js";

const PER_PAGE = 10;

const CricketersList = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayers();
      console.log(data, "data");
      setList(data);
    };

    fetchData();
  }, []);

  const offset = currentPage * PER_PAGE;

  const filteredList = list.slice(offset, offset + PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage)
  }

  const pageCount = Math.ceil(list.length / PER_PAGE);

  return (
    <div>
      <div>
        {filteredList.map(({ name }) => (
          <div>{name}</div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default CricketersList;
