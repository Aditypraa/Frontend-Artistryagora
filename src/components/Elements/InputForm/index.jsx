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
    <div>
      <Label>{label}</Label>
      <Input
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={` ${className}w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg`}
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
