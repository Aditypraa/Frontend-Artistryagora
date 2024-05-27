import PropTypes from "prop-types";
function Thead({ text }) {
  return (
    <thead>
      <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
        {text.map((text, index) => (
          <th key={index} className="px-4 py-3">
            {text}
          </th>
        ))}
      </tr>
    </thead>
  );
}

Thead.propTypes = {
  text: PropTypes.array,
};

export default Thead;
