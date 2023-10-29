import Dropdown from "react-bootstrap/Dropdown";

function SortBy({ setActiveSort }) {
  return (
    <Dropdown onSelect={setActiveSort}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="name">Name</Dropdown.Item>
        <Dropdown.Item eventKey="rank">Rank</Dropdown.Item>
        <Dropdown.Item eventKey="age">Age</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortBy;
