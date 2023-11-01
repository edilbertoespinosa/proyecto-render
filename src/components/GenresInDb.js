import React from "react";
import { useState, useEffect } from "react";

import GenreRow from "./GenreRow";

function GenresInDb() {
  let [genres, setGenres] = useState([]);

  useEffect(() => {
    let generos = [];
    let peliculas = [];
    let peliculasGenero = [];
    fetch("http://localhost:3000/api/genres")
      .then((response) => response.json())
      .then((data) => {
        generos = data.genero;

        fetch("http://localhost:3000/api/products")
          .then((response) => response.json())
          .then((data) => {
            peliculas = data.movies;

            for (let i = 0; i < generos.length; i++) {
              peliculasGenero = peliculas.filter(
                (pelicula) => pelicula.genres.id === generos[i].id
              );
              generos[i].cantidad = peliculasGenero.length;
            }
            console.log("generos : ", generos);
            setGenres(generos);
            console.log("genres : ", genres);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Generos en la base de datos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {genres.map((row, i) => {
              return <GenreRow {...row} key={i} />;
            })}

            {/* <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Acción</div>
              </div>
            </div> */}

            {/* <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Animación</div>
              </div>
            </div> */}

            {/* <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Aventura</div>
              </div>
            </div> */}

            {/* <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Ciencia Ficción</div>
              </div>
            </div> */}

            {/* <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Comedia</div>
              </div>
            </div> */}

            {/* <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Documental</div>
              </div>
            </div> */}

            {/* <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Drama</div>
              </div>
            </div> */}

            {/* <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Fantasia</div>
              </div>
            </div> */}

            {/* <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Infantiles</div>
              </div>
            </div> */}

            {/* <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Musical</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
