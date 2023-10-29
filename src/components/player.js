import { Link } from "react-router-dom";

const Player = ({ name, rank, points, type }) => {
  return (
    <>
      <td>{rank}</td>
      <td>{name}</td>
      <td>{points}</td>
      <td>{type}</td>
      <td>
        <Link to={`/${name}`}>view details</Link>
      </td>
    </>
  );
};

export default Player;
