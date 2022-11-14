import React from "react";

const MovieDetails = (props) => {
  return (
    <div className="movie-card">
      <div className="poster">
        <img src={props.movieInfo.Poster} alt="" />
      </div>
      <div className="mdetails">
        <div className="row">
          <h3>movie Name : </h3>
          <span>{props.movieInfo.Title}</span>
        </div>
        <div className="row">
          <h4>Actor : </h4>
          <span>{props.movieInfo.Actors}</span>
        </div>
        <div className="row">
          <h4>IMDB Rating : </h4>
          <span>{props.movieInfo.imdbRating}</span>
        </div>
        <div className="row">
          <h4>Country : </h4>
          <span>{props.movieInfo.Country}</span>
        </div>
        <div className="row">
          <h4>Language : </h4>
          <span>{props.movieInfo.Language}</span>
        </div>
        <div className="row">
          <h4>Rated : </h4>
          <span>{props.movieInfo.Rated}</span>
        </div>
        <div className="row">
          <h4>Released : </h4>
          <span>{props.movieInfo.Released}</span>
        </div>
        <div className="row">
          <h4>Runtime : </h4>
          <span>{props.movieInfo.Runtime}</span>
        </div>
        <div className="row">
          <h4>Directot : </h4>
          <span>{props.movieInfo.Director}</span>
        </div>
        <div className="row">
          <h4> Writer :</h4>
          <span>{props.movieInfo.Writer}</span>
        </div>
      </div>

      <div className="closeBtn">
        <button onClick={() => props.onclose()}>X</button>
      </div>
    </div>
  );
};

export default MovieDetails;