import { useEffect, useState } from "react";

export const useFetchSelection = (apiPath,currentPage,type) => {
  
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState([]);
  
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://www.omdbapi.com/?s=${apiPath}&apikey=${key}&page=${currentPage}&type=${type}`;

  

  useEffect(() => {
    async function fetchSelectedMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => {
          setMovies(jsonData.Search);
          setTotalResults(jsonData.totalResults);
        });
    }
    fetchSelectedMovies();
  }, [url]);

  return { movies, totalResults };
};
