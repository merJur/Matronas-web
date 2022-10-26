import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../../services/UserServices";

const UsersListScreen = () => {
  const [users, setUsers, ] = useState([]);

  const fetchUsers = useCallback(() => {
    getUsers().then((user) => {
      setUsers(user);
    });
  }, [])

  const handleDelete = (id) => {
    deleteUser(id)
    .then((deletedUser) => {
      fetchUsers()
    });
  };

 
  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <div>
        <ul className="list-group container mt-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="mb-2 list-group-item d-flex justify-content-between align-items-center"
            >
              <Link className="link-unstyled" to={`/users/${user.id}`}>
                {user.name}
              </Link>
              <div className="badge">
                <Link
                  className="link-unstyled me-3"
                  to={`/users/${user.id}/update`} 
                >
                  <span className="badge badge-primary bg-primary badge-pill">
                    Edit
                  </span>
                </Link>
                <i
                  onClick={() => handleDelete(user.id)}
                  className="btn badge badge-danger text-light bg-danger badge-pill"
                  type={"btn"}
                >
                  Delete
                </i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersListScreen;
