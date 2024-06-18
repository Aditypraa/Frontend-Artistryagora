import Label from "../InputForm/Label";
import PropTypes from "prop-types";

export default function TextArea({
  label,
  name,
  value,
  type,
  onChange,
  placeholder,
}) {
  return (
    <>
      <Label>{label}</Label>
      <textarea
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
