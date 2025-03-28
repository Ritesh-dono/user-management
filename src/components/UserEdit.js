import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/styles.css";

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
      setUser(response.data.data);
    });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://reqres.in/api/users/${id}`, user).then(() => {
      alert("User updated successfully!");
      navigate("/users");
    });
  };

  return (
    <div className="edit-container">
      <div className="edit-card">
        <h2>Edit User</h2>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="First Name"
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;
