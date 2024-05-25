import PropTypes from "prop-types";

const Button = ({ children, onClick, loading, disabeld, className }) => {
  return (
    <button
      className={`${className} rounded-xl bg-gradient-to-br text-base font-medium text-white transition duration-200 hover:shadow-lg `}
      onClick={onClick}
      disabled={disabeld}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  disabeld: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
