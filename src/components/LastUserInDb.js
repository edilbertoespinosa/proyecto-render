import React from "react";
import { useState, useEffect } from "react";

function LastUserInDb() {
  let [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        setUser(users[users.length - 1]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last user in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center card bg-dark text-white shadow">
            <p>id : {user.id}</p>
          </div>
          <div className="text-center card bg-dark text-white shadow">
            <p>name : {user.name}</p>
          </div>
          <div className="text-center card bg-dark text-white shadow">
            <p>mail : {user.mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastUserInDb;