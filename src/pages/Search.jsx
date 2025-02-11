import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";

export const Search = ({ apiPath }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  apiPath = queryTerm;

  const { movies } = useFetch(apiPath, currentPage, queryTerm);
  const { totalResults } = useFetch(apiPath, currentPage);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < totalResults) {
      setCurrentPage((next) => next + 1);
    }
  };

  useEffect(() => {
    document.title = `search result for ${queryTerm}`;
  });

  return (
    <div>
      <main className="container">
        <h5 className="text-danger py-2 border border-bottom">
          {movies.length == 0
            ? `No result found for ${queryTerm}`
            : `Result found for ${queryTerm}`}
        </h5>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
          {movies.slice(0, 5).map((movie,index) => {
            return <Card key={index} movie={movie} />;
          })}
        </div>
      </main>
      <div className="buttons">
        {currentPage > 1 && (
          <button className="btnPrev" onClick={prevPage}>
            Back
          </button>
        )}
        <p>Page | {currentPage}</p>
        {currentPage < totalResults && (
          <button className="btnNext" onClick={nextPage}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};
