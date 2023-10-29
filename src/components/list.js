import { useEffect, useState, useMemo } from "react";
import ReactPaginate from "react-paginate";

import FilterTypes from "./filters";

import SortDropdown from "./sort-dropdown";
import { getFilterTypes, getSortedProducts } from "../helpers/players";
import Player from "./player";

const PER_PAGE = 10;

const CricketersList = ({ list = [] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeSort, setActiveSort] = useState(sessionStorage.getItem("sort"));
  const [activeFilters, setActiveFilters] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [searchedResult, setSearchedResult] = useState(list);

  useEffect(() => {
    setActiveFilters(
      JSON.parse(sessionStorage.getItem("filter")) || getFilterTypes(list)
    );
    setSearchedResult(list);
  }, [list]);

  const hasFiltersApplied = useMemo(
    () => Object.values(activeFilters).filter(Boolean).length,
    [activeFilters]
  );

  useEffect(() => {
    let updatedList = [...list];
    if (hasFiltersApplied) {
      updatedList = updatedList.filter(({ type }) => {
        return activeFilters[type];
      });
    }
    setSearchedResult(getSortedProducts(updatedList, activeSort));
  }, [activeFilters]);


  useEffect(() => {
    let newList = [...searchedResult]
    sessionStorage.setItem("sort", activeSort);
    const updatedList = getSortedProducts(newList, activeSort);
    setSearchedResult(updatedList);
  }, [activeSort]);

  const offset = currentPage * PER_PAGE;

  const filteredList = searchedResult.slice(offset, offset + PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const handleSearch = (evt) => {
    const searchValue = evt.target.value;
    if (searchValue && hasFiltersApplied) {
      setActiveFilters(getFilterTypes(list));
    }
    setSearchValue(searchValue);

    const searchedData = list.filter(({ name }) =>
      name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchedResult(searchedData);
  };

  const pageCount = Math.ceil(searchedResult.length / PER_PAGE);

  console.log(filteredList,"hhhhh",searchedResult)

  const renderList = filteredList?.map((data) => (
    <tr>
      <Player {...data} key={data.name} />
    </tr>
  ));

  return (
    <div>
      <div className="d-flex top-header">
        <SortDropdown setActiveSort={setActiveSort} />
        <div>
          <label htmlFor="cricketer-search" className="searchLabel">
            Search
          </label>
          <input
            id="cricketer-search"
            type="search"
            value={searchValue}
            onChange={handleSearch}
            className="searchInput"
          />
        </div>
      </div>
      <div className="d-flex p-16 flex-flow">
        <FilterTypes
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
        <div className="width-100">
          <table className="table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Points</th>
                <th colSpan="2">type</th>
              </tr>
            </thead>
            <tbody>{renderList}</tbody>
          </table>
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName="pagination-container"
            previousClassName="arrow-class"
            nextClassName="arrow-class"
            pageClassName="page-class"
            disabledClassName="disabledClassName"
            disabledLinkClassName="disabledClassName"
          />
        </div>
      </div>
    </div>
  );
};

export default CricketersList;
