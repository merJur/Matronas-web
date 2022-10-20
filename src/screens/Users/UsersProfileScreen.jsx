import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getUserDetail } from '../../services/UserServices';
import { logout } from '../../store/AccessTokenStore'; 
import { GoogleLogout } from 'react-google-login';
import { useAuthContext } from './../../context/AuthContext';


const UsersProfileScreen = () => {

    const { user } = useAuthContext()

    // const { id } = useParams()
    const navigate = useNavigate()

    // useEffect(() => {
    //     getUserDetail(id)
    //     .then(user => {
    //         setUser(user)
    //     })
    // }, [id, navigate])


    const logoutSession = () => {
        logout() || GoogleLogout()
       }
    const navigateHome = () => {
        if (logoutSession) {
            navigate('/')           
        }
    }



    return (
        <div>
            
            <h1>Hola profile de {`${user && user.name }`}</h1>            
            <div>
                <button onClick={logoutSession && navigateHome}> Logout </button>
                {user && user.isAdmin ? <Link to={'/blog/create'}> <p> Create post</p> </Link> : null}
            </div>
        </div>
    );
};

export default UsersProfileScreen;        