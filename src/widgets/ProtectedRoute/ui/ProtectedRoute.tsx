import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "src/shared/lib/useAuth";
import { Loader } from "src/shared/ui/Loader/Loader";

interface Props {
  isAuthenticated: boolean;
}

export const ProtectedRoute = (props: Props) => {
  const { isAuthenticated } = props;
  const { isAuth, isLoading } = useAuth();

  if (!isLoading) {
    return <Loader />;
  }

  if (isAuthenticated && !isAuth) {
    return <Navigate to="/login" />;
  }

  if (!isAuthenticated && isAuth) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
