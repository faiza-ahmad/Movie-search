import axios from "axios";
import React, { useState } from "react";
import Card from "./Card";
import MovieDetails from "./MovieDetails";

const API_KEY = "a9118a3a";

const Container = (props) => {
  const [selecttedMovie, updateSelectedMovie] = useState();
  const getMovieDetails = async (searched) => {
    let response = await axios.get(
      `https://www.omdbapi.com/?i=${searched}&apikey=${API_KEY}`
    );
    updateSelectedMovie(response.data);
  };
  const onMovieSelect = (id) => {
    console.log(id);
    getMovieDetails(id);
  };
  const closeSearch = () => {
    updateSelectedMovie();
  };
  console.log(selecttedMovie);
  return (
    <>
      {selecttedMovie ? (
        <MovieDetails movieInfo={selecttedMovie} onclose={closeSearch} />
      ) : null}

      <div className="container">
        {props.movies?.length
          ? props.movies.map((movie, index) => (
              <Card key={index} movie={movie} onSelect={onMovieSelect} />
            ))
          : "No Movie Search"}
      </div>
    </>
  );
};

export default Container;