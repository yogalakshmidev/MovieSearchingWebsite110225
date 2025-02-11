import { useEffect, useState } from "react";
import { useParams } from "react-router";
import backup from "../assets/backup.jpeg";
export const MovieDetails = () => {
  const params = useParams();
  
  const [movie, setMovie] = useState([]);
  
  const image = movie.Poster ? movie.Poster : backup;
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://www.omdbapi.com/?i=${params.id}&apikey=${key}`;
  
  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => {
  
          setMovie(jsonData);
        });
    }
    fetchMovies();
  },[]);

  useEffect(() => {
    document.title = `${movie.Title}`;
  });

  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom mb-3">{movie.Title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-8">
          <h3 className="text-primary">{movie.Title}</h3>
          <p>Released Year : {movie.Year}</p>
          <p>Genre : {movie.Genre}</p>
          <p>Summary : {movie.Plot}</p>
          <p>OMDB Ratings are : {movie.imdbRating}</p>

          {movie.Ratings ? (
            <p className="d-flex gap-1">
              Rating from various  other sources are  : 
              {movie.Ratings.map((rating) => (
                <span key={rating.Source} className="badge bg-danger">{rating.Value}</span>
              ))}
            </p>
          ) : (
            ""
          )}

          <p>Cast (Group of actors) :

            <p>{movie.Actors}</p>
          </p>
        </div>
      </div>
    </main>
  );
};
