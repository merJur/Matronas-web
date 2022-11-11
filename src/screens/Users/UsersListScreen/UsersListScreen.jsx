import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../../../services/UserServices";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import './UsersListScreen.css'

const UsersListScreen = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(() => {
    getUsers().then((user) => {
      setUsers(user);
    });
  }, [])

  const fetchDelete = (id) => {
    deleteUser(id)
    .then((deletedUser) => {
      fetchUsers()
    });
  }

   const handleDelete = (id) => {
    confirmAlert({
      title: 'Confirmación',
      message: '¿Estás seguro que quieres borrar?',
      buttons: [
        {
          label: 'Si',
          onClick: (ev) => fetchDelete(id)
        },
        {
          label: 'No',
          onClick: (ev) => console.log('NO')
        }
    ]
    })
   
   
   };

  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <div>
      <h1 className="title-user-list">Lista de usuarios</h1>
      <div>
        <ul className="list-group container-user-list mt-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="mb-2 list-group-item d-flex justify-content-between align-items-center container-li-user-list"
            >
              <div className="column">
                <div className="user-name"> <strong>{user.name} </strong></div>
                <div style={{fontSize:'12px', marginTop: '-1rem'}}>Teléfono: {user.phone}</div>
              </div>
              
              <div className="badge">
                <Link
                  className="link-unstyled me-3"
                  to={`/users/${user.id}/update`} 
                >
                  <span className="btn btn-edit-user">
                    <p className="btn-edit-text">Editar datos</p>
                  </span>
                </Link>
                <i
                  onClick={() => handleDelete(user.id)}
                  className="btn  btn-edit-user"
                  type={"btn"}
                >
                  
                  <p className="btn-edit-text">Borrar </p>
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
