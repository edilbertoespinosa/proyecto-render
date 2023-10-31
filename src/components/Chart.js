import React from "react";
import ChartRow from "./ChartRow";
import { useState, useEffect } from "react";

let tableRowsData = [
  {
    id: 1,
    name: "Billy Elliot ",
    description: "Billy Elliot ",
    genres: { description: "genero1" },
    classifications: { description: "clasificacion1" },
  },
  {
    id: 1,
    name: "Alicia en el país de las maravillas",
    description: "Alicia en el país de las maravillas",
    genres: { description: "genero2" },
    classifications: { description: "clasificacion2" },
  },
];

function Chart() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Género</th>
                <th>Clasificación</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Género</th>
                <th>Clasificación</th>
              </tr>
            </tfoot>
            <tbody>
              {movies.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
