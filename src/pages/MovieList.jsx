import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import "../App.css";
const filterData = [
  {
    label: "Movie",
    value: "movie",
  },
  {
    label: "Series",
    value: "series",
  },
];
export const MovieList = ({ title, apiPath }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(filterData[0].value);

  const { movies } = useFetch(apiPath, currentPage);
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
    document.title = title;
  });

  const updateSelectedItem = (event) => {
 setSelectedOption(event.target.value);
if(selectedOption=="series")
 console.log("value of the selected option is", event.target.value);
navigator("/movies/series");
setSelectedOption("");
  };

  const navigator = useNavigate();
  return (
    <div>
      <main className="container">
        {title == "Your Guide to Great Movies" ? (
          <div className="bg-body-tertiary p-5 border mb-5">
            <h3 className=" text-primary">Welcome to Movie Online</h3>
            <p className="lead fw-bold">Filtered Movies By Types:</p>
            <select
              className="form-select form-select-lg"
              value={selectedOption}
              onChange={(event) => updateSelectedItem(event)}
                       

            >
              {filterData.map((filter) => (
                <option key={filter.value} value={filter.value}>
                  {filter.label}
                </option>
              ))}
            </select>
            <p className="lead">
              Discover Movies based on your own interest and your suggestions.
              There is a quick search option available for you find your movies
            </p>
            <button
              onClick={() => {
                navigator("/movies/episode");
              }}
              className="btn btn-primary"
            >
              Explore Now
            </button>
          </div>
        ) : (
          " "
        )}
        <h5 className="text-danger py-2 border-bottom">{title}</h5>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
          {
             ( movies.slice(0, 5).map((movie,index) => {
                return <Card key={index} movie={movie}
                 />;
              })) 
   }
          
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
