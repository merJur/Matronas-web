import React, {useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserDetail } from '../../services/UserServices';


const UsersProfileScreen = () => {

    const [ user, setUser ] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getUserDetail(id)
        .then(user => {
            setUser(user)
        })
    }, [id, navigate])
    return (
        <div>
            <h1>Hola profile de {`${user.name}`}</h1>            
        </div>
    );
};

export default UsersProfileScreen;        