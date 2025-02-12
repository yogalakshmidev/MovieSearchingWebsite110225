import { Route, Routes } from "react-router-dom";

import { MovieDetails, MovieList, PageNotFound, Search } from "../pages";
import { MovieType } from "../pages/MovieType";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MovieType title="Your Guide to Great Movies" apiPath="movie" />
          }
        />

        <Route
          path="/movies/movie"
          element={<MovieList title="Movies:" apiPath="movies" />}
        />
        <Route
          path="/movies/series"
          element={<MovieList title="Series:" apiPath="series" />}
        />
        <Route
          path="/movies/episode"
          element={<MovieList title="Episodes:" apiPath="episodes" />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />

        <Route path="search" element={<Search apiPath="series" />} />

        <Route path="*" element={<PageNotFound />} title="Page Not Found" />
      </Routes>
    </>
  );
};

export default AllRoutes;
