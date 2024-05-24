import PropTypes from "prop-types";

const Button = ({ children, onClick, loading, disabeld, className }) => {
  return (
    <button
      className={`${className} rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50`}
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
