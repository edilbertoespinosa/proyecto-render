import React from "react";
import SmallCard from "./SmallCard";
import { useState, useEffect } from "react";

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
  title: "Películas en la base de datos",
  color: "primary",
  cuantity: "21",
  icon: "fa-clipboard-list",
};

/* <!-- Total awards --> */

let totalAwards = {
  title: " Total de Géneros",
  color: "success",
  cuantity: "79",
  icon: "fa-award",
};

/* <!-- Actors quantity --> */

let actorsQuantity = {
  title: "Usuarios en la base de datos",
  color: "warning",
  cuantity: "49",
  icon: "fa-user-check",
};

//let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies() {
  //   let [movies, setMovies] = useState([]);
  //   let [genres, setGenres] = useState([]);
  //   let [users, setUsers] = useState([]);
  let [cartProps, setCartProps] = useState([]);

  useEffect(() => {
    let movies;
    let genres;
    let users;

    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        movies = data.movies;
        moviesInDB.cuantity = movies.length;
        console.log("movies.length : ", movies.length);
        moviesInDB.cuantity = movies.length;

        fetch("http://localhost:3000/api/genres")
          .then((response) => response.json())
          .then((data) => {
            genres = data.genero;
            totalAwards.cuantity = genres.length;
            console.log("genres.length : ", genres.length);

            fetch("http://localhost:3000/api/users")
              .then((response) => response.json())
              .then((data) => {
                users = data.users;
                console.log("users : ", users);
                console.log("users.length : ", users.length);
                actorsQuantity.cuantity = users.length;
                setCartProps([moviesInDB, totalAwards, actorsQuantity]);
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;
