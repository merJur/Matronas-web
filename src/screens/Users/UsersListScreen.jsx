import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../../services/UserServices";

const UsersListScreen = () => {
    const needRefresh = () => {
        getUsers().then((users) => {
          setUsers(users);
        });
      };

  const [users, setUsers, ] = useState([], needRefresh());

  const handleDelete = (id) => {
    deleteUser(id).then((deletedUser) => {
      const newUsers = users.filter((user) => user.id !== deletedUser.id);
      setUsers(newUsers);
    });
  };

 
  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users)
    });
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
