const FilterTypes = ({ activeFilters, setActiveFilters }) => {
  const handleCheckbox = (evt) => {
    const { checked, value } = evt.target;
    setActiveFilters((activeFilters) => {
      sessionStorage.setItem(
        "filter",
        JSON.stringify({
          ...activeFilters,
          [value]: checked,
        })
      );
      return {
        ...activeFilters,
        [value]: checked,
      };
    });
  };

  return (
    <div className="filter">
      Filter
      <div className="filter-list">
        {Object.keys(activeFilters).map((type) => (
          <div>
            <input
              id={type}
              type="checkbox"
              value={type}
              onChange={handleCheckbox}
              checked={activeFilters[type]}
            />
            <label for={type}>{type}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterTypes;
