import { Navigate } from 'react-router-dom';
import { useAuthContext } from './../../context/AuthContext';
import { getAccessToken } from './../../store/AccessTokenStore';


const ProtectedRoute = ({children}) => {
    const token = getAccessToken()
    const { user } = useAuthContext()

    console.log(user);
    if (!token && !user) {
        return <Navigate to='/login' replace />
    }
    return children
}

export default ProtectedRoute