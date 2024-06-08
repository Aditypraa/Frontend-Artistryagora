import PropTypes from "prop-types";
function CmsLayouts({ children }) {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-collapse rounded-lg dark:border-gray-700">
          {children}
        </div>
      </div>
    </>
  );
}

CmsLayouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CmsLayouts;
