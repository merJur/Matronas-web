import { Link, useNavigate } from "react-router-dom";
import { logout } from "./../../../store/AccessTokenStore";
import { useAuthContext } from "./../../../context/AuthContext";
import "./UsersProfileScreen.css";

const UsersProfileScreen = () => {
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const logoutSession = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container-profile">
      
      <h1 className="profile">Hola {`${user && user.name}`}</h1>
          {user && !user.isAdmin ?(
              <p className="profile"><i>Te deseamos un buen día</i></p>
          ): null}
      <div className="btn-profile">
        {user && user.isAdmin ? (
          <div className="btn-profile">
            <Link
              to={"/blog/create"}
              style={{ textDecoration: "none" }}
              className={"btn btn-primary btns-admin"}
            >
              Crear nuevo post
            </Link>
            <Link
              to={"/course/create"}
              style={{ textDecoration: "none" }}
              className={"btn btn-primary btns-admin"}
            >
              Crear nuevo curso
            </Link>
            <Link
              to={"/users"}
              style={{ textDecoration: "none" }}
              className={"btn btn-primary btns-admin"}
            >
              Listado de usuarios
            </Link>
          </div>
        ) : null}
        <img src='https://res.cloudinary.com/merjur/image/upload/v1667410033/matronas/OM_seniwq.png' alt='logo' className="logo-profile" />
        <button 
        onClick={() => logoutSession()}
        className={"btn btn-primary btn-log-out"}
      >
        Cerrar Sesión
      </button>
      </div>
    </div>
  );
};

export default UsersProfileScreen;
