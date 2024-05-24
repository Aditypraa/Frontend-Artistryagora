import PropTypes from "prop-types";

function Navbar({ children }) {
  return (
    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
      {children}
    </div>
  );
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navbar;
