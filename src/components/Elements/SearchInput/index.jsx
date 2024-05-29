import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

function SearchInput({ handleChange, query, disabled }) {
  return (
    <div className="mb-3 relative flex items-center">
      <FaSearch className="absolute left-3 text-gray-400" />
      <input
        disabled={disabled}
        type="text"
        placeholder="Masukan pencarian"
        value={query}
        name="query"
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

SearchInput.propTypes = {
  handleChange: PropTypes.func,
  query: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SearchInput;
