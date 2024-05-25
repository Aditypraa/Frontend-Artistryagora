import PropTypes from "prop-types";

function Loading({ className }) {
  return (
    <div className={`flex items-center justify-center  ${className}`}>
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-400"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
      </div>
    </div>
  );
}

Loading.propTypes = {
  className: PropTypes.string,
};

export default Loading;
