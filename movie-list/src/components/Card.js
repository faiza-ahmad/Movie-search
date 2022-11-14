import React from "react";

const Card = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div>
      <div className="cards" onClick={() => props.onSelect(imdbID)}>
        <div className="card-img">
          <img src={Poster} alt="movie logo" />
        </div>

        <div className="card-info">
          <h1> {Title} </h1>
        </div>
        <div className="details">
          <h4>
            Year : <span>{Year}</span>
          </h4>
          <h4>type:{Type} </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;