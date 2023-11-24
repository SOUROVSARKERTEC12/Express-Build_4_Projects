import {Route, Navigate} from 'react-router-dom';
import { useGlobalContext } from '../context/appContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useGlobalContext();

  return (
    <Route
      {...rest}
      element={user ? children : <Navigate to="/" replace />}
    />
  )
};

export default PrivateRoute;
