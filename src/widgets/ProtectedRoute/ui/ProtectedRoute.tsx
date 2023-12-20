import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { useAppSelector } from "src/app/providers/store/config/hooks";
import { getUser } from "src/features/Auth/model/selector/getUser";

interface Props {
  isAuthenticated: boolean;
}

export const ProtectedRoute = (props: Props) => {
  const { isAuthenticated } = props;
  const { uid } = useAppSelector(getUser);

  if (isAuthenticated && !uid) {
    return <Navigate to="/login" />;
  }

  if (!isAuthenticated && uid) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
