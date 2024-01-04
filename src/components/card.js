import PosterImage from "./poster-image";

const MovieCard = ({ title, poster_path: path, popularity,overview }) => {
  return (
    <div className="movie-card">
      <PosterImage imgSrc={path} title={title} />
      <div className="movie-desc">
        <div className="title">{title}</div>
        <div className="rating">Rating: {popularity}</div>
        <div className="movie-cardHover">
         <p>{overview}</p> 
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
