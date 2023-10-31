import React from "react";
import { useState, useEffect } from "react";

function LastMovieInDb() {
  let [movie, setMovie] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        const movies = data.movies;
        setMovie(movies[movies.length - 1]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last movie in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center card bg-dark text-white shadow">
            <p>id : {movie.id}</p>
          </div>
          <div className="text-center card bg-dark text-white shadow">
            <p>name : {movie.name}</p>
          </div>
          <div className="text-center card bg-dark text-white shadow">
            <p>description : {movie.description}</p>
          </div>
          <div className="text-center card bg-dark text-white shadow">
            <p>genre : {movie.genres.description}</p>
          </div>
          <div className="text-center card bg-dark text-white shadow">
            <p>classification : {movie.classifications.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;
