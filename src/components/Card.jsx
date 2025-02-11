import { Link } from "react-router-dom";
import backup from "../assets/backup.jpeg";

export const Card = ({ movie }) => {
  const { Title, Poster, Type, Year,imdbID } = movie;
  
  const image = Poster? Poster : backup;

  return (
    <div className="col">
      <div className="card shadow-sm" title={Title}>
        <img src={image} alt="" className="card-img-top" />

        <div className="card-body">
          <h5 className="card-title text-primary text-uppercase">{Type}</h5>
          <p className="flex justify-start card-text">{Title} </p>
          <div className="d-flex align-items-center justify-content-between">
            <Link
              to ={`/movie/${imdbID}`}
              className="btn btn-sm btn-outline-primary stretched-link"
            >
              Read More
            </Link>
            <small>
              Released Year :{Year}
          
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
