/* eslint-disable react/prop-types */
import Select from "react-select";
import Label from "../InputForm/Label";

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
    <form className="my-3 mx-3">
      {label && <Label>{label}</Label>}
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
