import PropTypes from "prop-types";
function CmsLayouts({ children }) {
  return (
    <main className="main flex-grow p-4">
      <div className="h-full bg-gray-200 border-gray-200  shadow-md">
        <div className="flex justify-center items-center">{children}</div>
      </div>
    </main>
  );
}

CmsLayouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CmsLayouts;
