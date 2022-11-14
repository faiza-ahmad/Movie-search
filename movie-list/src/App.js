import React, { useState } from "react";
import Header from "./components/Header";
import "./components/netflixStyle.css";
import Container from "./components/Container";
// import Card from "./components/Card";
import axios from "axios";
const API_KEY = "a9118a3a";

function App() {
  const [searchQuery, updateSearchquery] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [timeoutId, updateTimeOutId] = useState();
  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    updateMovieList(response.data.Search);
  };

  const searchMovie = (e) => {
    clearTimeout(timeoutId);

    updateSearchquery(e.target.value);
    const timeout = setTimeout(() => fetchData(searchQuery), 500);
    updateTimeOutId(timeout);
    // fetchData(e.target.value);
  };
  console.log(movieList);

  return (
    <>
      <div className="main-container">
        <Header searchMovie={searchMovie} />
      </div>
      <div className="mMargin">
        <Container movies={movieList} />
      </div>
    </>
  );
}

export default App;