import PropTypes from "prop-types";
import Input from "./Input";
import Label from "./Label";

const InputForm = ({
  label,
  name,
  value,
  type,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div className="my-3 mx-3">
      <Label>{label}</Label>
      <Input
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={` ${className}  w-full mt-2 px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default InputForm;
