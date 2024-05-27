import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavAccess({
  onClick,
  title,
  role,
  roles,
  children,
  className = "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400",
}) {
  console.log("role");
  console.log(role);
  console.log("roles");
  console.log(roles);
  // Check if roles is an array and role is defined
  let isHas = Array.isArray(roles) && roles.indexOf(role) >= 0;
  console.log(isHas);

  return (
    <>
      {isHas && (
        <Link title={title} className={className} onClick={onClick}>
          {children}
        </Link>
      )}
    </>
  );
}

// Define PropTypes for validation
NavAccess.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  role: PropTypes.string,
  roles: PropTypes.arrayOf(PropTypes.string), // Ensure roles is an array of strings
  children: PropTypes.node,
  className: PropTypes.string,
};

export default NavAccess;
