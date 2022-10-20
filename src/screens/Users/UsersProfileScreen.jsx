import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../store/AccessTokenStore";
import { useAuthContext } from "./../../context/AuthContext";


const UsersProfileScreen = () => {
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const logoutSession = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h1>Hola profile de {`${user && user.name}`}</h1>
      <div>
        <button onClick={() => logoutSession()} className={'btn btn-primary'} > Logout </button>
        {user && user.isAdmin ? (
          <div>
            <Link to={"/blog/create"} style={{textDecoration:'none'}} className={'btn btn-primary'}> Create post</Link>            
            <Link to={"/users"} style={{textDecoration:'none'}} className={'btn btn-primary'}> Users List</Link>     
            <Link to={"/users"} style={{textDecoration:'none'}} className={'btn btn-primary'}> Users List</Link>     
            
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UsersProfileScreen;
