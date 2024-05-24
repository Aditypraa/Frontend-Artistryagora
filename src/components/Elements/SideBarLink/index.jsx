import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SideBarLink({ to, children }) {
  return (
    <Link
      to={to}
      className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
    >
      {children}
    </Link>
  );
}

SideBarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SideBarLink;
