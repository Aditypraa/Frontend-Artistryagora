import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

export default function GuestOnlyRoute({ children }) {
  let { token } = useSelector((state) => state.auth);

  if (token) return <Navigate to="/" replace={true} />;
  return children || <Outlet />;
}

GuestOnlyRoute.propTypes = {
  children: PropTypes.node,
};
