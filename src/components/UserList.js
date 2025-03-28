import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/styles.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => setUsers(response.data.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleDelete = (id) => {
    
    setUsers(users.filter((user) => user.id !== id));
  };

  
  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name} ${user.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-container">
      <h2 className="user-heading">Users List</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div className="user-card" key={user.id}>
              <img src={user.avatar} alt={user.first_name} className="user-avatar" />
              <h3>{user.first_name} {user.last_name}</h3>
              <p className="user-email">{user.email}</p>
              <div className="button-group">
                <Link to={`/edit/${user.id}`}>
                  <button className="edit-btn">Edit</button>
                </Link>
                <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No users found</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
