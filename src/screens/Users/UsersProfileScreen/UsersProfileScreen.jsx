import { Link, useNavigate } from "react-router-dom";
import { logout } from './../../../store/AccessTokenStore'
import { useAuthContext } from "./../../../context/AuthContext";


const UsersProfileScreen = () => {
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const logoutSession = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Hola {`${user && user.name}`}</h1>
      <div>
        <button onClick={() => logoutSession()} className={'btn btn-primary'} > Cerrar Sesión </button>
        {user && user.isAdmin ? (
          <div>
            <Link to={"/blog/create"} style={{textDecoration:'none'}} className={'btn btn-primary'}> Nueva entrada del blog</Link>            
            <Link to={"/users"} style={{textDecoration:'none'}} className={'btn btn-primary'}> Listado de usuarios</Link>     
            <Link to={"/course/create"} style={{textDecoration:'none'}} className={'btn btn-primary'}>Crear un curso nuevo </Link>     
            
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UsersProfileScreen;
