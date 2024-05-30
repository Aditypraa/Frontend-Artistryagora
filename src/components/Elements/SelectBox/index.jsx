/* eslint-disable react/prop-types */
import Select from "react-select";

function SelectBox({
  name,
  options,
  isClearable,
  value,
  placeholder,
  handleChange,
  label,
}) {
  return (
    <form className="mb-2">
      {label && <label>{label}</label>}
      <Select
        name={name}
        isClearable={isClearable}
        placeholder={placeholder}
        options={options}
        onChange={handleChange}
        value={value}
      />
    </form>
  );
}

export default SelectBox;
