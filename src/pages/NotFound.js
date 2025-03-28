import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const NotFound = () => {
  return (
    <div className="container">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link to="/">
        <button>Go Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
