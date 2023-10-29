import { useParams } from "react-router";
import { useNavigate } from "react-router";

import { Link } from "react-router-dom";

const Details = ({ list }) => {
  const navigate = useNavigate();
  const { name: playerName } = useParams();

  const playerDetail = list.find(
    ({ name }) => name?.toLowerCase() == playerName?.toLowerCase()
  );

  const additionalPlayers = list
    .filter(
      ({ type, name }) => type == playerDetail?.type && name !== playerName
    )
    .slice(0, 5);

  const { name, rank, points, description } = playerDetail || {};

  return (
    <div className="container detail-container">
      <div className="title">PLAYER INFORMATION</div>
      <div className="back-btn" onClick={() => navigate("/")}>
        BACK TO LISTING PAGE
      </div>
      <div className="player-name">{name}</div>
      <div>rank - {rank}</div>
      <div>points - {points}</div>
      <div className="desc">{description}</div>
      <div className="py-2 text-center my-2">SIMILAR PLAYERS</div>
      <div className="d-flex additional-player-container">
        {additionalPlayers.map(({name}) => (
          <div className="additional-player">
            <Link to={`/${name}`}> {name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
