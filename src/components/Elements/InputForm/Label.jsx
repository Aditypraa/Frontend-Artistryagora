import PropTypes from "prop-types";

const Label = ({ className, children }) => {
  return <label className={`${className} font-medium`}>{children}</label>;
};

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Label;
