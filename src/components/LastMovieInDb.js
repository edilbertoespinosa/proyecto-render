import React from "react";
import { useState, useEffect } from "react";

function LastMovieInDb() {
  let [movie, setMovie] = useState({});
  let genre = "";
  let classification = "";

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        const movies = data.movies;
        setMovie(movies[movies.length - 1]);
      })
      .catch((error) => console.log(error));
  }, []);

  if (movie.genres) {
    genre = movie.genres.description;
  }

  if (movie.classifications) {
    classification = movie.classifications.description;
  }

  return (
    <div className="mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Última película grabada
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center card bg-dark text-white shadow">
            <p>Id : {movie.id}</p>
          </div>
          <div className="text-center card bg-dark text-white shadow">
            <p>Nombre : {movie.name}</p>
          </div>
          <div className="text-center card bg-dark text-white shadow">
            <p>Descripción : {movie.description}</p>
          </div>
          <div className="text-center card bg-dark text-white shadow">
            <p>Genero : {genre}</p>
          </div>
          <div className="text-center card bg-dark text-white shadow">
            <p>Clasificación : {classification}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;
