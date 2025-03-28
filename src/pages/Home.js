import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to the User Management System</h2>
      <p>Manage users efficiently using the Reqres API.</p>
      <Link to="/users">
        <button>Go to Users List</button>
      </Link>
    </div>
  );
};

export default Home;
