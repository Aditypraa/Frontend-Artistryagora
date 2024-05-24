import PropTypes from "prop-types";

function CmsLayouts({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* <!-- Main content --> */}
      {children}
      {/* <!-- Main content --> */}
    </div>
  );
}

CmsLayouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CmsLayouts;
