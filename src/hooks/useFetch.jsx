import { useEffect, useState } from "react";

export const useFetch = (apiPath,currentPage, queryTerm = "") => {
  
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState([]);
  
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://www.omdbapi.com/?s=${apiPath}&apikey=${key}&page=${currentPage}&queryTerm=${queryTerm}`;

  

  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => {
          setMovies(jsonData.Search);
          setTotalResults(jsonData.totalResults);
        });
    }
    fetchMovies();
  }, [url]);

  return { movies, totalResults };
};
